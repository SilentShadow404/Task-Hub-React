import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find((user) => user.email === email && user.password === password);

    if (!validUser) {
      setError("Invalid email or password");
      return;
    }

    localStorage.setItem("loggedInUser", email);

    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-info">
        <h1>Welcome Back!</h1>
        <p>Login to continue tracking your tasks and habits efficiently.</p>
        <ul>
          <li>📌 Organize your tasks easily</li>
          <li>📊 Track your progress visually</li>
          <li>🔔 Get timely reminders</li>
        </ul>
        <p className="testimonial">
          "This app transformed my productivity!" - Alex R.
        </p>
      </div>

      <div className="login-form-container">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
