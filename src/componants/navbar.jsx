 // src/Navbar.js
import React, { useState } from 'react';
import './navbar.css'; // Import the CSS for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div >
        <img className="logo" src="./src/assets/logo.png" alt="Logo" />
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#blog">Blog</a>
        <a href="#places">Places</a>
        <a href="#about-us">About Us</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
