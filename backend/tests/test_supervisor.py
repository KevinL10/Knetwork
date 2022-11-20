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


# init()
st_token, sv_token = get_token()
print(st_token)
print(sv_token)


def test_invalid_sv():
    r = post(
        "http://localhost:5000/api/settings/set-supervisor",
        headers={"x-auth-token": st_token},
        json={"supervisor": "invalid1"},
    )

    assert "Invalid supervisor username" in loads(r.text)["message"]


def test_valid_sv():
    r = post(
        "http://localhost:5000/api/settings/set-supervisor",
        headers={"x-auth-token": st_token},
        json={"supervisor": "sv1"},
    )

    r = get(
        "http://localhost:5000/api/settings/students",
        headers={"x-auth-token": sv_token},
    )

    assert "st1" in loads(r.text)


test_invalid_sv()
test_valid_sv()
