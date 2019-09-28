import React from 'react';
import Todo from '../smart/Todo';

function TodoListSimple(props) {
  return (
    <div className="content">
      {/* <ul type=""> */}
        {[...props.todos.values()].reverse().map(todo => (
          <div className="block" key={todo.id}>
            <Todo
              todo={todo}
              onToggleTodo={props.onToggleTodo}
              onDeleteTodo={props.onDeleteTodo}
              />
          </div>
        ))}
      {/* </ul> */}
    </div>
  );
}

export default TodoListSimple;