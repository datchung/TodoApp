import React from 'react';
import TodoSimple from './TodoSimple';

function Todo(props) {
  return (
    <TodoSimple
      todo={props.todo}
      onToggleTodo={props.onToggleTodo}
      onDeleteTodo={props.onDeleteTodo}
      />
  );
}

export default Todo;