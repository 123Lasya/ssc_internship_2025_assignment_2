import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import EducationalServices from './components/EducationalServices';
import TechExploration from './components/TechExploration';
import TechEvents from './components/TechEvents';
import SocialInitiatives from './components/SocialInitiatives';
import Navbar from './components/Navbar';

// ------------------ Home Component ------------------
function Home() {
  return (
    <div id="home" className="App">
      <img
        src="https://res.cloudinary.com/dniwxjvdv/image/upload/v1749722104/ssc1_aaswfa.jpg"
        alt="SSC Logo"
        style={{ width: '150px' }}
      />
      <h1 style={{ color: 'white' }}>Welcome to Student Service Community (SSC)</h1>
      <p style={{ color: 'darkgoldenrod' }}>
        Empowering students through service, education, and opportunities.
      </p>

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
      </div>
    </div>
  );
}

// ------------------ Join SSC Page ------------------
function JoinSSC() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    year: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

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

      <div className="cta-buttons" style={{ marginTop: '30px' }}>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    </div>
  );
}

// ------------------ Explore Services Page ------------------
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

      <div className="cta-buttons" style={{ textAlign: 'center', marginTop: '30px' }}>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    </div>
  );
}

// ------------------ App Content ------------------
function ScrollableSections() {
  return (
    <>
      <div id="home"><Home /></div>
      <div id="education"><EducationalServices /></div>
      <div id="tech"><TechExploration /></div>
      <div id="events"><TechEvents /></div>
      <div id="social"><SocialInitiatives /></div>
    </>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/join" element={<JoinSSC />} />
        <Route path="/services" element={<ExploreServices />} />
      </Routes>

      {location.pathname === '/' && <ScrollableSections />}
    </>
  );
}

// ------------------ App Wrapper ------------------
function App() {
  return (
    <Router>
      <Navbar />
      <AppContent />
    </Router>
  );
}

export default App;
