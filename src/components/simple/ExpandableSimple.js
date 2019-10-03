import React from 'react';

function ExpandableSimple(props) {
  var defaultTemplate = (
    <div className="columns is-mobile">
      <div className="column"></div>
      <div className="column is-narrow">
        <a
          className="button"
          onClick={()=>props.onToggleIsExpanded()}
          >
          {props.placeHolder}
        </a>
      </div>
    </div>
  );

  if(!props.isExpanded) return defaultTemplate;

  return (
    <React.Fragment>
      {defaultTemplate}
      {props.children}
    </React.Fragment>
  );
}

export default ExpandableSimple;