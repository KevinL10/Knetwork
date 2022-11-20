import Question from "./Question";
import Sidebar from "./Sidebar";

const ICON_MAP: { [key: string]: string } = {
  math: "bi bi-calculator",
  english: "bi bi-pencil",
  history: "bi bi-hourglass-bottom",
  chemistry: "fa fa-light fa-flask",
  physics: "fa fa-light fa-atom",
  socialstudies: "fa fa-light fa-scroll",
  religion: "fa fa-light fa-cross",
};

const Progress = () => {
  const questions: Array<{
    question: string;
    answer: string;
    reference: string;
  }> = [];

  return (
    <>
      <div className="d-flex h-100">
        <Sidebar selected={2} />
        <div className="container mt-5 px-5">
          <h1 className="display text-center mt-5">Progress</h1>
          <div style={{ maxHeight: "50%" }} className="mt-4">
            {questions.map((question, i) => (
              <div className="mb-3">
                <Question
                  question={question}
                  solved={true}
                  i={-1}
                  markSolved={(i) => {}}
                  key={i}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
