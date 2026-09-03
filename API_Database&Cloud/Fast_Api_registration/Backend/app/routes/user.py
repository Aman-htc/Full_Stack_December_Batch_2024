from fastapi import APIRouter, HTTPException, Depends, Header
from sqlalchemy.orm import Session
# from sqlalchemy import text
# from passlib.hash import bcrypt
# from app.routes.verify import verify_token


from app.database.session import get_db
from app.logger import write_error
from app.Schemas.user_schems import User
from app.services.user_servies import get_user,delete_users,update_users,mes

user_router = APIRouter()



# @user_router.get("/users")
# def get_users(page: int = 1, db: Session = Depends(get_db)):
#     return get_user(db, page)


@user_router.get("/users")
def get_users(
    page: int = 1,
    search: str = "",
    db: Session = Depends(get_db)
):
    return get_user(db, page, search)





@user_router.delete("/users/{user_id}")
def delete_user(user_id: str, db: Session = Depends(get_db)):
    return delete_users(db, user_id)
   




@user_router.put("/users/{user_id}")
def update_user(user_id: str, user: User, db: Session = Depends(get_db)):
     return update_users(db, user_id, user)
    
@user_router.get("/me")
def me(authorization: str = Header(None), idtoken: str = Header(None), db: Session = Depends(get_db)):
    return mes(db, authorization, idtoken)