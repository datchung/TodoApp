import React from 'react';

function AddTodoSimple(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input 
        type="Text"
        name="text"
        value={props.todo.text || ""}
        onChange={props.onChange}
        />
      <button type="submit">
        Add
      </button>
    </form>
  );
}

export default AddTodoSimple;