import React from "react";
import { Link } from "react-router-dom";
import "./AuthSection.css";

const AuthSection = () => {
  return (
    <section className="auth-section">
      <div className="auth-container">
        <div className="auth-box signin-box">
          <h2>Welcome Back!</h2>
          <p>Sign in to access your personalized task manager and boost your productivity.</p>
          <ul>
            <li>✔️ Track & manage your tasks</li>
            <li>✔️ Get real-time productivity insights</li>
            <li>✔️ Stay on top of deadlines</li>
          </ul>
          <Link to="/login">
            <button className="auth-btn">Sign In</button>
          </Link>
        </div>

        <div className="divider"></div>

        <div className="auth-box signup-box">
          <h2>New Here? Create an Account</h2>
          <p>Join Task Hub and take control of your workflow with smart task tracking.</p>
          <ul>
            <li>🚀 Easy-to-use interface</li>
            <li>📊 Visual progress tracking</li>
            <li>🔔 Smart notifications & reminders</li>
          </ul>
          <Link to="/signup">
            <button className="auth-btn">Sign Up</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;
