import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="mailto:prakul.us.95@gmail.com" target="_blank" rel="noopener noreferrer">
          <EmailIcon /> Email
        </a>
        <a href="https://github.com/Prakul95" target="_blank" rel="noopener noreferrer">
          <GitHubIcon /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/prakul-95" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon /> LinkedIn
        </a>
      </div>
      <p>© {new Date().getFullYear()} Prakul. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
