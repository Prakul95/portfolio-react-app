import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

const workEx = [
  {
    date: "2024 - 2024",
    title: "Freelance Software Developer",
    subtitle: "Remote",
    details: [
      "Developed a React-based web application integrating a Spring Boot Java REST API backend for Amazon S3.",
      "Implemented Kubernetes-hosted file management with pre-signed URLs for secure access.",
      "Automated digital film slate using React and OpenCV-powered QR models, reducing manual effort."
    ]
  },
  {
    date: "2022 - 2024",
    title: "Software Development Engineer - Alexa AI",
    subtitle: "Amazon, USA",
    details: [
      "Designed Java service for improving Alexa ML models for route optimization based on past interactions, which reduced error rates by ~1 million/week. Coordinated cross-teams to deliver tier-1 feature migration.",
      "Designed and implemented OEMS, an orchestration service using Golang and Kubernetes, to automate manual deployments for Alexa A/B experiments, increasing experiment capacity from 2-4 to 15. The system streamlined the deployment of model configurations and experiment configurations, enabling seamless transitions between production and experimentation. Additionally, it automated dial-ups, model allowlist/blocklist updates, and cleanup processes, reducing manual intervention. To enhance usability, I developed a React-based frontend that interfaced with the Kubernetes backend, allowing the science team to focus on experiment values rather than deployment mechanics.",
      "Built Golang microservice webhooks to validate incoming requests, reducing service request failure by 30%. Used Helm Charts, Cert Manager, and AWS EKS."
    ]
  },
  {
    date: "2017 - 2019",
    title: "Software Developer - JLL Project",
    subtitle: "NTT DATA Services",
    details: [
      "Developed a Python Flask web app for generating business reports with SQL database integration.",
      "Built a spam detection system with NLP techniques, achieving 97.3% accuracy.",
      "Optimized report runtime from 1 hour to under 2 minutes using efficient Bash scripting."
    ]
  }
];

const education = [
  {
    date: "2025 - present",
    title: "Master of Business Administration, Information Technology",
    subtitle: "Humphreys University",
    details: ["pursuing currently"]
  },
  {
    date: "2020 - 2022",
    title: "MS in Engineering Science, Data Science",
    subtitle: "State University of New York at Buffalo",
    details: ["GPA: 3.78"]
  },
  {
    date: "2013 - 2017",
    title: "B.Tech in Electronics & Communication",
    subtitle: "Guru Gobind Singh Indraprastha University",
    details: ["GPA: 3.68"]
  }
];

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career & Education History</h1>
        <VerticalTimeline>
          {workEx.map((item, index) => (
            <VerticalTimelineElement
              key={`work-${index}`}
              className="vertical-timeline-element--work"
              date={item.date}
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
              <ul>
                {item.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
          {education.map((item, index) => (
            <VerticalTimelineElement
              key={`edu-${index}`}
              className="vertical-timeline-element--education"
              date={item.date}
              iconStyle={{ background: '#f9a825', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
              <ul>
                {item.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
