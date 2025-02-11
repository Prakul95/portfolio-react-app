import React, { useState } from "react";
import { FaCertificate } from "react-icons/fa";
import "../assets/styles/Certification.scss";

const certificates = [
  {
    name: "Foundations of Project Management",
    link: "https://coursera.org/verify/1WOUQIVI25WQ",
    pdfPath: "/assets/certificates/foundations_project_management.pdf", // Make sure this path is correct in the public folder
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