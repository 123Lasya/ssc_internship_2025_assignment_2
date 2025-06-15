import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TechEvents.css';

function TechEvents() {
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  const handleRegisterClick = (eventName) => {
    setSelectedEvent(eventName);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered successfully for ${selectedEvent} 🎉`);
    setShowForm(false);
  };

  return (
    <div className="tech-events-container">
      <h2 className="events-heading">Tech Events & Industry Exposure</h2>
      <p className="events-subheading">
        Connect with industry leaders and stay updated with the latest technology trends
      </p>

      <div className="events-grid">
        {/* Upcoming Events */}
        <div className="upcoming-events">
          <h3>Upcoming Events</h3>

          <div className="event-card">
            <h4>📅 Microsoft Tech Visit</h4>
            <p className="event-date">January 15, 2024 • Industry Visit</p>
            <p>Exclusive visit to Microsoft offices with hands-on workshops and networking opportunities.</p>
            <button className="register-btn" onClick={() => handleRegisterClick('Microsoft Tech Visit')}>
              Register Now
            </button>
          </div>

          <div className="event-card">
            <h4>👨‍💻 GDG Developer Summit</h4>
            <p className="event-date">February 20, 2024 • Conference</p>
            <p>Google Developer Group summit featuring latest technologies and expert speakers.</p>
            <button className="register-btn" onClick={() => handleRegisterClick('GDG Developer Summit')}>
              Register Now
            </button>
          </div>
        </div>

        {/* Past Experiences */}
        <div className="past-events">
          <h3>Past Experiences</h3>
          <ul className="past-list">
            <li>🟢 AWS Cloud Computing Workshop - 200+ participants</li><br></br>
            <li>🟢 Data Science with Python - 150+ participants</li><br></br>
            <li>🟢 Mobile App Development - 180+ participants</li><br></br>
            <li>🟢 Cybersecurity Fundamentals - 120+ participants</li>
          </ul>

          
        </div>
      </div>

      {/* Registration Form Popup */}
      {showForm && (
        <div className="popup-form">
          <form className="form-box" onSubmit={handleSubmit}>
            <h3>Register for {selectedEvent}</h3>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="close-btn" onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TechEvents;
