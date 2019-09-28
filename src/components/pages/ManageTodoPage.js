import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import ManageTodo from '../smart/ManageTodo';

function ManageTodoPage(props) {
  return (
    <React.Fragment>
      <div className="content">
        <p>Todo Form</p>
      </div>
      <div className="content">
        <Link to="/">
          <button className="button">Back</button>
        </Link>
      </div>
      <ManageTodo {...props} />
    </React.Fragment>
  );
}

export default withRouter(ManageTodoPage);