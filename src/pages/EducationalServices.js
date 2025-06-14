import React from 'react';
import './EducationalServices.css'; // optional for custom styling

const EducationalServices = () => {
  return (
    <div className="services-page">
      <h2>Educational Services</h2>

      <section>
        <h3>Hackathon Guidance</h3>
        <ul>
          <li>Tips and tricks for successful participation</li>
          <li>Resources for project building</li>
          <li>Upcoming competitions</li>
        </ul>
      </section>

      <section>
        <h3>Career Development</h3>
        <ul>
          <li>Resume building resources</li>
          <li>Interview preparation tips</li>
          <li>Job and internship opportunities</li>
        </ul>
      </section>

      <section>
        <h3>Tech Guidance</h3>
        <ul>
          <li>Languages: Python, Java, C, C++</li>
          <li>Data Skills: SQL, Power BI, Data Analytics</li>
          <li>Development: Frontend, Backend, Full Stack</li>
        </ul>
      </section>
    </div>
  );
};

export default EducationalServices;
