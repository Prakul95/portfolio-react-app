import React from "react";
import "../assets/styles/Contact.scss";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Feel free to reach out to me via Email, Phone, or LinkedIn.</p>

        <div className="contact-info">
          <a href="mailto:prakul.us.95@gmail.com" className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>prakul.us.95@gmail.com</span>
          </a>

          <a href="tel:+17165076412" className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+1 (716) 507-6412</span>
          </a>

          <a href="https://www.linkedin.com/in/prakul-95" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaLinkedin className="contact-icon" />
            <span>linkedin.com/in/prakul-95</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
