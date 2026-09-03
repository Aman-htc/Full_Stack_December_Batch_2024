from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text
# from passlib.hash import bcrypt
from app.logger import write_error
from app.Schemas.user_schems import User
from app.database.session import get_db
from app.services.auth_services import create_user

auth_router = APIRouter()

@auth_router.post("/signup")
def signup(user: User, db: Session = Depends(get_db)):
    return create_user(user,db)
   