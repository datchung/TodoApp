'use strict';

var Router = ReactRouterDOM.BrowserRouter;
var Route = ReactRouterDOM.Route;

function App() {
  return React.createElement(
    "h1",
    null,
    "Todo App"
  );
}

ReactDOM.render(React.createElement(
  Router,
  null,
  React.createElement(Route, { path: "/", component: App })
), document.getElementById("appContainer"));