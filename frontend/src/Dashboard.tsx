import { ReactSession } from "react-client-session";
import Sidebar from "./Sidebar";
import "./dashboard.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const name = ReactSession.get("name");
  const token = ReactSession.get("authentication_token");

  // from GPT3
  const topics = [
    { name: "Geography" },
    { name: "Species" },
    { name: "Geometry" },
    { name: "Canada" },
    { name: "Calculus" },
    { name: "Games" },
    { name: "Germany" },
    { name: "United States" },
    { name: "Holocaust" },
    { name: "Electrostatics" },
    { name: "Mantis" },
    { name: "Catholicism" },
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

  const [problemsSolved, setProblemsSolved] = useState(-1);
  useEffect(() => {
    try {
      fetch("http://localhost:5000/api/exercises/solved", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "x-auth-token": token,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error();
          } else {
            return res.json();
          }
        })
        .then((data) => {
          if (data.status === "ok") {
            const solved = Array.from(new Set(data.solved));
            setProblemsSolved(solved.length);
          }
        });
    } catch {}
  });

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
                  <h3 className="display">
                    {problemsSolved === -1 ? "-" : problemsSolved} problems
                    solved
                  </h3>
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
                      key={i}
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
              {topics.map((topic, i) => (
                <div
                  className="topic-card-wrapper g-col-12 g-col-md-6 g-col-lg-4"
                  key={i}
                >
                  <Link to="/study" state={{ topic: topic.name.toLowerCase() }}>
                    <div
                      className="card topic-card"
                      id={topic.name.replace(" ", "").toLowerCase() + "-card"}
                    >
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
