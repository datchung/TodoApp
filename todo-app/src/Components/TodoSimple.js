import React from "react";
import PropTypes from "prop-types";

function TodoSimple(props) {
  return (
    <li className="list-group-item">
      <form>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" />
          <input type="text" className="form-control" value={props.todo.title} onChange={props.onChange} />
          {/* <input type="checkbox" className="form-check-input" id={props.todo.id} /> */}
          {/* <label className="form-check-label" htmlFor={props.todo.id}>{props.todo.title}</label> */}
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