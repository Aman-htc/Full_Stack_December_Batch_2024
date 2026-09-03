
from sqlalchemy import text
from app.logger import write_error
# from passlib.hash import bcrypt
from fastapi import  HTTPException
from app.routes.verify import verify_token


from app.database.call_procedure import call_procedure



# def get_user(db, page):
#     return call_procedure(
#         db,
#         "TRAINING_TEAM3.GetUsersByPage",
#         {"page": page},
#         fetchall=True
#     )



def get_user(db, page, search=""):
    return call_procedure(
        db,
        "TRAINING_TEAM3.GetUsersByPage",
        {
            "page": page,
            "search": search
        },
        fetchall=True
    )
    
    
    
def delete_users(db, user_id):
    return call_procedure(
        db,
        "TRAINING_TEAM3.DeleteUser",
        {"user_id": user_id},
        commit=True
    )
    
    
def update_users(db, user_id, user):
    return call_procedure(
        db,
        "TRAINING_TEAM3.update_user",
        {
        "user_id": user_id,
        "name": user.name,
        "email": user.email,
        "contact": user.contact,
        "state": user.state,
        "city": user.city
    
            
        },
        commit=True
    )
    
    

# def get_user( db, page: int):

#     try:
#         result = db.execute(
#             text("EXEC TRAINING_TEAM3.GetUsersByPage :page"),
#             {"page": page}
#         ).fetchall()

#         return [dict(row._mapping) for row in result]

#     except Exception as e:
#         write_error(str(e))
#         raise HTTPException(status_code=500, detail=str(e))


  
# def delete_users(db, user_id: str):

#     try:
#         db.execute(
#             text("EXEC TRAINING_TEAM3.DeleteUser :user_id"),
#             {"user_id": user_id}
#         )
#         db.commit()

#         return {"message": "User deleted successfully"}

#     except Exception as e:
#         db.rollback()
#         write_error(str(e))
#         raise HTTPException(status_code=500, detail=str(e))



# def update_users( db, user_id: str, user):

#     try:
#         hashed_password = bcrypt.hash(user.password)

#         db.execute(
#             text("""
#                 EXEC TRAINING_TEAM3.UpdateUser
#                 :user_id, :name, :email, :password
#             """),
#             {
#                 "user_id": user_id,
#                 "name": user.name,
#                 "email": user.email,
#                 "password": hashed_password
#             }
#         )
#         db.commit()

#         return {"message": "User updated successfully"}

#     except Exception as e:
#         db.rollback()
#         write_error(str(e))
#         raise HTTPException(status_code=500, detail=str(e))



def mes(db, authorization: str, idtoken: str):
    try:
        
        if not authorization:
            raise HTTPException(status_code=401, detail="Access token missing")

        if not idtoken:
            raise HTTPException(status_code=401, detail="ID token missing")

        
        access_token = authorization.replace("Bearer ", "").strip()
        verify_token(access_token)

        payload = verify_token(idtoken)

        email = payload.get("email")
        print("Token Email:", email)
        name = payload.get("name")

        if not email:
            raise HTTPException(status_code=401, detail="Email not found in token")

        email = email.strip().lower()

       
        result = db.execute(
            text("""
                SELECT ID, NAME, EMAIL
                FROM TRAINING_TEAM3.MAIN_USER_REGISTRATION
                WHERE LOWER(LTRIM(RTRIM(EMAIL))) = :email
            """),
            {"email": email}
        ).fetchone()

        if not result:
            raise HTTPException(status_code=404, detail="User not found")

        return {
            "db_data": dict(result._mapping),
            "token_name": name,
            "token_email": email
        }

    except HTTPException:
        raise

    except Exception as e:
        write_error(str(e))
        raise HTTPException(status_code=500, detail="Internal Server Error")
