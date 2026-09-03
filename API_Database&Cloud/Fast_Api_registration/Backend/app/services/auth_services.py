from sqlalchemy import text
from app.logger import write_error
from app.database.call_procedure import call_procedure

# from passlib.hash import bcrypt
# from fastapi import  HTTPException

def create_user(user, db):
    
    try:
        db.execute(
        text("""
        EXEC TRAINING_TEAM3.RegisterUser
        :name, :email, :contact, :state, :city
    """),
    {
        "name": user.name,
        "email": user.email,
        "contact": user.contact,
        "state": user.state,
        "city": user.city
    }
)
        db.commit()
        return {"message": "User created successfully"}

    except Exception as e:
        write_error(str(e))
        db.rollback()
        raise e
   




  
    
    
# def login_user( db, user):

#     try:
          
#         result = db.execute(
#             text("EXEC TRAINING_TEAM3.login_user :email"),
#             {"email": user.email}
#         ).fetchone()

#             # user not found
#         if not result:
#             raise HTTPException(status_code=404, detail="User not found")

#         row = result._mapping

#             # password verify
#         # if not bcrypt.verify(user.password, row["password"]):
#         #     raise HTTPException(status_code=401, detail="Wrong password")

#         return {
#             "message": "Login Success",
#             "user": {
#                 "id": row["id"],
#                 "name": row["name"],
#                 "email": row["email"]
#             }
#         }

#     except HTTPException:
#         raise

#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))