import React from "react";
import "./Navbar.css"; // External CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img
          src="https://res.cloudinary.com/dniwxjvdv/image/upload/v1749722104/ssc1_aaswfa.jpg"
          alt="SSC Logo"
          className="logo-image"
        />
        <span className="logo-text">
          SSC <span>Student Service Community</span>
        </span>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#education">Educational Services</a>
        <a href="#tech">Tech Events</a>
        <a href="#social">Social Service</a>
      </div>
    </nav>
  );
};

export default Navbar;
