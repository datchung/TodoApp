import React from 'react';
import {withRouter} from 'react-router-dom'
import AddTodo from '../smart/ManageTodo';

function ManageTodoPage(props) {
  return (
    <React.Fragment>
      <p>Todo Form</p>
      <AddTodo {...props} />
    </React.Fragment>
  );
}

export default withRouter(ManageTodoPage);