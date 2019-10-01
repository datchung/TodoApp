import React from 'react';
import FilterSortSimple from '../simple/FilterSortSimple';

function FilterSort(props) {
  function onFilter(event) {
    props.setSelectedFilter(event.target.value);
  }

  function onSort(event) {
    props.setSelectedSort(event.target.value);
  }

  return (
    <FilterSortSimple 
      {...props} 
      selectedFilter={props.selectedFilter}
      selectedSort={props.selectedSort}
      onFilter={onFilter} 
      onSort={onSort} 
      />
  );
}

export default FilterSort;