import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom'
import ManageTodo from '../smart/ManageTodo';

function ManageTodoPage(props) {
  const [subTitle, setSubTitle] = useState("");

  useEffect(() => {
    const id = props.match.params.id;
    var todoById = props.todos.find(t => t.id === id);
    setSubTitle(todoById ? "Edit Todo" : "Create New Todo");
  }, [props.match.params.id]);

  return (
    <React.Fragment>
      <div className="columns is-mobile">
        <div className="column">
          <h3 className="title is-3">{subTitle}</h3>
        </div>
      </div>
      <div className="columns is-mobile">
        <div className="column">
          <Link to="/">
            <button className="button">Back</button>
          </Link>
        </div>
      </div>
      <ManageTodo {...props} />
    </React.Fragment>
  );
}

export default withRouter(ManageTodoPage);