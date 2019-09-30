import React from 'react';
import FilterSortSimple from '../simple/FilterSortSimple';

function FilterSort(props) {
  function onFilter(e, f, g) {
    console.info(e);
    console.info(f);
    console.info(g);
  }

  function onSort(e, f, g) {
    console.info(e);
    console.info(f);
    console.info(g);
  }

  return (
    <FilterSortSimple {...props} onFilter={onFilter} onSort={onSort} />
  );
}

export default FilterSort;