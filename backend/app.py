from flask import Flask
from .auth import auth
from pymongo import MongoClient

def create_app():
    app = Flask(__name__)
    app.register_blueprint(auth, url_prefix="/api/auth")
    return app


app = create_app()

@app.route("/")
def index():
    return {"status": "ok"}

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
