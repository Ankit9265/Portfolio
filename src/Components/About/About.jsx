import React from "react";
import "./About.css";
import Card from "../Card/Card.jsx";
import mern from "../../assets/mern.png";
import java from "../../assets/java.png";
import dsa from "../../assets/dsa.png";

function About() {
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>Name:</span> Ankit Kumar
              </li>
            </ul>
            <ul>
              <li>
                <span>Age:</span> 19 YEAR's
              </li>
            </ul>
            <ul>
              <li>
                <span>Gender:</span> Male
              </li>
            </ul>
            <ul>
              <li>
                <span>Language Know:</span> Hindi , English
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>Degree:</span> B.Tech
              </li>
            </ul>
            <ul>
              <li>
                <span>Branch:</span> Computer Science Engineering
              </li>
            </ul>

            <ul>
              <li>
                <span>Sem:</span> 5
              </li>
            </ul>
          </div>
          <div className="skill">
            <h1>Skills</h1>
            <ul>
              <li>Mern Stack Web Developer</li>
            </ul>
            <ul>
              <li>JAVA</li>
            </ul>
            <ul>
              <li>DSA</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="MERN STACK DEVELOPER" image={mern} />
        <Card title="JAVA" image={java} />
        <Card title="DSA" image={dsa} />
      </div>
    </div>
  );
}

export default About;
