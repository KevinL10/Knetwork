from pymongo import MongoClient
import os


def load_secret():
    if "JWT_SECRET" not in os.environ:
        raise Exception("JWT_SECRET does not exist")
    return os.eviron.get("JWT_SECRET")


client = MongoClient("localhost", 27017, username="root", password="rootpassword")
db = client.testDB
users = db.users
problems = db.problems


# JWT_SECRET = load_secret()
JWT_SECRET = "LOCAL_TEST_SECRET"
