import React, { useState } from "react";
import TodosSimple from "./TodosSimple";
import { Link } from "react-router-dom";

function TodosSmart() {
  const [todos, setTodos] = useState([
    { id: "1", title: "1", isComplete: false },
    { id: "2", title: "2", isComplete: false } 
  ]);

  function handleSubmit(todo) {
    setTodos([...todos, todo]);
  }

  return (
    <>
      <h2>Todos</h2>
      <Link className="btn btn-primary" to="/todo">
        Add
      </Link>
      <TodosSimple todos={todos} onSubmit={handleSubmit} />
    </>
  );
}

export default TodosSmart;
