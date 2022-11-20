import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ReactSession } from "react-client-session";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Account from "./Account";
import StudySplash from "./StudySplash";
import Study from "./Study";
import Progress from "./Progress";

function App() {
  ReactSession.setStoreType("localStorage");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/studySplash" element={<StudySplash />} />
        <Route path="/study" element={<Study />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </Router>
  );
}

export default App;
