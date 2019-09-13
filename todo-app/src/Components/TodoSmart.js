import React, { useEffect, useState } from "react";
import TodoSimple from "./TodoSimple";

function TodoSmart(props) {
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    isComplete: false
  });

  useEffect(() => {
    setTodo(props.todo);
  }, [props.todo]);

  function handleCheck() {
    setTodo({
      ...todo,
      isComplete: !todo.isComplete
    });
  }

  function handleChange({ target }) {
    setTodo({
      ...todo,
      [target.name]: target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(todo);
  }

  return (
    <TodoSimple todo={todo} isAdd={props.isAdd} onCheck={handleCheck} onChange={handleChange} onSubmit={handleSubmit} />
  );
}

export default TodoSmart;