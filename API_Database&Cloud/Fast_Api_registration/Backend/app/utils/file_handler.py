import json
import os

path = "app/data/user_details.json"


def read_users():
    if not os.path.exists(path):
        with open(path, "w") as f:
            json.dump([], f)

    with open(path, "r") as f:
        return json.load(f)


def write_users(data):
    with open(path, "w") as f:
        json.dump(data, f, indent=4)
        
        
        
  