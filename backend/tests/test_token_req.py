from requests import post, get
import jwt

JWT_SECRET = "LOCAL_TEST_SECRET"
token = jwt.encode({"username": "ab"}, JWT_SECRET, algorithm="HS256")
r = get("http://localhost:5000/api/auth/test", headers={"x-auth-token": token})
print(r.text)
