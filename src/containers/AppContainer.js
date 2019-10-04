import AppPage from '../components/pages/AppPage';
import { Container } from 'flux/utils';
import TodoStore from '../data/Todo/TodoStore';
import TodoActions from '../data/Todo/TodoActions'

function getStores() {
  return [
    TodoStore,
  ];
}

function getState() {
  return {
    todos: TodoStore.getState(),
    onAddTodo: TodoActions.addTodo,
    onUpdateTodo: TodoActions.updateTodo,
    onDeleteTodo: TodoActions.deleteTodo,
    onToggleTodo: TodoActions.toggleTodo,
  };
}

export default Container.createFunctional(AppPage, getStores, getState);