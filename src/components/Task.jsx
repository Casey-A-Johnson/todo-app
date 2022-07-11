import React, { useState } from "react";

const Task = (props) => {
  const [done, setDone] = useState(false);

  const { todo, handleDelete } = props;

  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className="todoItem"
    >
      <p
        style={
          done ? { textDecoration: "line-through" } : { textDecoration: "none" }
        }
      >
        {todo}
      </p>
      <input
        type="checkbox"
        onChange={(e) => setDone(e.target.checked)}
        checked={done}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
