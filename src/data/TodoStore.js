import { ReduceStore } from 'flux/utils';
import uuid from 'uuid';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import Todo from './TodoRecord';
import TodoPersistence from './TodoPersistence';

class TodoStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getTodosStorageKey() {
    return "TodoList_Todos";
  }

  getInitialState() {
    return TodoPersistence.getSavedTodos();
  }

  reduce(state, action) {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO:
        // Don't add todos with no text.
        if (!action.text) {
          return state;
        }
        var dateCreated = + new Date();
        var modifiedState = [
          ...state, 
          new Todo({
            id: uuid(),
            text: action.text,
            isComplete: false,
            dateCreated: dateCreated,
            dateModified: dateCreated
          })
        ];

        TodoPersistence.saveTodos(modifiedState);
        return modifiedState;
      
      case TodoActionTypes.UPDATE_TODO:
          var todo = state.find(s => s.id === action.todo.id);
          if(!todo) return state;
  
          var modifiedState = state.map(s => {
            if(s.id !== action.todo.id) return s;
            
            return new Todo({
              id: s.id,
              text: action.todo.text,
              isComplete: s.isComplete,
              dateCreated: s.dateCreated,
              dateModified: + new Date()
            });
          });
  
          TodoPersistence.saveTodos(modifiedState);
          return modifiedState;

      case TodoActionTypes.DELETE_TODO:
        if(!state.find(s => s.id === action.id)) return state;

        var modifiedState = state.filter(s => s.id != action.id);

        TodoPersistence.saveTodos(modifiedState);
        return modifiedState;

      case TodoActionTypes.TOGGLE_TODO:
        var todo = state.find(s => s.id === action.id);
        if(!todo) return state;

        var modifiedState = state.map(s => {
          if(s.id !== action.id) return s;
          
          return new Todo({
            id: s.id,
            text: s.text,
            isComplete: !s.isComplete,
            dateCreated: s.dateCreated,
            dateModified: + new Date()
          });
        });

        TodoPersistence.saveTodos(modifiedState);
        return modifiedState;
        
      default:
        return state;
    }
  }
}

export default new TodoStore();