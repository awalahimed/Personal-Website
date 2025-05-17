import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a passionate Full Stack Developer with over 2 years of experience in building web applications
              that solve real-world problems. My journey in software development began with a curiosity
              about how things work on the internet, which led me to pursue a career in web development.
            </p>
            <p className="about-description">
              I design and build modern technologies, responsive website and web applications that deliver seamless user experience with my skills

            </p>
            <div className="about-details">
              <div className="detail-item">
                <h3>Education</h3>
                <p>Junior's in software development</p>
                <p>High school Student</p>
              </div>
              <div className="detail-item">
                <h3>Location</h3>
                <p>Nekemte, Oromia</p>
                <p>Available for Remote Work</p>
              </div>
              <div className="detail-item">
                <h3>Interests</h3>
                <p>Open Source Contributing</p>
                <p>Tech Blogging</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-container">
              <img src="/awal.png" alt="Professional headshot" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;