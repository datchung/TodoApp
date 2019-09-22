import React from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../components/TodoList';

function TodoListPage() {
  return (
    <React.Fragment>
      <p>TodoListPage</p>
      <Link to="./todo/add">
        <button>Add</button>
      </Link>
      <TodoList></TodoList>
    </React.Fragment>
  );
}

export default TodoListPage;