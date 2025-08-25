import React from "react";
import { FaGithub, FaGoogle, FaYoutube, FaRegFilePdf } from "react-icons/fa";
import "../assets/styles/Project.scss";

const projects = [
    {
    name: "Create subtitles from audio and video using the open AI's whisper or Faster-Whisper model",
    description:
      "Built a Python tool that extracts audio from media files, transcribes speech using the Faster-Whisper model, and generates .srt subtitle files. Enabled configurable options like language selection, beam size tuning, and optional timing delays for flexible subtitle creation.",
    link: "https://github.com/Prakul95/createSubtitles",
  },
  {
    name: "MCP server for star-gazing",
    description: "Built a Python-based MCP server using Skyfield to detect eclipses and lunar phases. Integrated with OpenWeather API for real-time forecasts and connected to Google Calendar and Sheets MCPs for automated scheduling and event logging. Demo video link: https://www.youtube.com/watch?v=rrs_6oz-khE",
    link: "https://github.com/Prakul95/mcp-python-star-gazing"

  },
  {
    name: "RAG demo using Gemini",
    description: "Built a local Chroma vector store, embed with Google Gemini, run semantic search, and compare embeddings.",
    link: "https://github.com/Prakul95/rag_demo"
  },
  {
    name: "Login Demo using JWT tokens",
    description:
      "Developed a PostgreSQL-backed authentication system in Go, implementing secure user authentication with JWT tokens. Integrated caching for efficient session management, storing JWT tokens in cache upon login and invalidating them upon logout to enhance security and performance.",
    link: "https://github.com/Prakul95/JwtLoginDemo",
  },
  {
    name: "Java TicTacToe app",
    description:
      "Developed a real-time multiplayer Tic-Tac-Toe application in Java, enabling seamless gameplay with an in-game reset feature for users to restart matches dynamically.",
    link: "https://github.com/Prakul95/tictactoe",
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

const reports = [
  {
    name: "Designing a Fair Machine Learning Model for Recidivism Prediction in U.S. Court Systems",
    link: "https://drive.google.com/file/d/1jyRCF7RE4Eox047W4DDvAnvywTW9CA9x/view?usp=sharing",
    description:
      "In this project for CSE 574: Introduction to Machine Learning, we acted as machine learning engineers tasked with building a fair and cost-effective replacement for the controversial COMPAS recidivism prediction algorithm used in U.S. courts. Using real-world data from Broward County, Florida, we evaluated three machine learning models (SVM, Neural Network, and Naive Bayes) and implemented five fairness-aware postprocessing techniques. Our selected solution—a Support Vector Machine (SVM) combined with the Demographic Parity fairness constraint and cost-based secondary optimization—achieved an overall accuracy of 62.79% and reduced societal cost to $-757 million. The model minimized racial disparities in predictive outcomes across African-American, Caucasian, Hispanic, and Other demographic groups. We justified our choice through comparative analysis of fairness metrics such as TPR, FPR, and FNR, ensuring our final model upheld ethical and financial responsibilities for all stakeholders including the public, government, and investors.",
  },
];

const filmmakingProjects = [
  {
    name: "Pan Kombadi",
    description:
      "An experimental film where soundscapes drive the narrative, replacing music with raw, atmospheric effects. The film visually juxtaposes the interview’s message with a secondary, symbolic storyline, drawing subtle parallels to honor crimes around the world.",
    videoId: "JiYt63VM8X0",
  },
  {
    name: "Furor",
    description:
      "A filmmaker's worst nightmare—her crew bails on the shoot day. Frustrated and alone, she writes a parallel heist story where a group of criminals gives absurd excuses for skipping a robbery. A humorous take on artistic struggles, filmed in 48 hours.",
    videoId: "RBAztqZhfpk",
  },
  {
    name: "Driven",
    description:
      "A man spirals into paranoia as his dark past resurfaces, warping his perception of reality. As his grip on sanity weakens, eerie visions and unsettling truths blur the lines between memory and nightmare. Created for a 48-hour horror film festival.",
    videoId: "mgWGpBiVKbU",
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

const ReportsCard = ({ name, description, link }) => (
  <li className="report-card">
    <a href={link} target="_blank" rel="noopener noreferrer" className="report-link">
      {name} <FaRegFilePdf className="icon" />
    </a>
    <p>{description}</p>
  </li>
);

const YouTubeCard = ({ name, description, videoId }) => (
  <div className="youtube-card">
    <h3>{name}</h3>
    <p>{description}</p>
    <div className="youtube-embed">
      <iframe
        width="100%"
        height="250"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&modestbranding=1&rel=0&showinfo=0`}
        title={name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
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

      <h1>Reports</h1>
      <ul className="reports">
        {reports.map((report, index) => (
          <ReportsCard key={index} {...report} />
        ))}
      </ul>

      <h1>Filmmaking Projects</h1>
      <div className="youtube-grid">
        {filmmakingProjects.map((project, index) => (
          <YouTubeCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Project;
