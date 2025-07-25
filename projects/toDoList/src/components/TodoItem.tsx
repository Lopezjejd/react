import type { Todo } from "../types/todo"

type TodoItemProps = {
  todo: Todo;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

export function TodoItem({ todo, deleteTodo, toggleTodo }: TodoItemProps) {
  return (
    <div className="todo-item">
      {/* toggleTodo necesita el id de la tarea */}
      <input
        type="checkbox"
        checked={todo.completed}//modificamos el estado del checkbox
        onChange={() => toggleTodo(todo.id)} // 👈 le pasamos el id
      />
      <span>{todo.title}</span>

      {/* deleteTodo también necesita el id */}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}