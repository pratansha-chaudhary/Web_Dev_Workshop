import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const API = 'http://localhost:5000/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all tasks when component loads
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API);
      setTasks(res.data);
    } catch (err) {
      console.error('Failed to fetch tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title) => {
    try {
      const res = await axios.post(API, { title });
      setTasks([res.data, ...tasks]);  // add to top of list
    } catch (err) {
      console.error('Failed to add task:', err);
    }
  };

  const toggleTask = async (id) => {
    try {
      const res = await axios.patch(`${API}/${id}`);
      setTasks(tasks.map(task =>
        task._id === id ? res.data : task
      ));
    } catch (err) {
      console.error('Failed to toggle task:', err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      console.error('Failed to delete task:', err);
    }
  };

  return (
    <div className="app">
      <h1>⚡ WebStorm Tasks</h1>
      <TaskForm onAdd={addTask} />
      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      )}
    </div>
  );
}

export default App;