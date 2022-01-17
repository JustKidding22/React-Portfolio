import React from "react";
import data from "../data";

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
        <a
          style={{ marginTop: "1.5rem", marginLeft: "1rem" }}
          class="navbar-brand"
          href="/"
        >
          {data.full_name}
        </a>
        <div className="navbar navbar-b justify-content-end">
          <a href="/about">About</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
          <a href="/resume">Resume</a>
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
