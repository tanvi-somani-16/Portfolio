import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // Correct import
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Correct import
import bg_1 from '../assets/bg-1.png'

const Contact = () => {
  return (
    <div className="contact" id='contact_page'>
      <div className="contact-title">
        <p>Contact me</p>
      </div>
      <div className="contact-start">
        <div className="contact-info">
            <p>Feel free to reach out me at :</p>
        </div>
        <div className="contact-details">
          <p>
            <FontAwesomeIcon icon={faPhone} size="2x" color="white" />
            9172490216
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" />
            tanvisomani0216@gmail.com
          </p>
          <p>
            <a href="https://www.linkedin.com/in/tanvi-somani-84a989258/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
            </a>
            Tanvi Somani
          </p>
          <p>
            <a href="https://github.com/tanvi-somani-16">
              <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
            </a>
            tanvi-somani-16
          </p>
        </div>
      </div>
        <div className="contact-bg">
            <img src={bg_1} />
        </div>
    </div>
  );
};

export default Contact;
