import React from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../components/TodoList';

function TodoListPage(props) {
  console.info('TodoListPage');
  console.info(props);
  return (
    <React.Fragment>
      <p>TodoListPage</p>
      <Link to="./todo/add">
        <button>Add</button>
      </Link>
      <TodoList todos={props.todos} />
    </React.Fragment>
  );
}

export default TodoListPage;