import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TodoListPage from './TodoListPage';
import ManageTodoPage from './ManageTodoPage';
import NotFoundPage from './NotFoundPage';

function AppPage(props) {
  return (
    <React.Fragment>
      <div className="columns is-mobile has-background-light">
        <div className="column">
          <span className="icon">
            <i className="fas fa-tasks fa-lg has-text-primary"></i>
          </span>
          <span className="is-size-4"> Todo List</span>
        </div>
      </div>
      <Switch>
        <Route path="/" exact render={() => <TodoListPage {...props} />} />
        <Route path="/todo/manage" render={() => <ManageTodoPage {...props} />} />
        <Route path="/todo/:id" render={() => <ManageTodoPage {...props} />} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  );
}

export default AppPage;