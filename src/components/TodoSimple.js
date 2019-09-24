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
    </React.Fragment>
  );
}

export default TodoSimple;