
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

import { useTodos } from './hooks/useTodos'
import './App.css'

function App() {
const {todos,addTodo, toggleTodo, deleteTodo } = useTodos() // usamos el hook para manejar las tareas

  return (
    <>
    <div className='app'>
      <h1>List of tasks</h1>
      <TodoForm onAddTodo={addTodo}></TodoForm>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoList>
    </div>
  
    </>
  )
}

export default App
