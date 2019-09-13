import React from "react";
import PropTypes from "prop-types";
import TodoSmart from "./TodoSmart";

function TodosSimple(props) {
  return (
    <table className="table">
      <tbody>
        {props.todos.map(todo => {
          return (<TodoSmart todo={todo} key={todo.title} />);
        })}
      </tbody>
    </table>
  );
}

TodosSimple.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default TodosSimple;
