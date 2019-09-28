import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom'
import ManageTodo from '../smart/ManageTodo';

function ManageTodoPage(props) {
  const [subTitle, setSubTitle] = useState("");

  useEffect(() => {
    const id = props.match.params.id;
    var todoById = props.todos.find(t => t.id === id);
    setSubTitle(todoById ? "Edit Todo" : "Add Todo");
  }, [props.match.params.id]);

  return (
    <React.Fragment>
      <div className="content">
        <h2>{subTitle}</h2>
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