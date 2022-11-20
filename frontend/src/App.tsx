import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ReactSession } from "react-client-session";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  ReactSession.setStoreType("localStorage");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
