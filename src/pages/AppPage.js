import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TodoListPage from '../pages/TodoListPage';
import AddTodoPage from '../pages/AddTodoPage';
import EditTodoPage from '../pages/EditTodoPage';
import NotFoundPage from '../pages/NotFoundPage';

function AppPage(props) {
  return (
    <React.Fragment>
      <h1>Todo App</h1>
      <Switch>
        <Route path="/" exact render={() => <TodoListPage {...props} />} />
        <Route path="/todo/add" render={() => <AddTodoPage {...props} />} />
        <Route path="/todo/:id" render={() => <AddTodoPage {...props} />} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  );
}

export default AppPage;