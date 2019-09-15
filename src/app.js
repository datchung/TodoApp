'use strict';

const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;

function App() {
  return (
    <React.Fragment>
      <h1>Todo App</h1>
      <TodoListPage></TodoListPage>
    </React.Fragment>
  );
}

// Todo list page
function TodoListPage() {
  return (
    <React.Fragment>
      <p>TodoListPage</p>
      <TodoList></TodoList>
    </React.Fragment>
  );
}

// Todo list smart
function TodoList() {
  return (
    <TodoListSimple></TodoListSimple>
  );
}

// Todo list simple
function TodoListSimple() {
  return (
    <React.Fragment>
      <p>TodoListSimple</p>
      <Todo></Todo>
    </React.Fragment>
  );
}

// Todo smart
function Todo() {
  return (
    <TodoSimple></TodoSimple>
  );
}

// Todo simple
function TodoSimple() {
  return (
    <p>TodoSimple</p>
  );
}

// Add/Edit/Delete Todo page

// Add/Edit/Delete Todo smart

// Add/Edit/Delete Todo simple


ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById("appContainer")
);