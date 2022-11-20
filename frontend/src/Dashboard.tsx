import { ReactSession } from "react-client-session";
import Sidebar from "./Sidebar";
import "./dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const name = ReactSession.get("name");

  const topics = [
    { name: "Math" },
    { name: "Math" },
    { name: "Math" },
    { name: "Math" },
    { name: "Math" },
  ];

  const recent = [{ name: "Math" }, { name: "English" }];

  const ICON_MAP: { [key: string]: string } = {
    math: "bi bi-calculator",
    english: "bi bi-pencil",
    history: "bi bi-hourglass-bottom",
    chemistry: "fa fa-light fa-flask",
    physics: "fa fa-light fa-atom",
    socialstudies: "fa fa-light fa-scroll",
    religion: "fa fa-light fa-cross",
  };

  return (
    <>
      <div className="d-flex h-100">
        <Sidebar selected={0} />
        <div className="container py-5">
          <h1 className="display mt-5">Welcome, {name}!</h1>
          <div className="row">
            <div className="col-4">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h3 className="display">x problems solved</h3>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h3 className="display">Recently, you've worked on:</h3>
                  {recent.map((topic, i) => (
                    <button
                      type="button"
                      className={
                        "btn mx-1 rounded-pill" +
                        (i % 2 === 0 ? " btn-primary" : " btn-secondary")
                      }
                    >
                      {topic.name}&nbsp;
                      <i className={ICON_MAP[topic.name.toLowerCase()]}></i>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <>
            <h2 className="display  mt-5">Explore other topics</h2>
            <div className="grid topics-grid">
              {topics.map((topic) => (
                <div className="topic-card-wrapper g-col-12 g-col-md-6 g-col-lg-4">
                  <Link to="/study" state={{ topic: topic.name.toLowerCase() }}>
                    <div className="card topic-card" id="math-card">
                      <h3 className="display">{topic.name}</h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
