import type { Todo } from "../types/todo"
import { TodoItem } from "./TodoItem"

type Props = {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

export function TodoList({ todos,deleteTodo,toggleTodo }: Props) {
  return (
    <ul className="todo-ul">
      {todos.map(todo => (
        <li  className="todo-list" key={todo.id}>
          <TodoItem todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}  /> {/* Componente para cada tarea */}
        </li>
      ))}
    </ul>
  )
}
