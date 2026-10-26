export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className={task.completed ? "task done" : "task"}>
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <span>{task.title}</span>
      </label>
      <button
        className="delete-button"
        type="button"
        onClick={() => deleteTask(task.id)}
        aria-label={`Delete ${task.title}`}
        title="Delete task"
      >
        ×
      </button>
    </li>
  );
}
