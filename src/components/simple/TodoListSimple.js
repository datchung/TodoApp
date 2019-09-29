import React from 'react';
import Todo from '../smart/Todo';

function TodoListSimple(props) {
  return (
    <React.Fragment>
      {[...props.todos.values()].reverse().map(todo => (
        <div key={todo.id}>
          <Todo
            todo={todo}
            onToggleTodo={props.onToggleTodo}
            onDeleteTodo={props.onDeleteTodo}
            />
        </div>
      ))}
    </React.Fragment>
  );
}

export default TodoListSimple;