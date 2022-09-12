import { useState } from "react";

export default function Todo({ todo, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }


  function FormEdit() {

    const [newValue, setNewValue] = useState(todo.title);

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClickUpdateTodo(e) {
      e.preventDefault();
      onUpdate(todo.id, newValue);
      setIsEdit(false);
    }

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input type='text'
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button" onClick={handleClickUpdateTodo}>Update</button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        <p>{todo.title}</p>
        <button onClick={() => setIsEdit(true)}>Editar</button>
        <button onClick={(e) => onDelete(todo.id) }>Eliminar</button>
      </div>
    )
  }

  return (
    <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>
  );
}