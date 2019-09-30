import React from 'react';
import TodoCountSimple from '../simple/TodoCountSimple';

function TodoCount(props) {
  if (props.todos.length === 0) {
    return (
      <TodoCountSimple phrase="You have no todos. Click the button below to add." />
    );
  }

  const remaining = props.todos.filter(todo => !todo.isComplete).length;
  if(remaining === 0) {
    return (
      <TodoCountSimple phrase="Congrats. You completed all your todos!" />
    );
  }

  const total = props.todos.length;
  const todoPhrase = total > 1 ? 'todos' : 'todo';
  const phrase = `${remaining} of ${total} ${todoPhrase} remaining`;

  return (
    <TodoCountSimple phrase={phrase} />
  );
}

export default TodoCount;