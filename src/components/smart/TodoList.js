import React, {useEffect, useState} from 'react';
import TodoListSimple from '../simple/TodoListSimple';

function TodoList(props) {
  const [todos, setTodos] = useState([]);

  useEffect(()=> {
    var todos = props.todos;
    switch(props.selectedFilter) {
      case 'notDone':
        todos = todos.filter(todo => !todo.isComplete);
        break;
      case 'done':
        todos = todos.filter(todo => todo.isComplete);
        break;
      default:
        if(props.selectedSort !== 'oldestFirst')
          todos = [...todos];
        break;
    }

    if(props.selectedSort !== 'oldestFirst')
      todos = todos.reverse();

    setTodos(todos);
  }, [props.todos, props.selectedFilter, props.selectedSort]);

  return (
    <TodoListSimple
      todos={todos}
      onToggleTodo={props.onToggleTodo}
      onDeleteTodo={props.onDeleteTodo}
      />
  );
}

export default TodoList;