import React, {useState} from 'react';
import FilterSortSimple from '../simple/FilterSortSimple';

function FilterSort(props) {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  function onFilter(event) {
    setSelectedFilter(event.target.value);
  }

  function onSort(event) {
    setSelectedSort(event.target.value);
  }

  return (
    <FilterSortSimple 
      {...props} 
      selectedFilter={selectedFilter}
      selectedSort={selectedSort}
      onFilter={onFilter} 
      onSort={onSort} 
      />
  );
}

export default FilterSort;