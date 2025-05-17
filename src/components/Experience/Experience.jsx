import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Junior Full Stack Developer',
     // company: 'Tech Solutions Inc.',
      period: 'Jan 2025 - Present',
      description: 'Lead developer for enterprise-level web applications and digital exit system,for my school with my friend.',
      achievements: [
        'This is improved  the problem of my school by 40% through code optimization and implementing caching strategies',

      ]
    },
    {
      id: 2,
      role: 'Back-End Developer',
      //company: 'Digital Innovations Co.',
      period: 'Mar 2024 - Jan 2025',
      description: 'Developed and maintained multiple web applications using html, php, javascript and mysql.',
      achievements: [
        'Built responsive web applications with short time',
        'Reduced database query times by 50% through optimization'
      ]
    },
    {
      id: 3,
      role: 'Front-End Developer',
      company: '',
      period: 'Jun 2023 - Feb 2024',
      description: 'Specialized in creating interactive user interfaces and implementing responsive designs.',
      achievements: [
        'Developed 2+ client websites with modern UI/UX principles',
        'Increased mobile user engagement by 15%'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="role">{exp.role}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="description">{exp.description}</p>
                <ul className="achievements">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;