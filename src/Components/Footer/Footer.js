import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faTelegram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faHome,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div
        className="container"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <div className="row">
          <div className="footer-box col-md-4 col-sm-6">
            <h3 className="service-font1">ABOUT ME</h3>
            <p>
              I am an experienced, motivated, and creative JavaScript developer
              with extensive experience in designing and building innovative
              technology solutions for over 8 years. React and Vue.js is my
              passion and what I'm best at. I'm excited to get the chance to
              help bring your ideas to life, and want to let you know that for
              me, the most important thing is a successful outcome. I focus on
              writing idiomatic, scalable, and accessible code while
              prioritizing teamwork and collaboration with others as a part of
              my workflow. I am working on Blockchain technology as well like
              Ethereum Smart Contract, Layer 2 solutions. I am a fast learner so
              I can work with any unfamiliar programming.
            </p>

            <div className="ficons">
              <a href="https://www.linkedin.com/in/vincent-newman-7b8422261/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://github.com/DarkNight918">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://t.me/DarkNight918">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
              <a href="https://discordapp.com/users/1015255707421003776">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </div>
          </div>

          <div className="footer-box col-md-4 col-sm-6">
            <h3 className="service-font1">CONTACT ME</h3>

            <div className="contact-icon d-flex align-items-center mb-4">
              <FontAwesomeIcon icon={faHome} />
              <span> 11942 Hillbrook Dr, Houston, Texas, US</span>
            </div>

            <div className="contact-icon d-flex align-items-center mb-4">
              <FontAwesomeIcon icon={faPhone} />
              <span> +1 213 985 0522 </span>
            </div>

            <div className="contact-icon d-flex align-items-center mb-4">
              <FontAwesomeIcon icon={faEnvelope} />
              <span> vincent.newman918@gmail.com</span>
            </div>
          </div>

          <div className="footer-box col-md-4 col-sm-6">
            <h3 className="service-font1">USEFUL LINKS</h3>

            <ul>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faChevronRight} />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#services">
                  <FontAwesomeIcon icon={faChevronRight} />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#skills">
                  <FontAwesomeIcon icon={faChevronRight} />
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/#projects">
                  <FontAwesomeIcon icon={faChevronRight} />
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/#blogs">
                  <FontAwesomeIcon icon={faChevronRight} />
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="copy-right-container">
          <p>
            Copyright &copy; {new Date().getFullYear()}, All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
