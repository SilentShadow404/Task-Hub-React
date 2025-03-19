import React from "react";
import "./FeaturesSection.css";
import { FaCheckCircle, FaChartLine, FaClock, FaUsers, FaTasks, FaShieldAlt } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section className="features">
      <h2 className="features-title">Why Choose Task Hub?</h2>
      <p className="features-subtitle">Boost your productivity with powerful task and habit tracking.</p>

      <div className="features-grid">
        {/* Feature 1 */}
        <div className="feature-card">
          <FaCheckCircle className="feature-icon" />
          <h3>Easy Task Management</h3>
          <p>Organize your tasks efficiently and never miss a deadline.</p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card">
          <FaChartLine className="feature-icon" />
          <h3>Progress Tracking</h3>
          <p>Visualize your daily progress with intuitive charts.</p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card">
          <FaClock className="feature-icon" />
          <h3>Smart Reminders</h3>
          <p>Get timely notifications to stay on top of your tasks.</p>
        </div>

        {/* Feature 4 */}
        <div className="feature-card">
          <FaUsers className="feature-icon" />
          <h3>Collaborate with Teams</h3>
          <p>Work together and assign tasks to team members easily.</p>
        </div>

        {/* Feature 5 */}
        <div className="feature-card">
          <FaTasks className="feature-icon" />
          <h3>Habit Tracking</h3>
          <p>Build better habits with our daily tracking system.</p>
        </div>

        {/* Feature 6 */}
        <div className="feature-card">
          <FaShieldAlt className="feature-icon" />
          <h3>Secure & Private</h3>
          <p>Your data is safe with end-to-end encryption.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
