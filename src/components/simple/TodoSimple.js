import React from 'react';
import { Link } from 'react-router-dom';
import T from '../../localization/i18n';

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
          {props.todo.isComplete
            ? <del>{props.todo.text}</del>
            : <p>{props.todo.text}</p>}
        </Link>
      </div>
      <div className="column is-narrow">
        <button
          onClick={() => props.onDeleteTodo(props.todo.id)}
          className="button is-small"
          >
          {T.t("delete")}
        </button>
      </div>
    </div>
  );
}

export default TodoSimple;