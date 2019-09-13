import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function TodoSimple(props) {
  return (
    <tr>
      <td>
        {props.todo.isComplete 
          ? <button
              type="button"
              className="btn btn-light"
              onClick={() => props.onCheck()}
              >
                Checked
              </button>
          : <button
              type="button"
              className="btn btn-success"
              onClick={() => props.onCheck()}
              >
              !Checked
            </button>
          }
      </td>
      <td>
        <Link to={"/todo/" + props.todo.id}>{props.todo.title}</Link>
      </td>
    </tr>
  );
}

TodoSimple.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  onCheck: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  isAdd: PropTypes.bool
};

export default TodoSimple;