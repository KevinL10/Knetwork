from flask import request, Blueprint, jsonify
from pymongo import MongoClient
from hashlib import sha256

import jwt
from .settings import JWT_SECRET

auth = Blueprint("auth", __name__, template_folder="templates")
client = MongoClient('localhost', 27017, username="root", password="rootpassword")
users = client.testDB.users

@auth.route("/login", methods=["POST"])
def login():
    username = request.form.get("username")
    password = request.form.get("password")
    user_type = request.form.get("userType")

    if not username or not password:
        return jsonify({"status": "error", "message": "Missing username or password"})
    if user_type not in ("Supervisor, Student"):
        return jsonify({"status": "error", "message": "Invalid user type"})

    hashed_pw = sha256(password).hexdigest()
    if not users.find_one({"username":username, "password":hashed_pw}):
        return jsonify({"status": "error", "message": "Invalid username or password"})
    
    token = jwt.encode({"user": username}, JWT_SECRET, algorithm="HS256").decode()
    return jsonify({"status":"success", "message":token})


@auth.route("/signup")
def signup():
    username = request.form.get("username")
    password = request.form.get("password")
    user_type = request.form.get("userType")

    if not username or not password:
        return jsonify({"status": "error", "message": "Missing username or password"})
    if user_type not in ("Supervisor, Student"):
        return jsonify({"status": "error", "message": "Invalid user type"})

    if users.count_documents({"username": username}):
        return jsonify({"status":"error", "message":"User already exists"})

    hashed_pw = sha256(password).hexdigest()
    users.insert_one({"username":username, "password":hashed_pw, "type": user_type, "solved": []})

    token = jwt.encode({"user": username}, JWT_SECRET, algorithm="HS256").decode()
    return jsonify({"status":"success", "message":token})
