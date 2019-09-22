import AppPage from '../pages/AppPage';
import { Container } from 'flux/utils';
import TodoStore from '../data/TodoStore';

function getStores() {
  return [
    TodoStore,
  ];
}

function getState() {
  return {
    todos: TodoStore.getState(),
  };
}

export default Container.createFunctional(AppPage, getStores, getState);