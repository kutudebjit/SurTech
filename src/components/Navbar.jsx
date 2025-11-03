import React, { useState } from "react";
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar sticky-top">
      <div className="nav-container">
        <div className="logo">
          <a href="https://www.aicte.gov.in/">
            <img
              src="src\assets\AICTE_logo.jpeg"
              alt="AICTE_Logo"
              className="logo-img"
            />
          </a>
          <img
            src="src\assets\DTDCFAC 2025 logo.png"
            alt="DTDCFAC_Logo"
            className="logo-img"
          />
          <a href="https://www.jisgroup.org/">
            <img
              src="src\assets\images.png"
              alt="JIS_Logo"
              className="logo-img"
            />
          </a>
          <a href="https://www.surtech.edu.in/">
            <img
              src="src\assets\SurTech_Logo.png"
              alt="SurTech_Logo"
              className="logo-img"
            />
          </a>
        </div>

        {/* Hamburger icon */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <div className={isOpen ? "bar rotate1" : "bar"}></div>
          <div className={isOpen ? "bar fade" : "bar"}></div>
          <div className={isOpen ? "bar rotate2" : "bar"}></div>
        </div>

        {/* Nav Links */}
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#organizingbody" onClick={() => setIsOpen(false)}>
              Organizing Body
            </a>
          </li>
          <li>
            <a href="#papersubmission" onClick={() => setIsOpen(false)}>
              Paper Submission
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setIsOpen(false)}>
              Paper Registration
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setIsOpen(false)}>
              Conference Tracks
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
