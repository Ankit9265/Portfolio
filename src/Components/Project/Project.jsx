import React from "react";
import "./Project.css";
import Card from "../Card/Card.jsx";
import va from "../../assets/va.png";
import fw from "../../assets/fw.png";
import cb from "../../assets/cb.png";
import tti from "../../assets/tti.png";
import java from "../../assets/java.png";
import br from "../../assets/br.png";
function Project() {
  return (
    <div id="projects">
      <h1 className="para">2+YEARS EXPERIENCED IN PROJECTS</h1>
      <div className="Slider">
        <Card title="VIRTUAL ASSISTANT" image={va} />
        <Card title="AI POWERED FITNESS WEBSITE" image={fw} />
        <Card title="AI CHATBOT" image={cb} />
        <Card title="AI TEXT TO IMAGE GENERATOR" image={tti} />
        <Card title="AI BACKGROUND REMOVER" image={br} />
        <Card title="IMAGE SEARCH ENGINE" image={java} />
      </div>
    </div>
  );
}

export default Project;
