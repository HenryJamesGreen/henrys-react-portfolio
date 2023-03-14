import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ResponsiveAppBar from "./pages/Header";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
