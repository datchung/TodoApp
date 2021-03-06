import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from '../Dispatcher';

const Actions = {
  addTodo(text) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      text,
    });
  },
  updateTodo(todo) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.UPDATE_TODO,
      todo,
    });
  },
  deleteTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.DELETE_TODO,
      id,
    });
  },
  toggleTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.TOGGLE_TODO,
      id,
    });
  },
};

export default Actions;