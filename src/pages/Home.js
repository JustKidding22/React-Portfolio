import React from "react";
import Typed from "react-typed";
import data from "../data";

function Contact() {
  return (
    <div id="home" className="intro route bg-image background">
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title mb-4">Hey! This is {data.short_name}</h1>
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
              <a
                className="btn btn-success btn js-scroll px-4"
                href="/about"
                role="button"
              >
                Know More About Me!
              </a>
            </p>
            <p className="pt-3">
              <a
                className="btn btn-warning btn js-scroll px-4"
                href="/portfolio"
                role="button"
              >
                View My Work
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
