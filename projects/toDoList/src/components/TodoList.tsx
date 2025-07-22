import type { Todo } from "../types/todo"
import { TodoItem } from "./TodoItem"
type Props = {
  todos: Todo[]
}

export function TodoList({ todos }: Props) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoItem todo={todo} /> {/* Componente para cada tarea */}
        </li>
      ))}
    </ul>
  )
}
