import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faAws, faJava, faGolang } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const expertiseCategories = [
    {
        title: "Full Stack Development",
        icon: faReact,
        description: "I have built a diverse array of web applications from scratch using modern technologies like React, Flask, and Spring Boot. I specialize in backend services and microservices architecture, implementing robust and scalable solutions.",
        techStack: [
            "React", "JavaScript", "TypeScript", "HTML5", "CSS3", "SASS",
            "Flask", "Spring Boot", "Java", "Go", "Python", "SQL", "PostgreSQL", "MongoDB", "Ruby"
        ]
    },
    {
        title: "DevOps & Cloud Engineering",
        icon: faDocker,
        description: "I develop and deploy cloud-native applications, implementing DevOps automation, CI/CD pipelines, container orchestration, and infrastructure as code (IaC) using Kubernetes, Docker, and AWS services.",
        techStack: [
            "Kubernetes", "Docker", "Helm", "CDK", "AWS (EC2, S3, EKS, Lambda, CloudWatch)", "Azure", "CloudFormation",
            "Git", "CI/CD Pipelines", "Linux", "Bash", "DataDog", "Prometheus"
        ]
    },
    {
        title: "Machine Learning & AI",
        icon: faPython,
        description: "I build AI-powered applications and machine learning models for NLP, predictive analytics, and automation using Python-based frameworks such as TensorFlow and PyTorch. Experience in model deployment and inferencing.",
        techStack: [
            "NLP", "Machine Learning", "TensorFlow", "PyTorch", "Kafka", "Apache Spark", "ETL Pipelines", "Hugging Face",
            "LangChain", "Qdrant", "LlamaIndex", "OpenAI", "Groq", "Streamlit"
        ]
    },
    {
        title: "Backend & API Development",
        icon: faJava,
        description: "I specialize in designing, developing, and optimizing RESTful APIs and microservices using Java, Golang, Flask, and Django. I ensure high-performance and scalable backend solutions.",
        techStack: [
            "Java", "Go", "C#", "Spring Boot", "Flask", "Django", "REST APIs", "PostgreSQL", "NoSQL", "SQL", "Apache Kafka"
        ]
    },
    {
        title: "Security & Performance Optimization",
        icon: faGolang,
        description: "I implement secure authentication, performance monitoring, and infrastructure optimizations, leveraging JWT authentication, caching mechanisms, and robust monitoring tools.",
        techStack: [
            "JWT Authentication", "OAuth", "IAM", "Postman", "Selenium", "Load Testing", "Operational Canaries",
            "Security Best Practices", "Test Driven Development (TDD)", "Chaos Testing"
        ]
    }
];

const ExpertiseCard = ({ title, icon, description, techStack }) => (
    <div className="skill">
        <FontAwesomeIcon icon={icon} size="3x"/>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {techStack.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
            ))}
        </div>
    </div>
);

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    {expertiseCategories.map((category, index) => (
                        <ExpertiseCard key={index} {...category} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Expertise;
