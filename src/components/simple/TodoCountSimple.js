import React from 'react';

function TodoCountSimple(props) {
  return (
    <div className="content">
      <p>{props.phrase}</p>
    </div>
  );
}

export default TodoCountSimple;