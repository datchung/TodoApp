import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
//import { Link } from "react-router-dom";

function TodoList(props) {
  return (
    <ul>
      {props.todos.map(todo => {
        return (<Todo todo={todo} key={todo.title} />);
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TodoList;
