function TaskForm({ newTask, setNewTask, addTask }) {
  return (
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
  );
}

export default TaskForm;
