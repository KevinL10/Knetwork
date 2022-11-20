from flask import request, Blueprint, jsonify
from hashlib import sha256
from config import users, JWT_SECRET
from functools import wraps
import jwt

auth = Blueprint("auth", __name__, template_folder="templates")

# Authentication decorator
def token_required(f):
    @wraps(f)
    def decorator(*args, **kwargs):
        token = request.headers.get("x-auth-token")

        if not token:
            return (
                jsonify({"status": "error", "message": "Missing authentication token"}),
                401,
            )

        try:
            user = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
            user = users.find_one({"username": user["username"]})

            if not user:
                return (
                    jsonify({"status": "error", "message": "User does not exist"}),
                    401,
                )
        except:
            return jsonify({"status": "error", "message": "Invalid token"}), 401

        return f(user, *args, **kwargs)

    return decorator


@auth.route("/test")
@token_required
def test(user):
    return "hello" + str(user)


@auth.route("/login", methods=["POST"])
def login():
    username = request.json.get("username")
    password = request.json.get("password")

    if (not username) or (not password):
        return (
            jsonify({"status": "error", "message": "Missing username or password"}),
            401,
        )

    hashed_pw = sha256(password.encode()).hexdigest()
    user = users.find_one({"username": username, "password": hashed_pw})
    if not user:
        return (
            jsonify({"status": "error", "message": "Invalid username or password"}),
            401,
        )

    token = jwt.encode({"username": username}, JWT_SECRET, algorithm="HS256")
    return jsonify(
        {
            "status": "success",
            "message": token,
            "name": user["name"],
            "userType": user["type"],
        }
    )


@auth.route("/signup", methods=["POST"])
def signup():
    username = request.json.get("username")
    name = request.json.get("name")
    password = request.json.get("password")
    user_type = request.json.get("userType")

    if not username or not password or not name:
        return (
            jsonify({"status": "error", "message": "Missing username or password"}),
            401,
        )
    if user_type not in ("supervisor, student"):
        return jsonify({"status": "error", "message": "Invalid user type"}), 401

    if users.count_documents({"username": username}):
        return jsonify({"status": "error", "message": "User already exists"}), 401

    hashed_pw = sha256(password.encode()).hexdigest()
    users.insert_one(
        {
            "username": username,
            "password": hashed_pw,
            "name": name,
            "type": user_type,
            "supervisor": "",
            "solved": [],
            "students": [],
        }
    )

    token = jwt.encode({"username": username}, JWT_SECRET, algorithm="HS256")
    return jsonify({"status": "success", "message": token})
