import "./study.css";
const Question = ({
  solved,
  question,
  markSolved,
  i,
}: {
  solved: boolean;
  question: { question: string; answer: string; reference: string };
  i: number;
  markSolved: (i: number) => void;
}) => {
  return (
    <div
      className={
        "card study-card shadow mb-3" + (solved ? " study-card-solved" : "")
      }
    >
      {solved ? (
        <div className="study-card-badge d-flex justify-content-center align-items-center">
          <i className="bi bi-check text-center d-block mx-auto"></i>
        </div>
      ) : null}
      <h2 className="display">{question.question}</h2>
      <details>
        <summary>Reveal answer</summary>
        <div className="study-card-bq">
          <p>{question.answer}</p>
          <figcaption className="blockquote-footer mt-2">
            from {question.reference}
          </figcaption>
          {solved ? null : (
            <button
              className="btn btn-primary rounded-pill"
              onClick={() => markSolved(i)}
            >
              Mark solved
            </button>
          )}
        </div>
      </details>
    </div>
  );
};

export default Question;
