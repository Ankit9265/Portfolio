import React, { useRef } from "react";
import "./Nav.css";
import { Link } from "react-scroll";

function Nav() {
  let menu = useRef();
  let mobile = useRef();
  return (
    <nav>
      <h1>PORTFOLIO</h1>

      <ul className="desktopmenu">
        <li>
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            HOME
          </Link>
        </li>

        <li>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            ABOUT
          </Link>
        </li>

        <li>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            PROJECTS
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            CONTACT
          </Link>
        </li>
      </ul>

      <div
        className="hamburger"
        ref={menu}
        onClick={() => {
          mobile.current.classList.toggle("activemobile");
        }}
      >
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      <ul className="mobilemenu" ref={mobile}>
        <li>
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            HOME
          </Link>
        </li>

        <li>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            ABOUT
          </Link>
        </li>

        <li>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            PROJECTS
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
