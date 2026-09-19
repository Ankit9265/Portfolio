import React from "react";
import "./index.css";
import Nav from "./Components/Nav/Nav.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Project from "./Components/Project/Project.jsx";
import Contact from "./Components/Contact/Contact.jsx";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
