import React from 'react';
import TodoListSimple from '../simple/TodoListSimple';

function TodoList(props) {
  return (
    <TodoListSimple {...props} />
  );
}

export default TodoList;