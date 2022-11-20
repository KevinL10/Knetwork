import { Link, useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";
import { useEffect, useState, MouseEvent } from "react";
import "./login.css";

const Signup = () => {
  const [isSupervisor, setIsSupervisor] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (ReactSession.get("authentication_token")) {
      navigate("/dashboard");
    }
  }, []);

  const authenticate = (e: MouseEvent) => {
    if (!username || !name || !password) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
      return;
    }
    try {
      fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username,
          name,
          password,
          userType: isSupervisor ? "supervisor" : "student",
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
          console.log(data);
          if (data.status === "success") {
            ReactSession.set("authentication_token", data.message);
            ReactSession.set("name", name);
            ReactSession.set("username", username);
            ReactSession.set(
              "userType",
              isSupervisor ? "supervisor" : "student"
            );
            navigate("/dashboard");
          } else {
            setError("Couldn't create account.");
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

            <div
              className={
                "card-body needs-validation" +
                (validated ? " was-validated" : "")
              }
              /*
      // @ts-ignore */
              noValidate
            >
              <h2 className="display">Sign up</h2>
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <p>as... &nbsp;</p>
                <label
                  className={
                    "btn btn-primary" + (isSupervisor ? " active" : "")
                  }
                  style={{ borderRadius: "50rem 0 0 50rem" }}
                >
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                    autoComplete="off"
                    checked={isSupervisor}
                    onChange={() => setIsSupervisor(true)}
                  />{" "}
                  Ksupervisor
                </label>
                <label
                  className={
                    "btn btn-primary" + (!isSupervisor ? " active" : "")
                  }
                  style={{ borderRadius: "0 50rem 50rem 0" }}
                >
                  <input
                    type="radio"
                    name="options"
                    id="option2"
                    autoComplete="off"
                    checked={!isSupervisor}
                    onChange={() => setIsSupervisor(false)}
                  />{" "}
                  Kstudent
                </label>
              </div>
              <div className="input-group has-validation mb-3 mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  aria-label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  aria-describedby="validationServerNameFeedback"
                />
                <div
                  id="validationServerNameFeedback"
                  className="invalid-feedback"
                >
                  Please enter your name.
                </div>
              </div>
              <div className="input-group has-validation mb-3 mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  aria-describedby="validationServerNameFeedback"
                  required
                />
                <div
                  id="validationServerNameFeedback"
                  className="invalid-feedback"
                >
                  Please enter a username.
                </div>
              </div>
              <div className="input-group has-validation mb-3">
                <input
                  type="password"
                  className={"form-control" + (error ? " is-invalid" : "")}
                  placeholder="Password"
                  aria-label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-describedby="validationServerPwdFeedback"
                  required
                />
                <div
                  id="validationServerPwdFeedback"
                  className="invalid-feedback"
                >
                  Please enter a password.
                </div>
              </div>
              <button
                className="btn btn-primary rounded-pill mx-auto"
                type="submit"
                onClick={(e) => authenticate(e)}
              >
                Sign up
              </button>
              <Link to="/" className="link-dark text-decoration-none">
                <p className="mt-2" style={{ color: "grey" }}>
                  or login.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
