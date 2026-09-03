import hashlib
import hmac
import json

from fastapi import APIRouter, HTTPException, Request

from app.config import RAZORPAY_WEBHOOK_SECRET
from app.db import get_db_connection

router = APIRouter()


@router.post("/webhook")
async def razorpay_webhook(request: Request):
    conn = None
    cursor = None

    try:
        body = await request.body()
        signature = request.headers.get("X-Razorpay-Signature")

        if not RAZORPAY_WEBHOOK_SECRET:
            raise HTTPException(status_code=500, detail="Webhook secret not configured")

        expected_sig = hmac.new(
            RAZORPAY_WEBHOOK_SECRET.encode(),
            body,
            hashlib.sha256,
        ).hexdigest()

        if not signature or not hmac.compare_digest(expected_sig, signature):
            raise HTTPException(status_code=400, detail="Invalid signature")

        payload = json.loads(body)

        if payload.get("event") == "payment.captured":
            payment = payload["payload"]["payment"]["entity"]
            order_id = payment["order_id"]

            conn = get_db_connection()
            cursor = conn.cursor()

            cursor.execute(
                """
                SELECT id FROM school_management.invoices
                WHERE razorpay_order_id = ?
            """,
                (order_id,),
            )
            row = cursor.fetchone()

            if row:
                invoice_id = row[0]

                cursor.execute(
                    """
                    UPDATE school_management.invoices
                    SET status = 'paid'
                    WHERE id = ?
                """,
                    (invoice_id,),
                )

                cursor.execute(
                    """
                    INSERT INTO school_management.payments
                        (invoice_id, razorpay_payment_id, status, amount)
                    VALUES (?, ?, 'success', ?)
                """,
                    (
                        invoice_id,
                        payment["id"],
                        payment["amount"] / 100,
                    ),
                )

                conn.commit()

        return {"status": "ok"}

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()
