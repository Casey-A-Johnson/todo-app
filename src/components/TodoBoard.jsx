import React, { useState } from "react";
import TodoDisplay from "./TodoDisplay";
import TodoList from "./TodoList";

const TodoBoard = () => {
  const [todoList, setTodoList] = useState([]);

  const createTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const updateList = (updatedList) => {
    setTodoList(updatedList);
  };

  return (
    <div>
      <TodoList onNewTodo={createTodo} />
      <TodoDisplay todoList={todoList} onListUpdate={updateList} />
    </div>
  );
};

export default TodoBoard;
