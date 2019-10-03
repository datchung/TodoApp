import React from 'react';

function ExpandableSimple(props) {
  var defaultTemplate = (
    <div className="columns">
      <div className="column">
        <a
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