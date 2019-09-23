import React from 'react';
import Todo from './Todo';

function TodoListSimple(props) {
  console.info(props);
  return (
    <React.Fragment>
      <p>TodoListSimple</p>
      <ul>
        {props.todos.map(todo => {
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        })}
      </ul>
    </React.Fragment>
  );
}

export default TodoListSimple;