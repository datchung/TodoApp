var TodoPersistence = (function() {
  function _getTodosStorageKey() {
    return "TodoList_Todos";
  }

  function getSavedTodos() {
    var defaultTodos = [];

    var todosString = localStorage[_getTodosStorageKey()];
    if(!todosString) return defaultTodos;

    var todosObject = JSON.parse(todosString);
    if(!todosObject) return defaultTodos;

    return Array.isArray(todosObject)
      ? todosObject
      : defaultTodos;
  }

  function saveTodos(todos) {
    localStorage[_getTodosStorageKey()] = JSON.stringify(todos);
  }

  return {
    getSavedTodos: getSavedTodos,
    saveTodos: saveTodos
  };
}());

export default TodoPersistence;