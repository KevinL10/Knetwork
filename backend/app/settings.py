from flask import request, Blueprint, jsonify
from hashlib import sha256
from config import users, JWT_SECRET
from auth import token_required

import jwt

settings = Blueprint("settings", __name__, template_folder="templates")


@settings.route("/set-supervisor", methods=["POST"])
@token_required
def set_supervisor(user):
    if user["type"] != "student":
        return (
            jsonify(
                {
                    "status": "error",
                    "message": "You must be a student to set a supervisor!",
                }
            ),
            401,
        )

    sv_name = request.json.get("supervisor")
    if not sv_name:
        return (
            jsonify(
                {"status": "error", "message": "Please provide a supervisor username"}
            ),
            400,
        )

    sv = users.find_one({"username": sv_name})
    if (not sv) or (sv["type"] != "supervisor"):
        return (
            jsonify({"status": "error", "message": "Invalid supervisor username"}),
            400,
        )

    # TODO: unset the student's previous supervisor, and vice versa

    # Set student's supervisor
    users.update_one({"username": user["username"]}, {"$set": {"supervisor": sv_name}})

    # TODO check that student doesn't already exist
    # Add student to supervisor's student list
    users.update_one({"username": sv_name}, {"$push": {"students": user["username"]}})

    return jsonify({"status": "ok", "message": f"Changed supervisor to {sv_name}"})


@settings.route("/students", methods=["GET"])
@token_required
def get_students(user):
    if user["type"] != "supervisor":
        return (
            jsonify(
                {
                    "status": "error",
                    "message": "You must be a supervisor to view your students.",
                }
            ),
            401,
        )

    return user["students"]
