import React from "react";
import data from "../data";
import RESUME from "../data/Resume.pdf";

function Resume() {
  return (
    <section id="resume" className="about-mf sect-pt4 sect-mt2 route">
      <div className="container">
        <div className="col-sm-12">
          <div className="box-shadow-full">
            <div className="title-box-2">
              <h5 className="title-left">Resume</h5>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>Summary</h4>
                <p>{data.resume_summary}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h4>Front End Technolgies</h4>
                <ul>
                  {data.front_end_technolgies.map((tech) => {
                    return <li>{tech}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h4>Back End Technolgies</h4>
                <ul>
                  {data.back_end_technolgies.map((tech) => {
                    return <li>{tech}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-12">
                <a
                  className="badge badge-pill badge-primary"
                  style={{ padding: "15px" }}
                  href={RESUME}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Resume;
