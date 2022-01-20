import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

const Header = () => {
  let toggle = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  return (
    <div className="container">
      <div className="topnav" id="myTopnav">
        <Link
          style={{ marginTop: "1.5rem", marginLeft: "1rem" }}
          class="navbar-brand"
          to="/"
        >
          {data.full_name}
        </Link>
        <div className="navbar navbar-b justify-content-end">
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resume">Resume</Link>
          <button
            className="navbar-toggler collapsed icon"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
