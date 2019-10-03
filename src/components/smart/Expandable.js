import React, {useState} from 'react';
import ExpandableSimple from '../simple/ExpandableSimple'

function Expandable(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  function onToggleIsExpanded() {
    setIsExpanded(!isExpanded);
  }

  return (
    <ExpandableSimple
      {...props}
      isExpanded={isExpanded}
      onToggleIsExpanded={onToggleIsExpanded}
      >
      {props.children}
    </ExpandableSimple>
  );
}

export default Expandable;