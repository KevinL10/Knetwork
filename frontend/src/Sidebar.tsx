import { ReactSession } from "react-client-session";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ selected }: { selected: number }) => {
  const navigate = useNavigate();

  const logout = () => {
    ReactSession.set("name", "");
    ReactSession.set("authentication_token", "");
    navigate("/");
  };

  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "15%", minWidth: "max-content" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-0 me-md-auto link-dark text-decoration-none"
        >
          <h1 className="display mb-0">Knetwork</h1>
        </a>
        <hr style={{ borderColor: "rgba(0, 0, 0, 0.3)" }} />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <p
              role="button"
              className={
                "nav-link link-dark" + (selected === 0 ? " active" : "")
              }
              aria-current="page"
              onClick={() => navigate("/dashboard", { replace: true })}
            >
              <i className="bi bi-house"></i>
              &nbsp;Home
            </p>
          </li>
          <li>
            <p
              className={
                "nav-link link-dark" + (selected === 1 ? " active" : "")
              }
              onClick={() => navigate("/studySplash", { replace: true })}
              role="button"
            >
              <i className="bi bi-file-earmark-plus"></i>
              &nbsp;Start studying
            </p>
          </li>
          <li>
            <p
              className={
                "nav-link link-dark" + (selected === 2 ? " active" : "")
              }
              role="button"
              onClick={() => navigate("/progress", { replace: true })}
            >
              <i className="bi bi-speedometer2"></i>
              &nbsp;Progress
            </p>
          </li>

          <li>
            <a
              href="/account"
              className={
                "nav-link link-dark" + (selected == 3 ? " active" : "")
              }
              onClick={() => navigate("/account", { replace: true })}
            >
              {" "}
              <i className="bi bi-person-badge"></i>
              &nbsp;Account
            </a>
          </li>
        </ul>
        <p className={"nav-link link-dark"} onClick={logout} role="button">
          {" "}
          <i className="bi bi-box-arrow-left"></i>
          &nbsp;Log out
        </p>
      </div>
    </>
  );
};

export default Sidebar;
