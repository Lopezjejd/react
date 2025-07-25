import { useEffect,useState } from "react";
import type { Todo } from "../types/todo";

// Hook para manejar las tareas

export function useTodos() { //usamos use para indicar que es un hook
  const [todos, setTodos] = useState<Todo[]>(()=>{
    const stored = localStorage.getItem('todos')
    return stored ? JSON.parse(stored) : [] // si hay tareas guardadas, las devuelve, si no, devuelve un array vacio
  })//creamos un estado de tareas con un array vacio
  //pero espesificamos que vbamos a usar un array de tipo Todo 


  // Guardar tareas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    console.log('Tareas guardadas en localStorage:', todos)
  }, [todos])//si el estado se modifica, se guarda en localStorage

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo]) // como no se puede usar push en un estado, se crea un nuevo array
    // modificamos el estado poniendo una copia del array anterior y agregando el nuevo todo
  }

  const toggleTodo = (id: string) => {
    setTodos(prev => //utilizamos el estado anterior para no perder los datos
      prev.map(todo => // recorremos el array de tareas y modificamos la tarea que coincide con el id
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return { todos, addTodo, toggleTodo, deleteTodo }
}
