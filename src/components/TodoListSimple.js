import React from 'react';
import Todo from './Todo';

function TodoListSimple(props) {
  return (
    <React.Fragment>
      <p>TodoListSimple</p>
      <ul>
        {[...props.todos.values()].map(todo => {
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        })}
      </ul>
    </React.Fragment>
  );
}

export default TodoListSimple;