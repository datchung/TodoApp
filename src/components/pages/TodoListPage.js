import React from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../smart/TodoList';
import TodoCount from '../smart/TodoCount';

function TodoListPage(props) {
  return (
    <React.Fragment>
      <TodoCount {...props} />
      <Link to="./todo/add">
        <button>Add</button>
      </Link>
      <TodoList {...props} />
    </React.Fragment>
  );
}

export default TodoListPage;