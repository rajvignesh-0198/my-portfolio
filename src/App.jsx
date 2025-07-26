import React from "react";
import myPic from './assets/my_pic.jpg';
import {
  Github,
  Linkedin,
  Mail,
  Star,
  Award,
  Zap,
  Code,
  Database,
  Server,
  Cpu,
  LayoutTemplate,
  Wrench,
} from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPython,
  faReact,
  faVuejs,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons';
import { SiMongodb,SiPostgresql } from 'react-icons/si';
import "./App.css";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "Django", level: 4, icon: <FontAwesomeIcon icon={faPython} className="icon"/> },
  { name: "Vue js", level: 4, icon: <FontAwesomeIcon icon={faVuejs} className="icon"/> },
  { name: "PostgreSQL", level: 4, icon: <SiPostgresql className="icon"/> },
  { name: "Mongodb", level: 3, icon: <SiMongodb className="icon"/> },
  { name: "Express", level: 3, icon: <Code className="icon" /> },
  { name: "React", level: 3, icon: <FontAwesomeIcon icon={faReact} className="icon"/> },
  { name: "Node.js", level: 3, icon: <FontAwesomeIcon icon={faNodeJs} className="icon"/> },
];

export default function Portfolio() {
  return (
    <div className="portfolio">
      <header className="header fade-in delay-1">
        <img src={myPic} alt="Raj Vignesh" className="profile-img" />
        <h1 className="name">Rajvigneshwar Nagarajan</h1>
        <p className="title">Full Stack Developer | 2.9 Years Experience</p>
        <div className="socials">
          <a href="https://github.com/rajvignesh-0198" target="_blank" rel="noopener noreferrer">
            <Github className="social-icon" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Linkedin className="social-icon" />
          </a>
          <a href="mailto:rajvignesh0198@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="social-icon" />
          </a>
        </div>
      </header>

      <section className="section fade-in delay-2">
        <h2 className="section-title">About Me</h2>
        <div className="card">
          <p>
            I am a passionate Full Stack Developer with 2.9 years of hands-on experience in designing,
            developing, and maintaining web applications using technologies like Django,
            PostgreSQL, Vue js, React, Node.js, Express, Mongodb. I love building scalable systems and exploring new technologies.
          </p>
        </div>
      </section>

      <section className="section fade-in delay-3">
        <h2 className="section-title">Highlight</h2>
        <div className="card row">
          <Award className="highlight-icon" />
          <div>
            <h3 className="card-title">Built & Deployment</h3>
            <p>
              Designed, developed, and deployed an end-to-end.
            </p>
          </div>
        </div>
      </section>

      <section className="section fade-in delay-4">
        <h2 className="section-title">Why Me?</h2>
        <div className="card row">
          <Zap className="highlight-icon" />
          <div>
            <h3 className="card-title">Innovative Problem Solver</h3>
            <p>
              I automate repetitive tasks, proactively solve edge-case issues before they arise, and continuously
              ship clean, production-ready code. I bring not just skills, but ownership and creative solutions
              that move your product forward.
            </p>
          </div>
        </div>
      </section>

      <section className="section fade-in delay-5">
        <h2 className="section-title">Projects</h2>
        <div className="projects">
          <div className="card">
            <h3 className="card-title">Employee management system</h3>
            <p>A employee data management system using Django,Vue js stack.</p>
            <a href="https://github.com/rajvignesh-0198/vue-django-crud" target="_blank" rel="noreferrer" className="link">
              <Github className="icon"/> View Code
            </a>
          </div>
          <div className="card">
            <h3 className="card-title">X-Clone</h3>
            <p>X (Twitter) - Clone using MERN Stack </p>
            <a href="https://github.com/rajvignesh-0198/x-clone-1" target="_blank" rel="noreferrer" className="link">
              <Github className="icon"/> View Code
            </a>
            <a href="https://x-clone-1-f7zi.onrender.com/" target="_blank" rel="noreferrer" className="web-link">
              <FontAwesomeIcon icon={faLink} className="icon"/> View Site
            </a>
          </div>
        </div>
      </section>

      <section className="section fade-in delay-6">
        <h2 className="section-title">Skills</h2>
        <div className="card">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill">
              <div className="skill-name">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`star ${i < skill.level ? "filled" : ""}`}
                    fill={i < skill.level ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer fade-in delay-7">
        &copy; {new Date().getFullYear()} Rajvigneshwar. All rights reserved.
      </footer>
    </div>
  );
}
