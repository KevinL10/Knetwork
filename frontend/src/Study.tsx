import Question from "./Question";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import "./study.css";
import "./dashboard.css";
import { ReactSession } from "react-client-session";
import { useNavigate, useLocation } from "react-router-dom";

const Study = ({ topic }: { topic?: string }) => {
  const token = ReactSession.get("authentication_token");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    // make API call
  }, []);

  const [questions, setQuestions] = useState<
    Array<{
      question: string;
      answer: string;
      reference: string;
      problemId: string;
    }>
  >([]);
  const [solved, setSolved] = useState<Array<string>>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  const markSolved = (i: string) => {
    try {
      fetch("http://localhost:5000/api/exercises/mark", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({
          problemId: i,
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
          if (data.status === "ok") {
            setSolved((prevSolved) => prevSolved.concat(i));
          } else {
            setError(
              "Couldn't authenticate, please log out and in and try again."
            );
          }
        })
        .catch(() => {
          setError("Couldn't mark solved problems, please try again.");
        });
    } catch {
      setError("Couldn't connect, please try again.");
    }
  };

  const regenerate = () => {
    setQuestions([]);
    setSolved([]);
    fetchProblems();
  };

  useEffect(() => {
    fetchProblems();
  }, []);

  const fetchProblems = () => {
    try {
      fetch(
        `http://localhost:5000/api/exercises/generate?topic=${location.state.topic}&count=5`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            "x-auth-token": token,
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error();
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setQuestions(data);
          setLoaded(true);
        })
        .catch(() => {
          setError("Couldn't mark solved problems, please try again.");
        });
    } catch {
      setError("Couldn't connect, please try again.");
    }
  };

  return (
    <>
      <div className="d-flex h-100">
        <Sidebar selected={1} />
        <div className="container mt-5 pt-5 px-5 overflow-auto">
          <h1 className="display text-center">
            {location.state.topic
              ? "Studying " + location.state.topic + "!"
              : "Let's learn!"}
          </h1>
          {error ? <p className="text-muted">{error}</p> : null}
          <div
            className="mt-4"
            style={{
              maxHeight: "80%",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          ></div>

          {questions.length ? (
            questions.map((question, i) => (
              <Question
                solved={
                  solved.findIndex((el) => el === question.problemId) !== -1
                }
                problemId={question.problemId}
                question={question}
                markSolved={markSolved}
                key={question.problemId}
              />
            ))
          ) : (
            <p className="mb-3 display">
              {!loaded
                ? "Loading questions..."
                : "No questions for " + location.state.topic}
            </p>
          )}
          <button
            className="btn btn-light rounded-pill mb-5"
            onClick={regenerate}
          >
            Regenerate problems
          </button>
        </div>
      </div>{" "}
    </>
  );
};

export default Study;
