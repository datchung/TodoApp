import React, { useState, useEffect } from 'react';
import ManageTodoSimple from '../simple/ManageTodoSimple';
import T from '../../localization/i18n';

function ManageTodo(props) {
  const [errors, setErrors] = useState({});
  const [todo, setTodo] = useState({
    id: null,
    text: "",
    isComplete: false,
    dateCreated: 0,
    dateModified: 0,
  });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const id = props.match.params.id;
    var todoById = props.todos.find(t => t.id === id);
    if(!todoById) return;

    setIsEdit(true);
    setTodo({
      id: todoById.id,
      text: todoById.text,
      isComplete: todoById.isComplete,
      dateCreated: todoById.dateCreated,
      dateModified: todoById.dateModified
    });
  }, [props.match.params.id]);

  function onChange({ target }) {
    setTodo({
      ...todo,
      [target.name]: target.value
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!todo.text) _errors.text = T.t("textRequired");
    setErrors(_errors);
    
    return Object.keys(_errors).length === 0;
  }

  function onSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;

    if(isEdit)
      props.onUpdateTodo(todo);
    else
      props.onAddTodo(todo.text);

    props.history.push("/");
  }

  return (
    <ManageTodoSimple
      errors={errors}
      todo={todo}
      onChange={onChange}
      onSubmit={onSubmit}
      />
  );
}

export default ManageTodo;