from requests import get, post
from json import loads


def init():
    post(
        "http://localhost:5000/api/auth/signup",
        json={
            "username": "st1",
            "password": "st1",
            "name": "st1",
            "userType": "student",
        },
    )

    post(
        "http://localhost:5000/api/auth/signup",
        json={
            "username": "sv1",
            "password": "sv1",
            "name": "sv1",
            "userType": "supervisor",
        },
    )


def get_token():
    r = post(
        "http://localhost:5000/api/auth/login",
        json={"username": "st1", "password": "st1"},
    )
    r2 = post(
        "http://localhost:5000/api/auth/login",
        json={"username": "sv1", "password": "sv1"},
    )

    return loads(r.text)["message"], loads(r2.text)["message"]


st_token, sv_token = get_token()


def get_exercises(token):
    r = get(
        "http://localhost:5000/api/exercises/generate",
        headers={"x-auth-token": token},
        json={"topic": "world war i"},
    )

    print(r.text)


get_exercises(st_token)
