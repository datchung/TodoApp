import React from 'react';
import { render } from "react-dom";
import { HashRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import i18n from './i18n';

i18n.init({
  fallbackLng: 'en',
  debug: true,
  resources: {
    "en": {
      translation: {
        "title": " Minimalist Todo List"
      }
    },
    "fr": {
      translation: {
        "title": " Title in fr"
      }
    }
  }
}).then(function(t) {
  render(
    <Router>
      <Route path="/" component={AppContainer} />
    </Router>,
    document.getElementById("appContainer")
  );
});