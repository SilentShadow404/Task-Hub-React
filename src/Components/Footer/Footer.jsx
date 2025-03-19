import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Task Hub</h3>
          <p>&copy; {new Date().getFullYear()} Task Hub. All Rights Reserved.</p>
        </div>

        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>

        <div className="footer-social">
          <a href="#" target="_blank" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" target="_blank" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" target="_blank" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#" target="_blank" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
