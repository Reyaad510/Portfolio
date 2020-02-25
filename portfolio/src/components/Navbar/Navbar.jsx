import React, { Component } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../reyaad.png";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        {/* <img className="reyaad-logo" src={logo} /> */}
        <ul>
          <Link
            className="navLink"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
          >
            About
          </Link>
          <Link
            className="navLink"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="navLink"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
          >
            Contact
          </Link>
        </ul>
      </nav>
    );
  }
}
