import React from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

function TodoList(props) {
  return (
    <ul>
      {props.todos.map(todo => {
        return (<li>{todo.title}</li>);
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      //id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TodoList;
