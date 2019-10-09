import React from 'react';
import { render } from "react-dom";
import { HashRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import i18n, {i18nOptions} from './i18n';

i18n.init(i18nOptions)
  .then(function(t) {
    render(
      <Router>
        <Route path="/" component={AppContainer} />
      </Router>,
      document.getElementById("appContainer")
    );
  });