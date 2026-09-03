import re

# Name Validation
def validate_name(value: str):
    if len(value.strip()) < 3:
        raise ValueError("Name must be at least 3 characters")
    return value


# Mobile Validation
def validate_mobile(value: str):
    pattern = r"^[6-9]\d{9}$"

    if not re.match(pattern, value):
        raise ValueError("Invalid Mobile Number")

    return value


# State Validation
def validate_state(value: str):
    if len(value.strip()) < 2:
        raise ValueError("State is required")
    return value


# City Validation
def validate_city(value: str):
    if len(value.strip()) < 2:
        raise ValueError("City is required")
    return value