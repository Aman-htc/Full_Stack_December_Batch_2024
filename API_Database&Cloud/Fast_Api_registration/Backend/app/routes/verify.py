import jwt

from fastapi import HTTPException

def verify_token(token: str):
    try:
        payload = jwt.decode(
            token,
            options={"verify_signature": False}   
        )

        return payload

    except Exception:
        raise HTTPException(status_code=401, detail="Invalid token")