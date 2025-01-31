import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career & Education History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
              - Developed a React-based web application integrating a Spring Boot Java REST API backend for Amazon S3.
              - Implemented Kubernetes-hosted file management with pre-signed URLs for secure access.
              - Automated digital film slate using React and OpenCV-powered QR models, reducing manual effort.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Development Engineer - Alexa AI</h3>
            <h4 className="vertical-timeline-element-subtitle">Amazon, USA</h4>
            <p>
              - Developed a React.js frontend with a Golang REST API backend for automated ML model deployments.
              - Built a Golang microservice reducing request failures by 30%, deployed via Kubernetes (AWS EKS).
              - Designed an orchestration service that automated processes previously requiring 15+ man-hours.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer - JLL Project</h3>
            <h4 className="vertical-timeline-element-subtitle">NTT DATA Services</h4>
            <p>
              - Developed a Python Flask web app for generating business reports with SQL database integration.
              - Built a spam detection system with NLP techniques, achieving 97.3% accuracy.
              - Optimized report runtime from 1 hour to under 2 minutes using efficient Bash scripting.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020 - 2022"
            iconStyle={{ background: '#f9a825', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">MS in Engineering Science, Data Science</h3>
            <h4 className="vertical-timeline-element-subtitle">State University of New York at Buffalo</h4>
            <p>GPA: 3.78</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013 - 2017"
            iconStyle={{ background: '#f9a825', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech in Electronics & Communication</h3>
            <h4 className="vertical-timeline-element-subtitle">Guru Gobind Singh Indraprastha University</h4>
            <p>GPA: 3.68</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
