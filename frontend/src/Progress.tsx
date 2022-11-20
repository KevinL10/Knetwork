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
  const questions: Array<string> = [];

  return (
    <>
      <div className="d-flex h-100">
        <Sidebar selected={2} />
        <div className="container mt-5">
          <h1 className="display text-center mt-5">Progress</h1>
          <div style={{ maxHeight: "50%" }}>
            {questions.map((question) => (
              <div className="card">
                <div className="card-body overflow-scroll">
                  <i className={ICON_MAP[question.toLowerCase()]}></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
