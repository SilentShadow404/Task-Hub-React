import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <Link to="/" className="logo">TASK HUB</Link>

      <nav className="nav-container">
        <ul className="nav-links">
          <a onClick={() => scrollToSection("info")}>Info</a>
          <a onClick={() => scrollToSection("feature")}>Feature</a>
          <a onClick={() => scrollToSection("auth")}>Get Started</a>
        </ul>

        <div className="auth-buttons">
          <Link to="/login" className="btn btn-signin">Sign In</Link>
          <Link to="/signup" className="btn btn-signup">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
