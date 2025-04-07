import React, { useState } from "react";
import "./header.css";
import logo from "./assets/LOOGO.png";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/public" id="navbar-logo">
          <img src={logo} alt="Keepers Edge Logo" />
        </a>
        <div
          className={`navbar-toggle ${isMobile ? "is-active" : ""}`}
          id="mobile-menu"
          aria-label="Toggle navigation"
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar-menu ${isMobile ? "active" : ""}`}>
          <li className="navbar-item">
            <a href="/public" className="navbar-links">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/about-us" className="navbar-links">
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="/bookings" className="navbar-links">
              Bookings
            </a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-links">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
