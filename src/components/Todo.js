import React from 'react';
import TodoSimple from './TodoSimple';

function Todo(props) {
  return (
    <TodoSimple todo={props.todo} />
  );
}

export default Todo;