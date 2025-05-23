import React, { useState } from "react";
import { FaCertificate } from "react-icons/fa";
import "../assets/styles/Certification.scss";

const certificates = [
  {
    name: "Application Development using Microservices and Serverless by IBM",
    link: "https://coursera.org/verify/C43V6CB8BELH",
    pdfPath: "/assets/certificates/ApplicationDevelopmentUsingMicroservicesandServerless.pdf",
  },
  {
    name: "Foundations of Project Management by Google",
    link: "https://coursera.org/verify/1WOUQIVI25WQ",
    pdfPath: "/assets/certificates/foundations_project_management.pdf",
  },
  {
    name: "Project Initiation: Starting a Successful Project by Google",
    link: "https://coursera.org/verify/0EPJGOIPT5OH",
    pdfPath: "/assets/certificates/ProjectInitiationStartingaSuccessfulProject.pdf", 
  },
  {
    name: "Object Oriented Programming in Java",
    link: "https://coursera.org/verify/TLKJR4WVIEK8",
    pdfPath: "/assets/certificates/ObjectOrientedProgramminginJava.pdf",
  },
];

const CertificateCard = ({ name, link, pdfPath }) => {
  const [numPages, setNumPages] = useState(null);

  return (
    <div className="certificate-card">
      <h3>{name}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer" className="certificate-link">
        Certificate Link <FaCertificate className="certificate-icon" />
      </a>
    </div>
  );
};

function Certificate() {
  return (
    <div className="certificates-container" id="certificates">
      <h1>Certifications</h1>
      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <CertificateCard key={index} {...certificate} />
        ))}
      </div>
    </div>
  );
}

export default Certificate;