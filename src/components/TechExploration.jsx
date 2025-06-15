import React from 'react';
import './TechExploration.css';

const technologies = [
  'Python', 'Java', 'C/C++', 'Data Analytics',
  'Power BI', 'SQL', 'Frontend Dev',
  'Backend Dev', 'Full Stack'
];

function TechExploration() {
  return (
    <div className="tech-exploration-container">
      <h2 className="tech-heading">Technologies We Cover</h2>
      <p className="tech-description">
       Choose your path and unlock your potential with real-world skills that employers are looking for in today's tech-driven world.
      </p><br></br>
      <div className="tech-tags">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>

    
      
    </div>
  );
}

export default TechExploration;

