
import type { Todo } from "../types/todo"
export function TodoItem({ todo }: { todo: Todo }) {

return (
    <div>
      <input type="checkbox" checked={todo.completed} readOnly />
      <span>{todo.title}</span>
        <button>Delete</button>
        <button>Edit</button>
    </div>
  );

    
}