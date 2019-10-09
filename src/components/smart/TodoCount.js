import React from 'react';
import TodoCountSimple from '../simple/TodoCountSimple';
import T from '../../localization/i18n';

function TodoCount(props) {
  if (props.todos.length === 0) {
    return (
      <TodoCountSimple phrase={T.t("noTodos")} />
    );
  }

  const remaining = props.todos.filter(todo => !todo.isComplete).length;
  if(remaining === 0) {
    return (
      <TodoCountSimple phrase={T.t("allDone")} />
    );
  }

  const total = props.todos.length;
  const todoPhrase = total > 1 ? T.t("todos") : T.t("todo");
  const phrase=String.format(T.t("todoRemaining"), remaining, total, todoPhrase);

  return (
    <TodoCountSimple phrase={phrase} />
  );
}

export default TodoCount;