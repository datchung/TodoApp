import React from 'react';
import Todo from '../smart/Todo';

function TodoListSimple(props) {
  return (
    <React.Fragment>
      {props.todos.map(todo => (
        <div
          key={todo.id}
          className="card"
          >
            <div
              className="card-content"
              >
              <Todo
                todo={todo}
                onToggleTodo={props.onToggleTodo}
                onDeleteTodo={props.onDeleteTodo}
                />
            </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default TodoListSimple;