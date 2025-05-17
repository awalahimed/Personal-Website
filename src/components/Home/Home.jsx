import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Hey🖐, I'm <span className="highlight">Muhamadawal</span></h1>
          <h2 className="home-subtitle">Full Stack Developer</h2>
          <p className="home-subtitle">
          I design and build modern technologies, responsive website and web applications that deliver seamless user experience with my skills
            I create elegant solutions to complex problems through clean, efficient code.
            Passionate about building innovative web applications that make a difference.
          </p>
          <div className="home-cta">
            <a href="#projects" className="cta-button primary">😮View My Work</a><br></br>
            <a href="#contact" className="cta-button secondary">👉Get In Touch</a>
          </div>
        </div>
        <div className="home-image">
          <img src="/j.png" alt="Muhamadawal" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;