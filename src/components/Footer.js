import React from "react";
import data from "../data";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="socials">
          <ul>
            <li className="ml-2">
              <a
                href={data.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon
                  style={{ color: "white", fontSize: "40px" }}
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
                  style={{ color: "white", fontSize: "40px" }}
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
                  style={{ color: "white", fontSize: "40px" }}
                  name="logo-stackoverflow"
                ></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
