import { ReactSession } from "react-client-session";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./account.css";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [isSupervisor, setIsSupervisor] = useState(false);
  const [students, setStudents] = useState<string[]>([
    "kewbish",
    "kevergarden",
  ]);
  const [username, setUsername] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = ReactSession.get("authentication_token");

    if (!token) {
      navigate("/");
    }

    // make API call
  }, []);

  const name = ReactSession.get("name");

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
                    readOnly
                  />
                </div>
                <div className="text-left">
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
                </div>
                {isSupervisor ? (
                  <div className="text-left mt-3">
                    <p className="display">Students</p>
                    <div className="d-flex">
                      {students ? (
                        students.map((student: string, i: number) => (
                          <span
                            className={
                              "badge badge-pill mr-2 " +
                              (i % 2 === 0
                                ? " badge-primary"
                                : " badge-secondary")
                            }
                            style={{ fontSize: "80%" }}
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

                      <button className="btn btn-primary rounded-pill mr-2">
                        Set supervisor
                      </button>
                      <button className="btn btn-secondary rounded-pill">
                        Remove supervisor
                      </button>
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
