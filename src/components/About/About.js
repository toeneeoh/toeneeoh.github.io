import React from 'react';
import './About.css'; // Import the CSS file for styling

import GitHubIcon from '../../assets/svg/github.svg';
import LinkedInIcon from '../../assets/svg/linkedin.svg';
import EmailIcon from '../../assets/svg/gmail.svg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <h2>About Me</h2>
        <p>
          Hello! I'm a senior at George Mason University with a passion for building fun and useful applications.
          I enjoy working on creative projects that require deeper thinking for solutions.
          I'm always eager to dip my toes into new technologies to expand my skills and grow as a developer.
        </p>
      </div>
      
      {/* Optionally include social links */}
      <div className="social-links">
        <a href="https://github.com/toeneeoh" target="_blank" rel="noopener noreferrer">
          <img src={GitHubIcon} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://linkedin.com/in/tony-pl" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="mailto:toeneeoh@gmail.com">
          <img src={EmailIcon} alt="Email" className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default About;