'use strict';

//const Router = ReactRouterDOM.BrowserRouter;
const Router = ReactRouterDOM.HashRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const Switch = ReactRouterDOM.Switch;

function App() {
  return (
    <React.Fragment>
      <h1>Todo App</h1>
      <Switch>
        <Route path="/" exact component={TodoListPage} />
        <Route path="/todo/add" component={AddTodoPage} />
        <Route path="/todo/:slug/edit" component={EditTodoPage} />
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </React.Fragment>
  );
}

// Todo list page
function TodoListPage() {
  return (
    <React.Fragment>
      <p>TodoListPage</p>
      <Link to="./todo/add">
        <button>Add</button>
      </Link>
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

// Add Todo page
function AddTodoPage() {
  return (
    <React.Fragment>
      <p>AddTodoPage</p>
      <AddTodo></AddTodo>
    </React.Fragment>
  );
}

// Add Todo smart
function AddTodo() {
  return (
    <AddTodoSimple></AddTodoSimple>
  );
}

// Add Todo simple
function AddTodoSimple() {
  return (
    <p>AddTodoSimple</p>
  );
}

// Edit/Delete Todo page
function EditTodoPage() {
  return (
    <React.Fragment>
      <p>EditTodoPage</p>
      <EditTodo></EditTodo>
    </React.Fragment>
  );
}

// Edit/Delete Todo smart
function EditTodo() {
  return (
    <EditTodoSimple></EditTodoSimple>
  );
}

// Edit/Delete Todo simple
function EditTodoSimple() {
  return (
    <p>EditTodoSimple</p>
  );
}

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById("appContainer")
);