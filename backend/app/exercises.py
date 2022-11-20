from flask import request, Blueprint, jsonify
from auth import token_required
from config import users, problems, DATA_PATH
from utils import find_topic_articles
from bson.objectid import ObjectId
import os


exercises = Blueprint("exercises", __name__, template_folder="templates")


# Returns a random exercise based on the prompt phrase
@exercises.route("/generate", methods=["GET"])
@token_required
def get_exercise(user):
    topic = request.args.get("topic")
    count = int(request.args.get("count"))

    if not topic:
        p = problems.find().limit(count)
    else:
        articles = find_topic_articles(topic)
        articles = ["wiki_100/" + a for a in articles]
        p = problems.find({"reference": {"$in": articles}}).limit(count)

    lst = [
        {
            "question": problem["question"],
            "answer": problem["answer"],
            "reference": problem["reference"],
            "problemId": str(problem["_id"]),
        }
        for problem in p
    ]

    return jsonify(lst)


# Returns the corresponding question, answer, and reference for a problem ID
@exercises.route("/info", methods=["GET"])
@token_required
def get_info(user):
    id = request.args.get("problemId")
    if not id:
        return jsonify({"status": "error", "message": "Please provide a problem ID."})

    problem = problems.find_one({"_id": ObjectId(id)})
    if not problem:
        return jsonify({"status": "error", "message": "Invalid problem ID."})

    return jsonify(
        {
            "status": "ok",
            "question": problem["question"],
            "answer": problem["answer"],
            "reference": problem["reference"],
        }
    )


# Mark a question as solved by a student
@exercises.route("/mark", methods=["POST"])
@token_required
def mark_solved(user):
    id = request.json.get("problemId")
    if not id:
        return jsonify({"status": "error", "message": "Please provide a problem ID."})

    problem = problems.find_one({"_id": id})
    if not problem:
        return jsonify({"status": "error", "message": "Invalid problem ID."})

    # add problem to user's solved list
    # TODO: check if problem doesn't already exist
    users.update_one(
        {"username": user["username"]}, {"$push": {"solved": user["username"]}}
    )

    return jsonify(
        {"status": "ok", "message": f"Added problem {id} to {user['username']}"}
    )


# Returns the solved problem IDs for a specific user
@exercises.route("/solved", methods=["GET"])
@token_required
def get_solved(user):

    return jsonify(
        {
            "status": "ok",
            "solved": user["solved"],
        }
    )
