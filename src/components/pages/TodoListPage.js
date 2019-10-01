import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../smart/TodoList';
import TodoCount from '../smart/TodoCount';
import FilterSort from '../smart/FilterSort';

function TodoListPage(props) {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  return (
    <React.Fragment>
      <TodoCount {...props} />
      <FilterSort
        {...props}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        />
      <div className="card">
        <div className="card-content">
          <Link to="./todo/manage">
            <button className="button is-primary is-fullwidth">Create New Todo</button>
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