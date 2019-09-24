import React from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../components/TodoList';
import TodoCount from '../components/TodoCount';

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