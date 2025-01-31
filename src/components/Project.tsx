import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import "../assets/styles/Project.scss";

const projects = [
  {
    name: "Java TicTacToe app",
    description:
      "Developed a real-time multiplayer Tic-Tac-Toe application in Java, enabling seamless gameplay with an in-game reset feature for users to restart matches dynamically.",
    link: "https://github.com/Prakul95/tictactoe",
  },
  {
    name: "Login Demo using JWT tokens",
    description:
      "Developed a PostgreSQL-backed authentication system in Go, implementing secure user authentication with JWT tokens. Integrated caching for efficient session management, storing JWT tokens in cache upon login and invalidating them upon logout to enhance security and performance.",
    link: "https://github.com/Prakul95/JwtLoginDemo",
  },
];

const colabLinks = [
  {
    name: "EDA for Detecting Malicious URLs (Lexical Analysis)",
    link: "https://colab.research.google.com/drive/1ZVdehyTnivuTLBdU84GmhN53u6J1qT4n?authuser=1#scrollTo=mimc4ie8RtFI",
    description:
      "Conducted Exploratory Data Analysis (EDA) on URL lexical features to classify URLs as spam or benign, leveraging statistical insights and pattern recognition to identify key indicators of malicious links.",
  },
  {
    name: "Model Fitting for Malicious URLs (Lexical Analysis)",
    link: "https://colab.research.google.com/drive/1YHyqzm5_-VpPfTqnTvJTgZ1DisUZP2G5?authuser=1",
    description:
      "Developed and optimized a predictive model for detecting malicious URLs using lexical analysis, leveraging key URL features to enhance classification accuracy and threat detection.",
  },
  {
    name: "Tree Data Analysis",
    link: "https://colab.research.google.com/drive/1Nzd_RX76qawJ0uQS9XzrIYrTxuxPUQu2?authuser=1#scrollTo=f3ms_eG0pk5n",
    description:
      "Comprehensive Exploratory Data Analysis (EDA) on the Tree dataset, uncovering patterns, relationships, and insights through statistical summaries, visualizations, and correlation analysis.",
  },
];

const ProjectCard = ({ name, description, link }) => (
  <div className="project-card">
    <h3>{name}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
      GitHub Link <FaGithub className="icon" />
    </a>
  </div>
);

const ColabCard = ({ name, description, link }) => (
  <li className="colab-card">
    <a href={link} target="_blank" rel="noopener noreferrer" className="colab-link">
      {name} <FaGoogle className="icon" />
    </a>
    <p>{description}</p>
  </li>
);

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <h1>Colab Notebooks</h1>
      <ul className="colab-list">
        {colabLinks.map((colab, index) => (
          <ColabCard key={index} {...colab} />
        ))}
      </ul>
    </div>
  );
}

export default Project;
