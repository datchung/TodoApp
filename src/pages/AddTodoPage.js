import React from 'react';
import {withRouter} from 'react-router-dom'
import AddTodo from '../components/AddTodo';

function AddTodoPage(props) {
  return (
    <React.Fragment>
      <p>Add Todo</p>
      <AddTodo {...props} />
    </React.Fragment>
  );
}

export default withRouter(AddTodoPage);