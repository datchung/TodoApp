import React from "react";
import PropTypes from "prop-types";

function TodoSimple(props) {
  return (
    <li className="list-group-item">
      <form>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" />
          <input type="text" className="form-control" name="title" value={props.todo.title} onChange={props.onChange} />
        </div>
      </form>
    </li>
  );
}

TodoSimple.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  onChange: PropTypes.func.isRequired
};

export default TodoSimple;