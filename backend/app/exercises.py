from flask import request, Blueprint, jsonify
from auth import token_required
from config import users, problems

exercises = Blueprint("exercises", __name__, template_folder="templates")


# Returns a random exercise based on the prompt phrase
@exercises.route("/generate", methods=["GET"])
@token_required
def get_exercise(user):
    problem = problems.find_one()
    topic = request.args.get("topic")
    # TODO: apply spacy to find relevant exercises to the phrase
    return jsonify(
        {
            "status": "ok",
            "question": problem["question"],
            "answer": problem["answer"],
            "reference": problem["reference"],
            "problemId": problem["problem_id"]
        }
    )


# Returns the corresponding question, answer, and reference for a problem ID
@exercises.route("/info", methods=["GET"])
@token_required
def get_info(user):
    id = request.args.get("problemId")
    if not id:
        return jsonify({"status": "error", "message": "Please provide a problem ID."})

    problem = problems.find_one({"problem_id": id})
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

    problem = problems.find_one({"problem_id": id})
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
            "status":"ok",
            "solved": user["solved"],
        }
    )
