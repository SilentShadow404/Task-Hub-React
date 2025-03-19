import { useState, useEffect } from "react";
import "./TasksPage.css";
import TaskForm from "../../../../Components/DashboardComponents/TaskForm/TaskForm";
import TaskList from "../../../../Components/DashboardComponents/TaskList/TaskList";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const savedTasks =
        JSON.parse(localStorage.getItem(`tasks_${loggedInUser}`)) || [];
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      if (tasks.length > 0) {
        localStorage.setItem(`tasks_${loggedInUser}`, JSON.stringify(tasks));
      }
    }
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, completed: false, inProgress: false }]);
  };

  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setTaskToEdit(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed, inProgress: false }
        : task
    );
    setTasks(updatedTasks);
    localStorage.setItem(`tasks_${loggedInUser}`, JSON.stringify(updatedTasks));
  };

  const markInProgress = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, inProgress: true, completed: false } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem(`tasks_${loggedInUser}`, JSON.stringify(updatedTasks));
  };

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((task) => {
      if (filter === "All") return true;
      if (filter === "Pending") return !task.completed && !task.inProgress;
      if (filter === "In Progress") return task.inProgress;
      if (filter === "Completed") return task.completed;
      return true;
    });

  return (
    <div className="tasks-page">
      <h2>Manage Your Tasks</h2>

      <div className="task-controls">
        <input
          type="text"
          placeholder="Search Tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        markInProgress={markInProgress}
        setTaskToEdit={setTaskToEdit}
      />
    </div>
  );
};

export default TasksPage;
