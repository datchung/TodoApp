import React from 'react';
import TodoListSimple from './TodoListSimple';

function TodoList(props) {
  return (
    <TodoListSimple todos={props.todos} />
  );
}

export default TodoList;