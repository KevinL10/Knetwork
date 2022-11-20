from requests import get, post


r = post(
    "http://localhost:5000/api/auth/login",
    data={"username": "Jane", "password": "Doe", "userType": "Student"},
)

print(r.text)
