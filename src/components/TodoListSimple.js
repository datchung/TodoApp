import React from 'react';
import Todo from './Todo';

function TodoListSimple(props) {
  return (
    <React.Fragment>
      <ul>
        {[...props.todos.values()].reverse().map(todo => (
          <li key={todo.id}>
            <Todo
              todo={todo}
              onToggleTodo={props.onToggleTodo}
              onDeleteTodo={props.onDeleteTodo}
              />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default TodoListSimple;