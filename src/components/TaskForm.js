function TaskForm({ newTask, setNewTask, addTask }) {
  return (
    <form onSubmit={addTask}>

      <label htmlFor="new-task">
        New Task
      </label>

      <input
        type="text"
        id="new-task"
        placeholder="Add a new task..."
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />

      <button type="submit">
        Add Task
      </button>

    </form>
  );
}

export default TaskForm;
