import Sidebar from "./Sidebar";
import { ReactSession } from "react-client-session";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import StudentProgress from "./StudentProgress";

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
  const isSupervisor = ReactSession.get("userType") === "supervisor";
  const navigate = useNavigate();
  const token = ReactSession.get("authentication_token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    // make API call
  }, []);

  const questions: Array<{
    question: string;
    answer: string;
    reference: string;
  }> = [];

  return (
    <>
      <div className="d-flex h-100">
        <Sidebar selected={2} />
        <div className="container mt-5 px-5 overflow-auto">
          <h1 className="display text-center mt-5">Progress</h1>
          <div style={{ maxHeight: "80%" }} className="mt-4">
            <StudentProgress />
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
