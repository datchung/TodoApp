import React from 'react';
import { render } from "react-dom";
import { HashRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AppContainer from './containers/AppContainer';

render(
  <Router>
    <Route path="/" component={AppContainer} />
  </Router>,
  document.getElementById("appContainer")
);

// import TodoActions from './data/TodoActions';

// TodoActions.addTodo('My first task');
// TodoActions.addTodo('Another task');
// TodoActions.addTodo('Finish this tutorial');