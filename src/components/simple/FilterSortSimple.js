import React from 'react';

function FilterSortSimple(props) {
  return (
    <React.Fragment>
      <div className="columns is-mobile">
        <div className="column has-text-right">
          <div className="select">
            <select
              value={props.selectedFilter}
              onChange={props.onFilter}
              >
              <option value="" disabled>Filter</option>
              <option value="all">All</option>
              <option value="notDone">Not Done</option>
              <option value="done">Done</option>
            </select>
          </div>
        </div>
        <div className="column is-narrow">
          <div className="select">
            <select
              value={props.selectedSort}
              onChange={props.onSort}
              >
              <option value="" disabled>Sort</option>
              <option value="newestFirst">Date new to old</option>
              <option value="oldestFirst">Date old to new</option>
            </select>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FilterSortSimple;