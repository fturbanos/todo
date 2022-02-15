import React from "react";

const Todo = ({ todo, index, removeTask, setTask }) => {
  return (
    <div className="todo">
      <span className={todo.complete ? "strike" : ""}>{todo.task}</span>
      <div className="controls">
        <span className="doneTask" onClick={() => setTask(index)}>
          ✓
        </span>
        <span className="removeTask" onClick={() => removeTask(index)}>
          ✕
        </span>
      </div>
    </div>
  );
};

export default Todo;
