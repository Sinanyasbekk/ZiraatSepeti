import logo from "./logo.svg";
import "./App.css";
import React from "react";
import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./i18n";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/NavBar.jsx" element={<NavBar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
