import React from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../components/TodoList';

function TodoListPage(props) {
  return (
    <React.Fragment>
      <Link to="./todo/add">
        <button>Add</button>
      </Link>
      <TodoList {...props} />
    </React.Fragment>
  );
}

export default TodoListPage;