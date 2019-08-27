import React from "react";
import TodoSimple from "./TodoSimple";

function TodoSmart(props) {
  function onChange({ target }) {
    console.debug("target " + target);
    //setCourses(courseStore.getCourses());
  }

  return (
    <TodoSimple todo={props.todo} handleChange={onChange} />
  );
}

export default TodoSmart;