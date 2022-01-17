import React from "react";
import data from "../data";

function Portfolio() {
  return (
    <section id="work" className="about-mf sect-pt4 sect-mt2 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-sm-8">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">Portfolio</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {data.projects.map((project) => {
                  return (
                    <div className="col-md-4" key={project.id}>
                      <div className="work-box">
                        <div className="work-img">
                          <img
                            src={project.image}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="work-content">
                          <div className="row">
                            <div className="col-sm-8">
                              <h2 className="w-title">{project.name}</h2>
                              <div className="w-more">
                                <span className="w-ctegory">
                                  {project.techStack}
                                </span>
                              </div>
                              <div className="w-more mt-2">
                                <span className="w-ctegory">
                                  <a
                                    href={project.githubLink}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    <ion-icon
                                      size="large"
                                      name="logo-github"
                                    ></ion-icon>
                                  </a>
                                </span>
                                <span className="w-ctegory ml-3">
                                  <a
                                    href={project.liveLink}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    <ion-icon
                                      size="large"
                                      name="open-outline"
                                    ></ion-icon>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
