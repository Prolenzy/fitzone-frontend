import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css"; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Address */}
        <div className="footer-section">
          <h2 className="footer-title">FitZone Gym</h2>
          <p className="footer-text">
            123 Nairobi Street, Kenya <br />
            Phone: +254 700 000 000 <br />
            Email: info@fitzonegym.com
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Follow Us</h3>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} FitZone Gym. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
