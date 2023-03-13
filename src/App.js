import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ResponsiveAppBar from "./pages/Header";
import About from "./pages/About";



function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
    </Router>
  );
}

export default App;