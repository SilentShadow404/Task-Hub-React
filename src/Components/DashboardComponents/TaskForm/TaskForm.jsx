import { useState, useEffect } from "react";
import "./TaskForm.css";

const TaskForm = ({ addTask, editTask, taskToEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setPriority(taskToEdit.priority);
      setDeadline(taskToEdit.deadline);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert("Task title is required!");

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      deadline,
      completed: false,
    };

    if (taskToEdit) {
      editTask({ ...taskToEdit, ...newTask });
    } else {
      addTask(newTask);
    }

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDeadline("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description (Optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High"> High Priority</option>
        <option value="Medium"> Medium Priority</option>
        <option value="Low"> Low Priority</option>
      </select>
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />
      <button type="submit">{taskToEdit ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
