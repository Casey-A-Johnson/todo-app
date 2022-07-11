import React, { useState } from "react";
import Task from "./Task";

const TodoDisplay = (props) => {
  const handleDelete = (indexToDelete) => {
    const filteredList = props.todoList.filter((e, i) => {
      return i !== indexToDelete;
    });
    props.onListUpdate(filteredList);
  };

  //   const handleChecked = (e, index) => {
  //     const arrayCopy = [...props.todoList];
  //     arrayCopy[index].done = e.target.checked;
  //     props.onListUpdate(arrayCopy);
  //   };

  return (
    <div>
      <h1> Todo List:</h1>
      {props.todoList.map((todo, i) => (
        <Task key={i} todo={todo} handleDelete={() => handleDelete(i)} />
      ))}
    </div>
  );
};

export default TodoDisplay;
