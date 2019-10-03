import AppPage from '../components/pages/AppPage';
import { Container } from 'flux/utils';
import TodoStore from '../data/TodoStore';
import TodoActions from '../data/TodoActions'

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