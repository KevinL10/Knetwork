import { Link, useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";
import { useEffect, useState } from "react";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (ReactSession.get("authentication_token")) {
      navigate("/dashboard");
    }
  }, []);

  const authenticate = () => {
    try {
      fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          userType: "",
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error();
          } else {
            return res.json();
          }
        })
        .then((data) => {
          if (data.status === "success") {
            ReactSession.set("authentication_token", data.message);
            ReactSession.set("name", data.name);
            ReactSession.set("userType", data.userType);
            ReactSession.set("username", username);
            navigate("/dashboard");
          } else {
            setError("Couldn't authenticate, please try another password.");
          }
        })
        .catch(() => {
          setError("Couldn't connect, please try again.");
        });
    } catch {
      setError("Couldn't connect, please try again.");
    }
  };

  return (
    <>
      <div className="d-flex h-100 justify-content-center align-items-center">
        <div
          className="container d-flex flex-column align-items-center"
          style={{ transform: "translateY(-20%)" }}
        >
          <h1 className="display text-center">Welcome to your Knetwork.</h1>
          <div className="card login-card" style={{ marginTop: 40 }}>
            <div className="login-card-badge d-flex justify-content-center align-items-center">
              <i className="bi bi-person-badge text-center d-block mx-auto"></i>
            </div>

            <div className="card-body">
              <h2 className="display">Log in</h2>
              <div className="input-group mb-3 mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className={
                    "form-control has-validation" + (error ? " is-invalid" : "")
                  }
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="invalidPasswordFeedback"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error ? (
                  <div
                    className="invalid-feedback"
                    id="invalidPasswordFeedback"
                  >
                    {error}
                  </div>
                ) : null}
              </div>
              <button
                className="btn btn-primary rounded-pill mx-auto"
                type="submit"
                onClick={authenticate}
              >
                Sign in
              </button>
              <Link to="/signup" className="link-dark text-decoration-none">
                <p className="mt-2" style={{ color: "grey" }}>
                  or create account.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
