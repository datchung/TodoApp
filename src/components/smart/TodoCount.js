import React from 'react';
import TodoCountSimple from '../simple/TodoCountSimple';

function TodoCount(props) {
  if (props.todos.size === 0) {
    return (
      <TodoCountSimple phrase="You have no todos. Click button below to add." />
    );
  }

  const remaining = props.todos.filter(todo => !todo.isComplete).size;
  const total = props.todos.size;
  const phrase = `${remaining}/${total} left`;

  return (
    <TodoCountSimple phrase={phrase} />
  );
}

export default TodoCount;