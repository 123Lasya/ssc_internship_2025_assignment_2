import React, { useState } from 'react';
import './RegisterForm.css';

function RegisterForm({ onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for registering, ${formData.name}!`);
    onClose();
  };

  return (
    <div className="form-overlay">
      <div className="form-popup">
        <h3>Event Registration</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            placeholder="Your Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
