import { ReactSession } from "react-client-session";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./account.css";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const name = ReactSession.get("name");
  const username = ReactSession.get("username");
  const isSupervisor = ReactSession.get("userType") === "supervisor";
  const [students, setStudents] = useState<string[]>([]);
  const [supervisor, setSupervisor] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [perror, setPerror] = useState("");
  const token = ReactSession.get("authentication_token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    // make API call
  }, []);

  const addSupervisor = () => {
    if (!supervisor) {
      setError("Please enter a supervisor username.");
      return;
    }
    try {
      fetch("http://localhost:5000/api/settings/set-supervisor", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({
          username,
          supervisor,
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
            ReactSession.set("supervisor", supervisor);
            setError("");
          } else {
            setError("Couldn't authenticate, please try again.");
          }
        });
    } catch {
      setError("Couldn't connect, please try again.");
    }
  };

  const changePassword = () => {
    if (!password || !confirmPassword) {
      setPerror("Please enter a password.");
      return;
    } else if (password !== confirmPassword) {
      setPerror("Passwords do not match.");
      return;
    }
    try {
      fetch("http://localhost:5000/api/settings/set-supervisor", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({
          username,
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
            ReactSession.set("supervisor", supervisor);
            setError("");
          } else {
            setError("Couldn't authenticate, please try again.");
          }
        });
    } catch {
      setError("Couldn't connect, please try again.");
    }
  };

  return (
    <>
      <div className="d-flex h-100">
        <Sidebar selected={3} />
        <div className="container py-5">
          <div className="card shadow mt-5">
            <div className="card-body">
              <h1 className="display">{name}'s Knetwork</h1>
              <div className="row">
                <div className="form-group text-left">
                  <label htmlFor="exampleInputEmail1">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="... loading username"
                    value={username}
                    readOnly
                  />
                </div>
                {/**<div className="text-left">
                  <p className="display">Change password</p>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">New password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter a new password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword2">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword2"
                      placeholder="Enter a new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <button className="btn btn-primary rounded-pill">
                    Change password
                  </button>
                </div>**/}
                {isSupervisor ? (
                  <div className="text-left mt-3">
                    <p className="display">Students</p>
                    <div className="d-flex">
                      {students?.length ? (
                        students.map((student: string, i: number) => (
                          <span
                            className={
                              "badge badge-pill mr-2 " +
                              (i % 2 === 0
                                ? " badge-primary"
                                : " badge-secondary")
                            }
                            style={{ fontSize: "80%" }}
                            key={i}
                          >
                            {student} (@{student})
                          </span>
                        ))
                      ) : (
                        <p className="text-muted">No students.</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="text-left mt-3">
                      <p className="display">Set supervisor</p>
                      <div className="form-group">
                        <label htmlFor="supervisor">Supervisor username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="supervisor"
                          placeholder="Supervisor username"
                          value={supervisor}
                          onChange={(e) => setSupervisor(e.target.value)}
                        />
                      </div>

                      <button
                        className="btn btn-primary rounded-pill mr-2"
                        onClick={addSupervisor}
                      >
                        Set supervisor
                      </button>
                      {error ? (
                        <div className="invalid-feedback">{error}</div>
                      ) : null}
                      {/**<button className="btn btn-secondary rounded-pill">
                        Remove supervisor
                      </button>**/}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
