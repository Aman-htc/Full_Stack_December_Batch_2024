from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import urllib

# import os
# from dotenv import load_dotenv
# load_dotenv()

# DB_DRIVER=os.getenv("DB_DRIVER")
# DB_SERVER=os.getenv("DB_SERVER")
# DB_NAME = os.getenv("DB_NAME")
# DB_USER =os.getenv("DB_USER")
# DB_PASSWORD=os.getenv("")





params = urllib.parse.quote_plus(
    "DRIVER={ODBC Driver 17 for SQL Server};"
    "SERVER=db-instance-opentalent.ccdr4urnwhez.ap-south-1.rds.amazonaws.com;"
    "DATABASE=Indixpert_Api_Training_NonProd;"
    "UID=training;"
    "PWD=Indixpert@12345;"
)

# params = urllib.parse.quote_plus(
#     f"DRIVER={DB_DRIVER};"
#     f"SERVER={DB_SERVER};"
#     f"DATABASE={DB_NAME};"
#     f"UID={DB_USER};"
#     f"PWD={DB_PASSWORD};"
# )



DATABASE_URL = f"mssql+pyodbc:///?odbc_connect={params}"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)

Base = declarative_base()
