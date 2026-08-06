import { useState } from 'react';
import './App.css';

function App() {

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask(event) {
    event.preventDefault();

    if (newTask.trim() === '') {
      return;
    }

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: newTask,
        completed: false
      }
    ]);

    setNewTask('');
  }

  return (
    <div className="App">

      {/* Navigation */}
      <header>
        <h1>Senior Success Planner</h1>

        <nav>
          <a href="#">My Tasks</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <h2>Senior Year Checklist</h2>

        <p>
          Stay organized and keep track of your college and graduation tasks.
        </p>

        {/* Add Task Form */}
        <form onSubmit={addTask}>
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />

          <button type="submit">
            Add Task
          </button>
        </form>

{/* Task List */}
<div>
  {tasks.map(function(task) {
    return (
      <div key={task.id}>
        <p>{task.text}</p>
      </div>
    );
  })}
</div>

      </main>

    </div>
  );
}

export default App;
