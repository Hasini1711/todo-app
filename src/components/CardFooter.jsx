export default function CardFooter({ totalTasks, clearCompleted }) {
  return (
    <footer className="card-footer">
      <span>{totalTasks} total tasks</span>
      <button type="button" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
