import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A modern web application built with React and Node.js',
      image: '/project1.png', // PrepWise AI Interview Practice platform image
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveLink: 'https://ai-assistance-interview-6454.vercel.app',
      githubLink: 'https://github.com/awalahimed/ai_assistance.git'
    },
    {
      id: 2,
      title: 'Video Learning Platform',
      description: 'This platform is designed to simplify and enhance the learning process by offering only educational video content ',
      image: '/project2.png',
      technologies: ['Html/Css','  ', 'Php',' ', 'Mysql'],
      liveLink: 'https://chatnibss.ct.ws/index.php',
      githubLink: 'https://github.com/yourusername/project2'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Mobile-responsive dashboard with data visualization',
      image: '/project3.jpg',
      technologies: ['React', 'D3.js', 'Firebase'],
      liveLink: 'https://chatnib.free.nf',
      githubLink: 'https://github.com/yourusername/project3'
    },
    {
      id: 4,
      title: 'Project four',
      description: 'Mobile-responsive dashboard with data visualization',
      image: '/project4.jpg',
      technologies: ['React', 'D3.js', 'Firebase'],
      liveLink: 'https://project3.com',
      githubLink: 'https://github.com/yourusername/project4'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-description">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live">
                    Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;