from flask import request, Blueprint, jsonify


exercises = Blueprint("exercises", __name__, template_folder="templates")


@exercises.route("/random", methods=["GET"])
def get_exercise():
    return "random exercise"