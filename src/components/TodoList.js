import React from 'react';
import TodoListSimple from './TodoListSimple';

function TodoList(props) {
  return (
    <TodoListSimple {...props} />
  );
}

export default TodoList;