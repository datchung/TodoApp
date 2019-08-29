import React, { useEffect, useState } from "react";
import TodoSimple from "./TodoSimple";

function TodoSmart(props) {
  const [todo, setTodo] = useState({
    id: "",
    title: "",
  });

  useEffect(() => {
    setTodo(props.todo);
  }, [props.todo]);

  function handleChange({ target }) {
    setTodo({
      ...todo,
      [target.name]: target.value
    });
  }

  return (
    <TodoSimple todo={todo} onChange={handleChange} />
  );
}

export default TodoSmart;