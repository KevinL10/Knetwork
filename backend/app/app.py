from flask import Flask
from flask_cors import CORS
from config import problems, DATA_PATH
from auth import auth
from exercises import exercises
from settings import settings
from json import loads, dumps
import os
import logging


def add_problems():
    with open(os.path.join(DATA_PATH, "problems.json"), "r") as f:
        content = f.read()

    print("[x] Saving problems to database")
    problems.insert_many(loads(content))


def create_app():
    print("[x] Creating Flask App")
    app = Flask(__name__)
    app.register_blueprint(auth, url_prefix="/api/auth")
    app.register_blueprint(exercises, url_prefix="/api/exercises")
    app.register_blueprint(settings, url_prefix="/api/settings/")
    CORS(app)

    try:
        add_problems()
    except Exception as e:
        print("Couldn't add problems", e)
        pass
    return app


app = create_app()


@app.route("/")
def index():
    return {"status": "ok"}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
