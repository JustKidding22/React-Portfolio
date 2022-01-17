import React from "react";
import data from "../data";

function Contact() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send A Message</h5>
                    </div>
                    <div>
                      <form
                        action={data.formspree_link}
                        method="POST"
                        className="contactForm"
                      >
                        <div id="sendmessage">
                          Your message has been sent. Thank you!
                        </div>
                        <div id="errormessage"></div>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                rows="5"
                                placeholder="Message"
                                required
                              ></textarea>
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Whether you want to get in touch, talk about a project
                        collaboration, or just say hi, I'd love to hear from
                        you.
                        <br />
                        Simply fill the from and send me an email.
                      </p>
                      <ul class="list-ico">
                        <li>
                          <ion-icon
                            style={{ color: "#2867B2", fontSize: "20px" }}
                            name="location-outline"
                          ></ion-icon>
                          {"     "}
                          {data.address}
                        </li>
                        <li>
                          <ion-icon
                            style={{ color: "#2867B2", fontSize: "20px" }}
                            name="mail-outline"
                          ></ion-icon>
                          {"     "}
                          {data.contact_email}
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li className="ml-2">
                          <a
                            href={data.linkedin_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ion-icon
                              style={{ color: "#2867B2" }}
                              size="large"
                              name="logo-linkedin"
                            ></ion-icon>{" "}
                          </a>
                        </li>
                        <li className="ml-2">
                          <a
                            href={data.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ion-icon
                              size="large"
                              name="logo-github"
                            ></ion-icon>
                          </a>
                        </li>
                        <li className="ml-2">
                          <a
                            href={data.stackoverflow_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ion-icon
                              style={{ color: "#ef8236" }}
                              size="large"
                              name="logo-stackoverflow"
                            ></ion-icon>{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
