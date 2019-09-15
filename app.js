'use strict';

var Router = ReactRouterDOM.BrowserRouter;
var Route = ReactRouterDOM.Route;

function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "h1",
      null,
      "Todo App"
    ),
    React.createElement(TodoListPage, null)
  );
}

// Todo list page
function TodoListPage() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "p",
      null,
      "TodoListPage"
    ),
    React.createElement(TodoList, null)
  );
}

// Todo list smart
function TodoList() {
  return React.createElement(TodoListSimple, null);
}

// Todo list simple
function TodoListSimple() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "p",
      null,
      "TodoListSimple"
    ),
    React.createElement(Todo, null)
  );
}

// Todo smart
function Todo() {
  return React.createElement(TodoSimple, null);
}

// Todo simple
function TodoSimple() {
  return React.createElement(
    "p",
    null,
    "TodoSimple"
  );
}

// Add/Edit/Delete Todo page

// Add/Edit/Delete Todo smart

// Add/Edit/Delete Todo simple


ReactDOM.render(React.createElement(
  Router,
  null,
  React.createElement(Route, { path: "/", component: App })
), document.getElementById("appContainer"));