import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Digital exit management system',
      description: 'this is a digital exit managment  system for students to manage their leave request ,to approve and track their leave status in real time through online',
      image: '/leave.png',
      technologies: ['html', 'js','css and bootstrap', 'mysql'],
      liveLink: 'https://',
      githubLink: 'https://github.com/awalahimed/dg-exit-system.git'
    
    },
    {
      id: 2,
      title: 'Video Learning Platform',
      description: 'This platform is designed to simplify and enhance the learning process by offering only educational video content ',
      image: '/project2.png',
      technologies: ['Html/Css','  ', 'Php',' ', 'Mysql'],
      liveLink: 'https://chatnibss.ct.ws/index.php',
      githubLink: 'https://github.com/awalahimed/video-learning-platform.git'
    },
    {
      id: 3,
        title: 'Interview practice platform',
      description: 'this is a platform that helps students to practice their interview skills by providing them with AI-generated questions and answers',
      image: '/project1.png', // PrepWise AI Interview Practice platform image
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveLink: 'https://ai-assistance-interview-6454.vercel.app',
      githubLink: 'https://github.com/awalahimed/ai_assistance.git'
      
    },
    {
      id: 4,
      title: 'Student discussion chat app',
      description: 'this is a chat app for students to discuss their projects,assignment and share ideas with out internet',
      image: '/chat1.png',
      technologies: ['html', 'css and bootstrap','js', 'mysql'],
      liveLink: 'https://chatnib.free.nf',
      githubLink: 'https://github.com/awalahimed/chat.git'
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
