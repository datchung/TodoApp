import React from 'react';

function FilterSortSimple(props) {
  return (
    <div className="columns is-mobile">
      <div className="column"></div>
      <div className="column is-narrow">
        <div className="field has-addons">
          <div className="control">
            <div className="inline-label">
              Filter
            </div>
          </div>
          <div className="control">
            <div className="select">
              <select
                value={props.selectedFilter}
                onChange={props.onFilter}
                >
                <option value="all">All</option>
                <option value="notDone">Not Done</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-narrow">
        <div className="field has-addons">
          <div className="control">
            <div className="inline-label">
              Sort
            </div>
          </div>
          <div className="control">
            <div className="select">
              <select
                value={props.selectedSort}
                onChange={props.onSort}
                >
                <option value="newestFirst">Date new to old</option>
                <option value="oldestFirst">Date old to new</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSortSimple;