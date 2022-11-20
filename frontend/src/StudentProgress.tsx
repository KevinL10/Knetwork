import { useState, useEffect } from "react";
import Question from "./Question";
import { ReactSession } from "react-client-session";

const StudentProgress = () => {
  const token = ReactSession.get("authentication_token");
  const [questions, setQuestions] = useState<
    Array<{
      question: string;
      answer: string;
      reference: string;
      problemId: string;
    }>
  >([]);
  const [error, setError] = useState("");

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
            for (const problemId of solved) {
              fetch(
                "http://localhost:5000/api/exercises/info?problemId=" +
                  problemId,
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
                  if (!data.message) {
                    setQuestions((prevQuestions) => prevQuestions.concat(data));
                  }
                });
            }
          } else {
            setError(
              "Couldn't authenticate, please log out and in and try again."
            );
          }
        });
    } catch {
      setError("Couldn't connect, please try again.");
    }
  }, []);

  return (
    <>
      {error ? <p>{error}</p> : null}
      {questions.length ? (
        questions.map((question) => (
          <div className="mb-3">
            <Question
              question={question}
              solved={true}
              key={question.problemId}
            />
          </div>
        ))
      ) : (
        <p className="text-info display">No problems solved.</p>
      )}
    </>
  );
};

export default StudentProgress;
