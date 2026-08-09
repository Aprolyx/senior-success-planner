import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Contact from './components/Contact';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

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
    <HashRouter>
      <div className="App">

        <Header />

        <Routes>

          <Route
            path="/"
            element={<Navigate to="/todos" replace />}
          />

          <Route
            path="/todos"
            element={
              <main>
                <h2>Senior Year Checklist</h2>

                <p>
                  Stay organized and keep track of your college and graduation tasks.
                </p>

                <p className="task-progress">
                  {tasks.filter(function(task) {
                    return task.completed;
                  }).length} of {tasks.length} tasks completed
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

                {/* Senior Year Tips */}
                <section className="senior-tips">
                  <h3>Senior Year Tips</h3>

                  <p>
                    Stay ahead of important deadlines throughout your senior year.
                  </p>

                  <div className="tips-container">

                    <div className="tip-card">
                      <h4>College Applications</h4>
                      <p>
                        Keep track of application requirements and important deadlines.
                      </p>
                    </div>

                    <div className="tip-card">
                      <h4>Financial Aid</h4>
                      <p>
                        Complete your FAFSA or CADAA and check for any additional requirements.
                      </p>
                    </div>

                    <div className="tip-card">
                      <h4>Scholarships</h4>
                      <p>
                        Search and apply for scholarships throughout your senior year.
                      </p>
                    </div>

                    <div className="tip-card">
                      <h4>Graduation</h4>
                      <p>
                        Check in with your counselor to make sure you are on track to graduate.
                      </p>
                    </div>

                  </div>
                </section>

              </main>
            }
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

      </div>
    </HashRouter>
  );
}

export default App;