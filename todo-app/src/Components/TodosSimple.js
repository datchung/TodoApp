import React from "react";
import PropTypes from "prop-types";
import TodoSimple from "./TodoSimple";
//import { Link } from "react-router-dom";

function TodosSimple(props) {
  return (
    <ul className="list-group">
      {props.todos.map(todo => {
        return (<TodoSimple todo={todo} key={todo.title} />);
      })}
    </ul>
  );
}

TodosSimple.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TodosSimple;
