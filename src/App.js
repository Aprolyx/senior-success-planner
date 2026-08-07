import { useState } from 'react';
import './App.css';

function App() {

  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
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

  function toggleTask(id) {
    setTasks(
      tasks.map(function(task) {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        }

        return task;
      })
    );
  }

  function deleteTask(id) {
  setTasks(
    tasks.filter(function(task) {
      return task.id !== id;
    })
  );
}
const filteredTasks = tasks.filter(function(task) {
  if (filter === 'completed') {
    return task.completed;
  }

  if (filter === 'incomplete') {
    return !task.completed;
  }

  return true;
});

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
        {/* Task Filters */}
<div>
  <button onClick={() => setFilter('all')}>
    All
  </button>

  <button onClick={() => setFilter('completed')}>
    Completed
  </button>

  <button onClick={() => setFilter('incomplete')}>
    Incomplete
  </button>
</div>

        {/* Task List */}
        <div>
          {filteredTasks.map(function(task) {
            return (
              <div key={task.id}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />

                <p>{task.text}</p>
                <button onClick={() => deleteTask(task.id)}>
                  Delete
</button>
              </div>
            );
          })}
        </div>

      </main>

    </div>
  );
}

export default App;
