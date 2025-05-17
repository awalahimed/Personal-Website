import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 80 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'TypeScript', level: 70 },
      //  { name: 'Redux', level: 85 }
      ]
    },
    {
      id: 2,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 80 },
      //  { name: 'Python', level: 75 },
        { name: 'SQL', level: 90 },
        { name: 'MongoDB', level: 65 }
      ]
    },
    {
      id: 3,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 75 },
        { name: 'Docker', level: 50 },
        { name: 'AWS', level: 40 },
        { name: 'Jest', level: 30 },
//{ name: 'Webpack', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <p className="section-description">
          Here are my technical skills and proficiency levels in various technologies.
        </p>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;