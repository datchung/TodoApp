import React from 'react';
// import Expandable from './Expandable';
import FilterSortSimple from '../simple/FilterSortSimple';

function FilterSort(props) {
  function onFilter(event) {
    props.onSetFilter(event.target.value);
  }

  function onSort(event) {
    props.onSetSort(event.target.value);
  }

  return (
    // <Expandable placeHolder="Filter">
      <FilterSortSimple 
        {...props} 
        selectedFilter={props.selectedFilter}
        selectedSort={props.selectedSort}
        onFilter={onFilter} 
        onSort={onSort} 
        />
    // </Expandable>
  );
}

export default FilterSort;