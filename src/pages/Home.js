import React from "react";
import Typed from "react-typed";
import data from "../data";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div id="home" className="intro route bg-image background">
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title mb-4">Hello, I am {data.short_name}</h1>
            <p className="intro-subtitle">
              <span className="text-slider-items"></span>
              <strong className="text-slider">
                <Typed
                  strings={["Front End Developer", "Back End Developer"]}
                  typeSpeed={80}
                  backDelay={1100}
                  backSpeed={30}
                  loop
                />
              </strong>
            </p>
            <p className="pt-3">
              <Link
                className="btn btn-success btn js-scroll px-4"
                to="/about"
                role="button"
              >
                Know More About Me!
              </Link>
            </p>
            <p className="pt-3">
              <Link
                className="btn btn-warning btn js-scroll px-4"
                to="/portfolio"
                role="button"
              >
                View My Work
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
