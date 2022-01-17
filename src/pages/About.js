import React from "react";
import data from "../data";

const About = () => {
  return (
    <section id="about" className="about-mf sect-pt4 sect-mt2 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-sm-8">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About Me</h5>
                    </div>
                    {data.about_me.map((content) => {
                      return (
                        <p className="lead" key={content.id}>
                          {content.content}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className="col-sm-4">
                  <img
                    style={{ maxWidth: "18vw", height: "30vw" }}
                    src={data.profile_image}
                    alt="Profile"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
