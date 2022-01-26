import React from "react";
import "./App.css";
import Home from "./Home";
import Movie from "./Movie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/movie/:id" element={<Movie />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
