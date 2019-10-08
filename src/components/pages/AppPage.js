import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Translate from '../../i18n';
import TodoListPage from './TodoListPage';
import ManageTodoPage from './ManageTodoPage';
import NotFoundPage from './NotFoundPage';

function AppPage(props) {
  return (
    <React.Fragment>
      <div className="columns is-mobile has-background-light">
        <div className="column">
          <img src="images/checked.svg" width="20" />
          <span className="title is-4">{Translate.t("title")}</span>
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