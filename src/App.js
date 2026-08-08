import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
  <BrowserRouter>
    <div className="App">

      <Header />

      <Routes>

        <Route
          path="/todos"
          element={
            <main>
              <h2>Senior Year Checklist</h2>

              <p>
                Stay organized and keep track of your college and graduation tasks.
              </p>

              <TaskForm
                newTask={newTask}
                setNewTask={setNewTask}
                addTask={addTask}
              />

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

              <TaskList
                filteredTasks={filteredTasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            </main>
          }
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </div>
  </BrowserRouter>
);
}
export default App;
