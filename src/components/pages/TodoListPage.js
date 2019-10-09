import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../smart/TodoList';
import TodoCount from '../smart/TodoCount';
import FilterSort from '../smart/FilterSort';
import T from '../../localization/i18n';

function TodoListPage(props) {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  useEffect(() => {
    setSelectedFilter(props.filterSort.filter);
    setSelectedSort(props.filterSort.sort);
  }, [props.filterSort]);

  return (
    <React.Fragment>
      <TodoCount {...props} />
      <FilterSort
        {...props}
        selectedFilter={selectedFilter}
        selectedSort={selectedSort}
        />
      <div className="card">
        <div className="card-content">
          <Link to="./todo/manage">
            <button className="button is-primary is-fullwidth">{T.t("createTodo")}</button>
          </Link>
        </div>
      </div>
      <TodoList
        {...props}
        selectedFilter={selectedFilter}
        selectedSort={selectedSort}
        />
    </React.Fragment>
  );
}

export default TodoListPage;