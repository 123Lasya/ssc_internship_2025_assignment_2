import React from 'react';
import './EducationalServices.css';

function EducationalServices() {
  return (
    <div className="educational-section">
      <h2 className="section-title">Educational Services</h2>
      <p className="section-subtitle">
        Comprehensive learning support designed to accelerate your academic and professional growth
      </p>
      <div className="card-container">
        <div className="service-card">
          <div className="icon">💻</div>
          <h3>Hackathon Guidance</h3>
          <p>Get expert tips, resources, and guidance for upcoming hackathons and coding competitions.</p>
          <ul>
            <li>Competition Strategies</li>
            <li>Team Building</li>
            <li>Project Ideas</li>
            <li>Resource Library</li>
          </ul>
        </div>
        <div className="service-card">
          <div className="icon">🧳</div>
          <h3>Career Development</h3>
          <p>Comprehensive career support from resume building to interview preparation and job opportunities.</p>
          <ul>
            <li>Resume Building</li>
            <li>Interview Prep</li>
            <li>Job Opportunities</li>
            <li>Industry Insights</li>
          </ul>
        </div>
        <div className="service-card">
          <div className="icon">📘</div>
          <h3>Tech Guidance</h3>
          <p>Learn cutting-edge technologies with expert mentorship across multiple domains.</p>
          <ul>
            <li>Programming Languages</li>
            <li>Data Analytics</li>
            <li>Web Development</li>
            <li>Database Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EducationalServices;
