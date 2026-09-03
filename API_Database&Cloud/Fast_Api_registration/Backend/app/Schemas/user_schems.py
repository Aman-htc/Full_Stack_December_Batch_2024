# from pydantic import BaseModel, EmailStr ,field_validator


# class User(BaseModel):
#     name: str
#     email: EmailStr
    
#     contact: str
#     state: str
#     city: str



from pydantic import BaseModel, EmailStr, Field



from app.utils.validator.common import validate_name,validate_mobile,validate_state,validate_city

class User(BaseModel):
    name: str
    email: EmailStr
    contact: str
    state: str
    city: str
    

    

    

