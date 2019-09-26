import React from 'react';

function TodoCount(props) {
  if (props.todos.size === 0) {
    return (<p></p>);
  }

  console.info(props.todos);
  const remaining = props.todos.filter(todo => !todo.isComplete).size;
  const total = props.todos.size;
  const phrase = `${remaining}/${total} left`;

  return (
    <p>{phrase}</p>
  );
}

export default TodoCount;