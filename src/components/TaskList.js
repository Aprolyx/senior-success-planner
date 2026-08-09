function TaskList({ filteredTasks, toggleTask, deleteTask }) {
  return (
    <div>

      {filteredTasks.length === 0 && (
        <p className="empty-message">
          No tasks to show. Add a senior year task above!
        </p>
      )}

      {filteredTasks.map(function(task) {
        return (
          <div key={task.id} className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />

            <p className={task.completed ? 'completed' : ''}>
              {task.text}
            </p>

            <button onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        );
      })}

    </div>
  );
}

export default TaskList;