from pymongo import MongoClient
import os


def load_secret():
    if "JWT_SECRET" not in os.environ:
        raise Exception("JWT_SECRET does not exist")
    return os.eviron.get("JWT_SECRET")


MONGO_HOST = "localhost"  # if running with docker-compose, should be mongodb

client = MongoClient(MONGO_HOST, 27017, username="root", password="rootpassword")
db = client.testDB
users = db.users
problems = db.problems
problems.create_index("problem_id")

print(list(problems.find()))

# JWT_SECRET = load_secret()
JWT_SECRET = "LOCAL_TEST_SECRET"
DATA_PATH = "data"
