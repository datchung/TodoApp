import AppPage from '../components/pages/AppPage';
import { Container } from 'flux/utils';
// import i18next from 'i18next';
import TodoStore from '../data/Todo/TodoStore';
import TodoActions from '../data/Todo/TodoActions';
import FilterSortStore from '../data/FilterSort/FilterSortStore';
import FilterSortActions from '../data/FilterSort/FilterSortActions';

function getStores() {
  return [
    TodoStore,
    FilterSortStore,
  ];
}

function getState() {
  return {
    todos: TodoStore.getState(),
    onAddTodo: TodoActions.addTodo,
    onUpdateTodo: TodoActions.updateTodo,
    onDeleteTodo: TodoActions.deleteTodo,
    onToggleTodo: TodoActions.toggleTodo,

    filterSort: FilterSortStore.getState(),
    onSetFilter: FilterSortActions.setFilter,
    onSetSort: FilterSortActions.setSort
  };
}

export default Container.createFunctional(AppPage, getStores, getState);