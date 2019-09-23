import React from 'react';

function TodoSimple(props) {
  return (
    <React.Fragment>
      <input type="checkbox" value={props.todo.isComplete}/>
      <label>{props.todo.text}</label>
    </React.Fragment>
  );
}

export default TodoSimple;