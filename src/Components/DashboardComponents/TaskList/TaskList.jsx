import "./TaskList.css";
import TaskItem from "../TaskItem/TaskItem";
const TaskList = ({ tasks, deleteTask, toggleComplete, markInProgress, setTaskToEdit }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            markInProgress={markInProgress}
            setTaskToEdit={setTaskToEdit}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
