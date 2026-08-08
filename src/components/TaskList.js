function TaskList({ filteredTasks, toggleTask, deleteTask }) {
  return (
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
  );
}

export default TaskList;
