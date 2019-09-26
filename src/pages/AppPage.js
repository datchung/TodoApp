import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TodoListPage from '../pages/TodoListPage';
import ManageTodoPage from './ManageTodoPage';
import NotFoundPage from '../pages/NotFoundPage';

function AppPage(props) {
  return (
    <React.Fragment>
      <h1>Todo App</h1>
      <Switch>
        <Route path="/" exact render={() => <TodoListPage {...props} />} />
        <Route path="/todo/add" render={() => <ManageTodoPage {...props} />} />
        <Route path="/todo/:id" render={() => <ManageTodoPage {...props} />} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  );
}

export default AppPage;