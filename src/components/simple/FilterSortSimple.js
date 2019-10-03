import React from 'react';

function FilterSortSimple(props) {
  return (
    <React.Fragment>
      <div className="columns is-mobile">
        <div className="column"></div>
        <div className="column is-narrow">
          {/* <div className="field">
            <label className="label">Show</label>
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

          <div className="field">
            <label className="label">Sort</label>
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
          </div> */}

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Show</label>
            </div>
            <div className="field-body">
              <div className="field is-narrow">
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
          </div>
        </div>
        <div className="column is-narrow">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Sort</label>
            </div>
            <div className="field-body">
              <div className="field is-narrow">
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
        </div>
      </div>
    </React.Fragment>
  );
}

export default FilterSortSimple;