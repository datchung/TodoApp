import React from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../smart/TodoList';
import TodoCount from '../smart/TodoCount';

function TodoListPage(props) {
  return (
    <React.Fragment>
      <TodoCount {...props} />
      <div className="card">
        <div className="card-content">
          <Link to="./todo/manage">
            <button className="button is-primary is-fullwidth">Create New Todo</button>
          </Link>
        </div>
      </div>
      <TodoList {...props} />
    </React.Fragment>
  );
}

export default TodoListPage;