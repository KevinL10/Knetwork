import Sidebar from "./Sidebar";

const Study = ({ topic }: { topic?: string }) => {
  return (
    <>
      <div className="d-flex h-100">
        <Sidebar selected={1} />
        <div className="container mt-5 pt-5">
          <h1 className="display text-center">
            {topic ? "Studying " + topic + "!" : "Let's learn!"}
          </h1>
          <div className="card" style={{ marginTop: 40 }}>
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Study;
