from pydantic import BaseModel

class PaymentRequest(BaseModel):
    name: str
    email: str
    address: str
    amount: float
    
    
    
# -----------------------------
# Payment Verification Model
# -----------------------------
class VerifyPayment(BaseModel):
    invoice_id: int
    razorpay_payment_id: str
    razorpay_order_id: str
    razorpay_signature: str    