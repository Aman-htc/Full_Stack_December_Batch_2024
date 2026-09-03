from sqlalchemy import text
from fastapi import HTTPException
from app.logger import write_error

def call_procedure(db, procedure_name, params=None, fetchone=False, fetchall=False, commit=False):
    try:
        query = f"EXEC {procedure_name}"

        if params:
            placeholders = ", ".join([f":{key}" for key in params.keys()])
            query += f" {placeholders}"

        result = db.execute(text(query), params or {})

        if commit:
            db.commit()

        if fetchone:
            row = result.fetchone()
            return dict(row._mapping) if row else None

        if fetchall:
            return [dict(row._mapping) for row in result.fetchall()]

        return {"message": "Success"}

    except Exception as e:
        db.rollback()
        write_error(str(e))
        raise HTTPException(status_code=500, detail=str(e))