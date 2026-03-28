import { useState, useRef } from 'react';

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const inputRef = useRef(null);

  const addTask = () => {
    if (!title.trim()) return;   // don't add empty tasks
    onAdd(title);
    setTitle('');                // clear input after adding
    inputRef.current?.focus();   // keep focus for adding another
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        ref={inputRef}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        className="task-input"
      />
      <button type="submit" className="add-btn">Add Task</button>
      <button type="button" className="add-btn" onClick={addTask}>
        Add Another
      </button>
    </form>
  );
}

export default TaskForm;