# import traceback

# from fastapi import APIRouter
# from fastapi.responses import JSONResponse

# from app.config import razorpay_client
# from app.db import get_db_connection
# from app.models import PaymentRequest, VerifyPayment

# router = APIRouter()


# @router.post("/create-order")
# async def create_order(request: PaymentRequest):
#     conn = None
#     cursor = None

#     try:
#         conn = get_db_connection()
#         cursor = conn.cursor()

#         cursor.execute(
#             """
#             EXEC school_management.CreatePaymentOrder
#                 @name=?,
#                 @email=?,
#                 @address=?,
#                 @amount=?
#         """,
#             (
#                 request.name,
#                 request.email,
#                 request.address,
#                 request.amount,
#             ),
#         )

#         row = cursor.fetchone()

#         if not row:
#             return JSONResponse(
#                 status_code=400,
#                 content={
#                     "success": False,
#                     "message": "Invoice not created",
#                 },
#             )

#         invoice_id = row[0]

#         order = razorpay_client.order.create(
#             {
#                 "amount": int(float(request.amount) * 100),
#                 "currency": "INR",
#                 "receipt": f"INV_{invoice_id}",
#             }
#         )

#         cursor.execute(
#             """
#             UPDATE school_management.invoices
#             SET razorpay_order_id=?
#             WHERE id=?
#         """,
#             (order["id"], invoice_id),
#         )

#         conn.commit()

#         return {
#             "success": True,
#             "id": order["id"],
#             "amount": order["amount"],
#             "currency": order["currency"],
#             "invoice_id": invoice_id,
#         }

#     except Exception as e:
#         traceback.print_exc()
#         return JSONResponse(
#             status_code=500,
#             content={"success": False, "error": str(e)},
#         )

#     finally:
#         if cursor:
#             cursor.close()
#         if conn:
#             conn.close()


# @router.post("/verify-payment")
# async def verify_payment(data: VerifyPayment):
#     conn = None
#     cursor = None

#     try:
#         razorpay_client.utility.verify_payment_signature(
#             {
#                 "razorpay_order_id": data.razorpay_order_id,
#                 "razorpay_payment_id": data.razorpay_payment_id,
#                 "razorpay_signature": data.razorpay_signature,
#             }
#         )

#         conn = get_db_connection()
#         cursor = conn.cursor()

#         cursor.execute(
#             """
#             SELECT amount FROM school_management.invoices WHERE id=?
#         """,
#             (data.invoice_id,),
#         )
#         row = cursor.fetchone()

#         if not row:
#             return JSONResponse(
#                 status_code=404,
#                 content={"success": False, "message": "Invoice not found"},
#             )

#         amount = row[0]

#         cursor.execute(
#             """
#             UPDATE school_management.invoices
#             SET status='paid'
#             WHERE id=?
#         """,
#             (data.invoice_id,),
#         )

#         cursor.execute(
#             """
#             INSERT INTO school_management.payments
#                 (invoice_id, razorpay_payment_id, status, amount)
#             VALUES (?, ?, 'success', ?)
#         """,
#             (data.invoice_id, data.razorpay_payment_id, amount),
#         )

#         conn.commit()

#         return {"success": True, "message": "Payment Verified"}

#     except Exception as e:
#         traceback.print_exc()
#         return JSONResponse(
#             status_code=500,
#             content={"success": False, "error": str(e)},
#         )

#     finally:
#         if cursor:
#             cursor.close()
#         if conn:
#             conn.close()

import traceback

from fastapi import APIRouter
from fastapi.responses import JSONResponse

from app.config import razorpay_client
from app.db import get_db_connection
from app.models import PaymentRequest, VerifyPayment

router = APIRouter()


@router.post("/create-order")
async def create_order(request: PaymentRequest):
    conn = None
    cursor = None

    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute(
            """
            EXEC school_management.CreatePaymentOrder
                @name=?,
                @email=?,
                @address=?,
                @amount=?
            """,
            (
                request.name,
                request.email,
                request.address,
                request.amount,
            ),
        )

        row = cursor.fetchone()

        if not row:
            return JSONResponse(
                status_code=400,
                content={
                    "success": False,
                    "message": "Invoice not created",
                },
            )

        invoice_id = row[0]

        order = razorpay_client.order.create(
            {
                "amount": int(float(request.amount) * 100),
                "currency": "INR",
                "receipt": f"INV_{invoice_id}",
            }
        )

        cursor.execute(
            """
            UPDATE school_management.invoices
            SET razorpay_order_id=?
            WHERE id=?
            """,
            (order["id"], invoice_id),
        )

        conn.commit()

        return {
            "success": True,
            "id": order["id"],
            "amount": order["amount"],
            "currency": order["currency"],
            "invoice_id": invoice_id,
        }

    except Exception as e:
        traceback.print_exc()
        return JSONResponse(
            status_code=500,
            content={"success": False, "error": str(e)},
        )

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()


@router.post("/verify-payment")
async def verify_payment(data: VerifyPayment):
    conn = None
    cursor = None

    try:
        # Verify Razorpay Signature
        razorpay_client.utility.verify_payment_signature(
            {
                "razorpay_order_id": data.razorpay_order_id,
                "razorpay_payment_id": data.razorpay_payment_id,
                "razorpay_signature": data.razorpay_signature,
            }
        )

        conn = get_db_connection()
        cursor = conn.cursor()

        # Check Invoice Exists
        cursor.execute(
            """
            SELECT id
            FROM school_management.invoices
            WHERE id=?
            """,
            (data.invoice_id,),
        )

        row = cursor.fetchone()

        if not row:
            return JSONResponse(
                status_code=404,
                content={
                    "success": False,
                    "message": "Invoice not found",
                },
            )

        # Update Invoice
        cursor.execute(
    """
    UPDATE school_management.invoices
    SET status = 'paid'
    WHERE id = ?
    """,
    (data.invoice_id,),
)

        conn.commit()

        return {
            "success": True,
            "message": "Payment Verified Successfully"
        }

    except Exception as e:
        traceback.print_exc()

        return JSONResponse(
            status_code=500,
            content={
                "success": False,
                "error": str(e),
            },
        )

    finally:
        if cursor:
            cursor.close()

        if conn:
            conn.close()