import React, { useState } from "react";

const TodoList = (props) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewTodo(todo);
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="todo">Todos:</label>
        <input
          type="text"
          name="todo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default TodoList;
