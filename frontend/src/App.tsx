import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Choices from "./Choices";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choices" element={<Choices />} />
      </Routes>
    </Router>
  );
}

export default App;
