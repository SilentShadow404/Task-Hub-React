import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import heroImage from "../../assets/hero-image.png"; 

const HeroSection = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Boost Your Productivity with Smart Task & Habit Tracking</h1>
        <p>
          Manage tasks effortlessly, develop positive habits, and track your
          progress—all in one simple yet powerful app. Stay organized, stay
          motivated, and achieve your goals faster.
        </p>
        <p>
          With intuitive design and AI-powered insights, you can supercharge
          your workflow, reduce procrastination, and make every day more
          productive.
        </p>

        <div className="hero-buttons">
          <Link to="/signup" className="btn btn-primary">Get Started for Free</Link>
          <a className="btn btn-secondary" onClick={() => scrollToSection("feature")}>Explore Features</a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <h3>50K+</h3>
            <p>Happy Users</p>
          </div>
          <div className="stat">
            <h3>99.9%</h3>
            <p>Uptime Guarantee</p>
          </div>
          <div className="stat">
            <h3>10M+</h3>
            <p>Tasks Completed</p>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Task Management Preview" />
      </div>
    </section>
  );
};

export default HeroSection;
