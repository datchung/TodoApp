import React, { useState } from 'react';
import AddTodoSimple from './AddTodoSimple';

function AddTodo(props) {
  const [errors, setErrors] = useState({});
  const [todo, setTodo] = useState({
    id: null,
    text: "",
    isComplete: false
  });

  function onChange({ target }) {
    setTodo({
      ...todo,
      [target.name]: target.value
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!todo.text) _errors.text = "Text is required";
    setErrors(_errors);
    
    return Object.keys(_errors).length === 0;
  }

  function onSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;

    props.onAddTodo(todo.text);
    props.history.push("/");
  }

  return (
    <AddTodoSimple
      errors={errors}
      todo={todo}
      onChange={onChange}
      onSubmit={onSubmit}
      />
  );
}

export default AddTodo;