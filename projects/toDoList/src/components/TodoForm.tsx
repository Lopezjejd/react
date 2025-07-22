import React from 'react';

type TodoFormProps = {
  onAddTodo: (title: string) => void;//declaramos el aprametro que recibe la funcion
};

export function TodoForm({ onAddTodo }: TodoFormProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();                  // Evita recargar la página
    const input = e.currentTarget.elements.namedItem('title') as HTMLInputElement;//as para indicar que es un input
    //y no un elemento generico esto es necesario para que typescript no marque error al usar value
    const title = input.value.trim();    // Quita espacios al inicio y final
    if (!title) return;                  // Si está vacío, no hace nada
    onAddTodo(title);                    // Llama a la función que recibe
    input.value = '';                    // Limpia el campo
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Add a new task"
        maxLength={120}
      />
      <button type="submit">Add</button>
    </form>
  );
}