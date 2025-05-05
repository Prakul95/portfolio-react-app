import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../assets/styles/Main.scss';
import DSC04669 from '../assets/images/DSC04669.png';

function Main() {
  const fileUrl = "https://drive.google.com/file/d/1p4ZH6uVgIle3eqbCW_7ngB-w7Tfdii1L/";

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={DSC04669} alt="Profile" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Prakul95" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/prakul-95" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          
          <h1>Prakul</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Prakul95" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/prakul-95/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>

          {/* View & Download Resume Buttons */}
          <div className="resume-buttons">
            <a 
              href={fileUrl + "preview"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="resume-button view"
            >
              <VisibilityIcon /> View Resume
            </a>

            <a 
              href={fileUrl + "view"}
              download="Prakul_Resume.pdf"
              className="resume-button download"
            >
              <FileDownloadIcon /> Download Resume
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;
