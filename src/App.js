import React, { useState } from "react";
import data from "./data.json";
import Todo from "./components/Todo";
import FormTodo from "./components/FormTodo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(data);

  const addTodo = (task) => {
    const newTodos = [...todos, { task }];
    setTodos(newTodos);
  };

  const removeTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const setTask = (index) => {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <FormTodo addTodo={addTodo} />
      <div>
        {todos.map((todo, index) => (
          <Todo index={index} todo={todo} removeTask={removeTask} setTask={setTask} />
        ))}
      </div>
    </div>
  );
}

export default App;
