import { FaGithub, FaExternalLinkAlt, FaGoogle, FaLinkedin } from "react-icons/fa";
// import "./App.css";
import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Navigation,
  Footer,
  Contact,

} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

// Sample Projects
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

// Sample Colab Notebooks
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

// Reusable component for Projects
const ProjectCard = ({ name, description, link }) => (
  <div className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    <p className="text-gray-600 mt-2 leading-relaxed">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex items-left text-blue-600 hover:underline text-base font-medium"
    >
      GitHub Link <FaGithub className="ml-2" />
    </a>
  </div>
);

// Reusable component for Colab notebooks
const ColabCard = ({ name, description, link }) => (
  <li className="mb-6">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-left text-blue-600 hover:underline text-lg font-medium"
    >
      {name} <FaGoogle className="ml-2" />
    </a>
    <p className="text-gray-600 mt-1 text-base leading-relaxed">{description}</p>
  </li>
);

function App() {
  // const [mode, setMode] = useState<string>('dark');
  const [mode, setMode] = useState('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }
    useEffect(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
  return (
    <>
      {/*
        Import Futura font via CDN (example). If you have a local Futura font,
        place it in your /public or /src folder and adjust accordingly.
      */}
      <style>
        {`
          @import url('https://fonts.cdnfonts.com/css/futura-pt');
          .font-futura {
            font-family: 'Futura PT', sans-serif;
          }
        `}
      </style>

      <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            <Timeline/>
            <Project/>
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    </>
  );
}

export default App;
