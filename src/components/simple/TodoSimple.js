import React from 'react';
import { Link } from 'react-router-dom';

function TodoSimple(props) {
  return (
    <div className="columns is-mobile">
      <div className="column is-narrow">
        <input
          type="checkbox"
          checked={props.todo.isComplete}
          onChange={() => props.onToggleTodo(props.todo.id)}
          />
      </div>
      <div className="column">
        <Link to={"./todo/" + props.todo.id}>
          <p>{props.todo.text}</p>
        </Link>
      </div>
      <div className="column is-narrow">
        <button
          onClick={() => props.onDeleteTodo(props.todo.id)}
          className="button is-small"
          >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoSimple;