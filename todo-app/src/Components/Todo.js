import React from "react";
import PropTypes from "prop-types";

function Todo(props) {
  return (
    <li>
      <input type="checkbox" />
      {props.todo.title}
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