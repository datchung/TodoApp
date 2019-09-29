import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TodoListPage from './TodoListPage';
import ManageTodoPage from './ManageTodoPage';
import NotFoundPage from './NotFoundPage';

function AppPage(props) {
  return (
    <React.Fragment>
      <div className="columns is-mobile">
        <div className="column">
          <h1 className="title is-1">Todo App</h1>
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