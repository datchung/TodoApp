import React from 'react';

function ManageTodoSimple(props) {
  return (
    <div className="columns is-mobile">
      <div className="column">
        <form onSubmit={props.onSubmit}>
          <div className="field">
            <div className="control">
              <input 
                type="Text"
                name="text"
                value={props.todo.text || ""}
                onChange={props.onChange}
                className="input"
                />
            </div>
          </div>
          
          <div className="field">
            <div className="control">
              <button
                type="submit"
                className="button is-primary"
                >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManageTodoSimple;