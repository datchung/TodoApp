import React from "react";
import PropTypes from "prop-types";

function Todo(props) {
  return (
    <li className="list-group-item">
      <form>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id={props.todo.id} />
          <label className="form-check-label" htmlFor={props.todo.id}>{props.todo.title}</label>
        </div>
      </form>
    </li>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Todo;