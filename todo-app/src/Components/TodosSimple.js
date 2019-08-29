import React from "react";
import PropTypes from "prop-types";
import TodoSmart from "./TodoSmart";
//import { Link } from "react-router-dom";

function TodosSimple(props) {
  return (
    <ul className="list-group">
      <TodoSmart todo={{id: "", title: ""}} key="addTodo" isAdd={true} onSubmit={props.onSubmit} />
      {props.todos.map(todo => {
        return (<TodoSmart todo={todo} key={todo.title} />);
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
