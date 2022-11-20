import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import "./dashboard.css";

const StudySplash = () => {
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
        <Sidebar selected={1} />
        <div className="container mt-5 pt-5">
          <h1 className="display text-center">What would you like to study?</h1>
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
        </div>
      </div>
    </>
  );
};

export default StudySplash;
