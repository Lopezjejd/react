import { useState, useReducer } from 'react';
import './App.css'

const initialState = [];

function App() {
  function miReducer(state, action) {
    const newTask = {
      id: state.length + 1,//crear un id unico
      description: '',
    }

    switch (action.type) {
      case 'ADD_TASK':
        return [...state, {...newTask, description: action.payload}];
      case 'REMOVE_TASK':
        return    state.filter(task => task.id !== action.payload);
      default:
        return state;
    }
  }

  const [tasks, dispatch] = useReducer(miReducer, initialState);
  const [tarea, setTarea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarea.trim()) {
      dispatch({type: "ADD_TASK", payload: tarea});
      setTarea("");
    }
  }

  return (
    <>
      <main>
        <h1>Lista de tareas</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
            type="text" 
            placeholder="Nueva tarea"
          />
          <button type="submit">Agregar</button>
        </form>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.description}
           <button onClick={()=>dispatch({type:'REMOVE_TASK',payload:task.id})}>
            Delete</button> 
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default App