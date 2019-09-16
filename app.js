'use strict';

//const Router = ReactRouterDOM.BrowserRouter;

var Router = ReactRouterDOM.HashRouter;
var Route = ReactRouterDOM.Route;
var Link = ReactRouterDOM.Link;
var Switch = ReactRouterDOM.Switch;

function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "h1",
      null,
      "Todo App"
    ),
    React.createElement(
      Switch,
      null,
      React.createElement(Route, { path: "/", exact: true, component: TodoListPage }),
      React.createElement(Route, { path: "/todo/add", component: AddTodoPage }),
      React.createElement(Route, { path: "/todo/:slug/edit", component: EditTodoPage })
    )
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
    React.createElement(
      Link,
      { to: "./todo/add" },
      React.createElement(
        "button",
        null,
        "Add"
      )
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

// Add Todo page
function AddTodoPage() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "p",
      null,
      "AddTodoPage"
    ),
    React.createElement(AddTodo, null)
  );
}

// Add Todo smart
function AddTodo() {
  return React.createElement(AddTodoSimple, null);
}

// Add Todo simple
function AddTodoSimple() {
  return React.createElement(
    "p",
    null,
    "AddTodoSimple"
  );
}

// Edit/Delete Todo page
function EditTodoPage() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "p",
      null,
      "EditTodoPage"
    ),
    React.createElement(EditTodo, null)
  );
}

// Edit/Delete Todo smart
function EditTodo() {
  return React.createElement(EditTodoSimple, null);
}

// Edit/Delete Todo simple
function EditTodoSimple() {
  return React.createElement(
    "p",
    null,
    "EditTodoSimple"
  );
}

ReactDOM.render(React.createElement(
  Router,
  null,
  React.createElement(Route, { path: "/", component: App })
), document.getElementById("appContainer"));