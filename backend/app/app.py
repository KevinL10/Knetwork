from flask import Flask
from pymongo import MongoClient
from flask_cors import CORS

from auth import auth
from exercises import exercises
from settings import settings


def create_app():
    app = Flask(__name__)
    app.register_blueprint(auth, url_prefix="/api/auth")
    app.register_blueprint(exercises, url_prefix="/api/exercises")
    app.register_blueprint(settings, url_prefix="/api/settings/")
    return app


app = create_app()
CORS(app)


@app.route("/")
def index():
    return {"status": "ok"}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
