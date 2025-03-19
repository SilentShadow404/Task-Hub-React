import "./TaskItem.css";

const TaskItem = ({ task, deleteTask, toggleComplete, markInProgress, setTaskToEdit }) => {
  return (
    <div className={`task-item ${task.completed ? "task-completed" : ""}`}>
      <div className="task-details">
        <h3 className="task-title">{task.title}</h3>
        <p className="task-meta">{task.description}</p>
        <p className={`priority-${task.priority.toLowerCase()}`}>{task.priority} Priority</p>
        <p>Deadline: {task.deadline}</p>
        <p>Status: {task.completed ? " Completed" : task.inProgress ? " In Progress" : " Pending"}</p>
      </div>

      <div className="task-actions">
        {!task.completed && !task.inProgress && (
          <button onClick={() => markInProgress(task.id)}>In Progress</button>
        )}

        {!task.completed && <button onClick={() => toggleComplete(task.id)}>Complete</button>}

        <button onClick={() => setTaskToEdit(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
