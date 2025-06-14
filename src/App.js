import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './TechEvents.css'; 

function Home() {
  return (
    <div className="App">
      <img
        src="https://res.cloudinary.com/dniwxjvdv/image/upload/v1749722104/ssc1_aaswfa.jpg"
        alt="SSC Logo"
        style={{ width: '150px' }}
      />
      <h1>Welcome to Student Service Community (SSC)</h1>
      <p>Empowering students through service, education, and opportunities.</p>
      <div className="mission-vision-section">
  <div className="card mission-card">
    <h3>Our Mission</h3>
    <p>
      To provide comprehensive educational support, technical guidance, and social service opportunities that empower students to excel in their careers and contribute to society.
    </p>
  </div>
  <div className="card vision-card">
    <h3>Our Vision</h3>
    <p>
      Creating a vibrant community where students can access quality education, develop technical skills, and engage in meaningful social service initiatives.
    </p>
  </div>
</div>

      <div className="cta-buttons">
        <Link to="/join"><button>Join SSC</button></Link>
        <Link to="/services"><button>Explore Services</button></Link>
        <Link to="/educational-services"><button>Educational Services</button></Link>
      </div>
    </div>
  );
}
const TechEvents = () => {
  return (
    <div className="tech-events-section">
      <h2 className="gradient-heading">✨ Tech Events & Industry Exposure</h2>
      <div className="events-grid">
        <div className="event-card">
          <h3>👩‍💻 Microsoft Visits & GDG Events</h3>
          <p>
            Stay updated with registrations for Microsoft and Google Developer Group (GDG) events.
            Learn from the experiences of previous participants and gain valuable industry exposure.
          </p>
        </div>
        <div className="event-card">
          <h3>🎓 Workshops & Seminars</h3>
          <p>
            Attend guest lectures, hands-on bootcamps, and insightful seminars conducted by industry
            experts to sharpen your technical and professional skills.
          </p>
        </div>
      </div>
    </div>
  );
};

function JoinSSC() {
const [formData, setFormData] = useState({
name: '',
email: '',
department: '',
year: '',
});
const [submitted, setSubmitted] = useState(false);
const navigate = useNavigate(); // Hook to navigate

const handleChange = (e) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
e.preventDefault();
setSubmitted(true);
console.log('Form Data:', formData);
};

return (
<div className="join-ssc-page">
<h2>Join the Student Service Community (SSC)</h2>
<p>Be part of a student-powered platform that uplifts and empowers!</p>


  {submitted ? (
    <div>
      <h3>🎉 Thank you, {formData.name}! You’ve successfully joined SSC.</h3>
    </div>
  ) : (
    <form className="join-form" onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Your Name" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Your Email" onChange={handleChange} required />
      <input name="department" type="text" placeholder="Department" onChange={handleChange} required />
      <input name="year" type="text" placeholder="Year of Study" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  )}

  <div style={{ marginTop: '30px' }}>
    <h4>🌟 Perks of Joining:</h4>
    <ul>
      <li>Workshops, hackathons & tech bootcamps</li>
      <li>Peer mentorship and leadership opportunities</li>
      <li>Certificate & recognition for active students</li>
    </ul>
  </div>

  {/* Back to Home button */}
  <div className="cta-buttons" style={{ marginTop: '30px' }}>
  <button onClick={() => navigate('/')}>Back to Home</button>
</div>
</div>
);
}
function ExploreServices() {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      <h2>What SSC Community Offers</h2>

      <section>
        <h3>🔧 Technical Clubs</h3>
        <ul>
          <li>Web Dev, React, Backend, Node</li>
          <li>AI, Python, Data Science</li>
          <li>Cloud Computing, GitHub</li>
        </ul>
      </section>

      <section>
        <h3>📚 Knowledge Sharing</h3>
        <ul>
          <li>Weekly coding sessions</li>
          <li>Mini projects & peer review</li>
          <li>Senior mentoring</li>
        </ul>
      </section>

      <section>
        <h3>🎯 Events & Recognition</h3>
        <ul>
          <li>Internship Drives</li>
          <li>Student Spotlight Features</li>
          <li>Hackathons & Certifications</li>
        </ul>
      </section>

      <section>
        <h3>🧩 Fun & Creativity</h3>
        <ul>
          <li>Poster design contests</li>
          <li>Cultural celebrations</li>
          <li>Bonding & team events</li>
        </ul>
      </section>

      {/* Back to Home Button */}
      <div className="cta-buttons" style={{ textAlign: 'center', marginTop: '30px' }}>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    </div>
  );
}

function EducationalServices() {
return (
<div className="services-page">
<h2>📘 Explore Our Educational Services</h2>


  {/* Hackathon Guidance Section */}
  <section className="service-section">
    <h3>🚀 Hackathon Guidance</h3>
    <p>
      Learn how to conquer hackathons with expert-curated tips and tricks! Find the right teammates, refine your ideas, and stay ahead with alerts on <strong>upcoming competitions</strong>.
    </p>
    <ul>
      <li>💡 Idea brainstorming techniques</li>
      <li>🧠 Problem-solving workshops</li>
      <li>📅 Calendar of upcoming events</li>
    </ul>
  </section>

  {/* Career Development Section */}
  <section className="service-section">
    <h3>🎯 Career Development</h3>
    <p>
      Our platform supports your professional growth with resources like <strong>resume templates</strong>, <strong>mock interviews</strong>, and real-time <strong>internship/job updates</strong>.
    </p>
    <ul>
      <li>📄 Resume review and templates</li>
      <li>🎤 Interview preparation guides</li>
      <li>📢 Job and internship notifications</li>
    </ul>
  </section>

  {/* Tech Learning Section */}
  <section className="service-section">
    <h3>💻 Tech Guidance</h3>
    <p>
      Dive into clear and structured <strong>learning paths</strong> that help you build real-world skills across multiple domains.
    </p>
    <ul>
      <li>🧑‍💻 Programming: Python, Java, C, C++</li>
      <li>📊 Tools: Data Analytics, Power BI, SQL</li>
      <li>🌐 Tracks: Frontend, Backend, Full Stack Development</li>
    </ul>
  </section>

  <div className="cta-buttons" style={{ textAlign: 'center', marginTop: '30px' }}>
    <button onClick={() => window.location.href = '/join'}>Join SSC Now</button>
    <button onClick={() => window.location.href = '/'} style={{ marginLeft: '10px' }}>Back to Home</button>
  </div>
</div>
);
}




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<JoinSSC />} />
        <Route path="/services" element={<ExploreServices />} />
        <Route path="/educational-services" element={<EducationalServices />} />
      </Routes>
    </Router>
  );
}

export default App;
