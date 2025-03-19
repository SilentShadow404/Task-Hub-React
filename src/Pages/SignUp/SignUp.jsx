import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((user) => user.email === email)) {
      setError("Email already registered");
      return;
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login");
  };

  return (
    <div className="signup-page">
      <div className="signup-info">
        <h1>Welcome to Task Hub</h1>
        <p>
          Your personal **AI-powered task manager** designed to help you **stay
          productive** and **organized**. 
        </p>

        <h2> Why Join Task Hub?</h2>
        <ul>
          <li>✅ Track tasks and habits with ease</li>
          <li>✅ Stay focused with AI-driven insights</li>
          <li>✅ Sync your data securely across devices</li>
          <li>✅ Set reminders and never miss a deadline</li>
          <li>✅ Earn productivity streaks and rewards</li>
        </ul>

        <div className="testimonial">
          <p>
            ⭐ **"Task Hub transformed the way I manage my day. It’s my ultimate
            productivity partner!"**
          </p>
          <span>— John Doe, Productivity Expert</span>
        </div>

        <p className="cta">
          **Join thousands of users today!** Sign up and take control of your
          productivity.
        </p>
      </div>

      <div className="signup-form-container">
        <h2>Create an Account</h2>
        <p className="subtext">
          Start your journey towards better productivity!
        </p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
