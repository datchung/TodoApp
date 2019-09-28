import React from 'react';
import TodoCountSimple from '../simple/TodoCountSimple';

function TodoCount(props) {
  if (props.todos.length === 0) {
    return (
      <TodoCountSimple phrase="You have no todos. Click the button below to add." />
    );
  }

  const remaining = props.todos.filter(todo => !todo.isComplete).length;
  const total = props.todos.length;
  const phrase = `${remaining} out of ${total} todos remaining`;

  return (
    <TodoCountSimple phrase={phrase} />
  );
}

export default TodoCount;