import { useState } from "react";
import Todo from "./todo";

export default function TodoApp() {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false
    };

    setTodos([...todos, newTodo])

    setTitle('');
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const todo = temp.find(element => element.id === id);
    todo.title = value;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((element) => element.id !== id);
    setTodos(temp);
  }

  return (
    <>
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={title} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create todo"
          className="buttonCreate"
        />
      </form>

      <div className="todosContainer">
        {todos.map((todo, index) =>
          <Todo
            key={index}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete} />
        )}
      </div>
    </>
  );
}
