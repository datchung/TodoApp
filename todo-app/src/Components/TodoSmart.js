import React, { useState } from "react";
import TodoSimple from "./TodoSimple";

function TodoSmart(props) {
  const [todo, setTodo] = useState({
    id: "",
    title: "",
  });

  function onChange({ target }) {
    console.debug("target " + target);
    setTodo({
      ...todo,
      [target.title]: target.value
    });
  }

  return (
    <TodoSimple todo={props.todo} handleChange={onChange} />
  );
}

export default TodoSmart;