import React from 'react';
import { Link } from 'react-router-dom';

function TodoSimple(props) {
  return (
    <React.Fragment>
      <input
        type="checkbox"
        checked={props.todo.isComplete}
        onChange={() => props.onToggleTodo(props.todo.id)}
        />
      <Link to={"./todo/" + props.todo.id}>
        <label>{props.todo.text}</label>
      </Link>
      <button
        onClick={() => props.onDeleteTodo(props.todo.id)}
        >
        Delete
      </button>
    </React.Fragment>
  );
}

export default TodoSimple;