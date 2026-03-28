function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task._id)}
        className="task-checkbox"
      />
      <span className="task-title">{task.title}</span>
      <button
        onClick={() => onDelete(task._id)}
        className="delete-btn"
      >
        🗑
      </button>
    </li>
  );
}

export default TaskItem;