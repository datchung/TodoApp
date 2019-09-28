import React from 'react';
import { Link } from 'react-router-dom';

function TodoSimple(props) {
  return (
    <React.Fragment>
      <label className="checkbox">
        <input
          type="checkbox"
          checked={props.todo.isComplete}
          onChange={() => props.onToggleTodo(props.todo.id)}
          />
        <Link to={"./todo/" + props.todo.id}>
          {props.todo.text}
        </Link>
        <button
          onClick={() => props.onDeleteTodo(props.todo.id)}
          className="button is-small"
          >
          Delete
        </button>
      </label>
    </React.Fragment>
  );
}

export default TodoSimple;