import os


def load_secret():
    if "JWT_SECRET" not in os.environ:
        raise Exception("JWT_SECRET does not exist")
    return os.eviron.get("JWT_SECRET")


# JWT_SECRET = load_secret()
JWT_SECRET = "LOCAL_TEST_SECRET"
