import React from "react";
import "./DashboardHome.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaPlus,
  FaChartLine,
  FaClipboardList,
} from "react-icons/fa";

const DashboardHome = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const savedTasks =
        JSON.parse(localStorage.getItem(`tasks_${loggedInUser}`)) || [];
      setTasks(savedTasks);
    }
  }, []);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter(
    (task) => !task.completed && !task.inProgress
  ).length;
  const inProgress = tasks.filter((task) => task.inProgress).length;
  const completionRate =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  return (
    <div className="dashboard-home">
      <header className="dashboard-header">
        <h1>Welcome to Task Hub 🎯</h1>
        <p>Your personal productivity companion – stay focused, stay ahead!</p>
      </header>
      <section className="task-summary">
        <h2> Task Overview</h2>
        <div className="summary-container">
          <div className="summary-card total">
            <FaTasks className="summary-icon" />
            <h3>Total Tasks</h3>
            <p>{totalTasks}</p>
            <span> Keep pushing forward!</span>
          </div>
          <div className="summary-card completed">
            <FaCheckCircle className="summary-icon" />
            <h3>Completed Tasks</h3>
            <p>{completedTasks}</p>
            <span> Great job! Keep the momentum.</span>
          </div>
          <div className="summary-card pending">
            <FaClock className="summary-icon" />
            <h3>In Progress Tasks</h3>
            <p>{inProgress}</p>
            <span> Stay focused and finish strong.</span>
          </div>
          <div className="summary-card overdue">
            <FaExclamationTriangle className="summary-icon overdue-icon" />
            <h3>Pending Tasks</h3>
            <p>{pendingTasks}</p>
            <span>Let's clear them today!</span>
          </div>
        </div>
      </section>

      <section className="quick-actions">
        <h2> Quick Actions</h2>
        <div className="action-buttons">
          <button className="action-btn" onClick={() => navigate("/tasks")}>
            <FaPlus /> Add New Task
          </button>
          <button className="action-btn" onClick={() => navigate("/tasks")}>
            <FaClipboardList /> View All Tasks
          </button>
          <button className="action-btn">
            <FaChartLine /> Start Focus Session
          </button>
        </div>
      </section>

      <section className="productivity-insights">
        <h2>Productivity Insights</h2>
        <p>
          You're completing <strong>{completionRate}%</strong> of your tasks.
          Keep up the great work!
        </p>
        <p>
          <em>Pro Tip:</em> Try setting a deadline for each task to boost
          efficiency.
        </p>
      </section>

      <section className="motivation">
        <h2> Stay Motivated</h2>
        <p>
          “Success is the sum of small efforts, repeated day in and day out.” –
          Robert Collier
        </p>
      </section>
    </div>
  );
};

export default DashboardHome;
