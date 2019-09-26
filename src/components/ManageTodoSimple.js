import React from 'react';

function ManageTodoSimple(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input 
        type="Text"
        name="text"
        value={props.todo.text || ""}
        onChange={props.onChange}
        />
      <button type="submit">
        Save
      </button>
    </form>
  );
}

export default ManageTodoSimple;