import React from 'react';

function TodoSimple(props) {
  return (
    <React.Fragment>
      <input
        type="checkbox"
        checked={props.todo.isComplete}
        onChange={() => props.onToggleTodo(props.todo.id)}
        />
      <label>{props.todo.text}</label>
      <button
        onClick={() => props.onDeleteTodo(props.todo.id)}
        >
        Delete
      </button>
    </React.Fragment>
  );
}

export default TodoSimple;