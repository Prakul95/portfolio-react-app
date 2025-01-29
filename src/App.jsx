import { FaGithub, FaExternalLinkAlt, FaGoogle, FaLinkedin } from "react-icons/fa";
import "./App.css";

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

      <div className="font-futura bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-10 text-left">
          {/* Header Section */}
          <header className="mb-12">
            <h1 className="text-4xl font-extrabold text-gray-800">
              Prakul's Portfolio
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Full Stack Infrastructure Developer
            </p>
          </header>

          {/* Resume Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800">Resume</h2>
            <p className="text-gray-700 mt-1 text-base leading-relaxed">
              Download or view my resume for a detailed overview of my experience:
            </p>
            <a
              href="https://drive.google.com/file/d/1I9k9O0pgC0ciR0_qV8i298RN2uWHClef/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-left mt-3 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 transition-colors font-medium rounded-md"
            >
              View Resume
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </section>

          {/* Projects Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
            <p className="text-gray-700 mt-1 text-base leading-relaxed">
              Explore a few of my recent development projects:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>

          {/* Colab Notebooks Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800">Colab Notebooks</h2>
            <p className="text-gray-700 mt-1 text-base leading-relaxed">
              A selection of my data analysis and ML notebooks:
            </p>
            <ul className="mt-6">
              {colabLinks.map((colab, index) => (
                <ColabCard key={index} {...colab} />
              ))}
            </ul>
          </section>

          {/* More (About Me & LinkedIn) Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800">More</h2>
            <p className="text-gray-700 mt-1 text-base leading-relaxed">
              I'm passionate about creating efficient, scalable software solutions 
              and exploring cutting-edge technologies in the DevOps and 
              full-stack ecosystem. I love learning new languages, frameworks, and 
              tools that can make development faster, more enjoyable, and more robust.
            </p>
            <p className="text-gray-700 mt-4 text-base leading-relaxed">
              Connect with me on LinkedIn to stay updated on my latest projects
              and career milestones:
            </p>
            <a
              href="https://www.linkedin.com/in/prakul-95/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-3 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 transition-colors font-medium rounded-md"
            >
              LinkedIn Profile
              <FaLinkedin className="ml-2" />
            </a>
          </section>

          {/* Footer (Optional) */}
          <footer className="border-t pt-6 mt-8">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Prakul. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
