import React, { useState, useEffect } from "react";
//import courseStore from "../stores/courseStore";
import TodoList from "./TodoList";
//import { Link } from "react-router-dom";
//import { loadCourses, deleteCourse } from "../actions/courseActions";

function TodosPage() {
  const [todos, setTodos] = useState([ { id: "1", title: "1" }, { id: "2", title: "2" } ]);

  //useEffect(() => {
    //courseStore.addChangeListener(onChange);
    // if (courseStore.getCourses().length === 0) loadCourses();
    // return () => courseStore.removeChangeListener(onChange); // cleanup on unmount
  //}, []);

  //function onChange() {
    //setCourses(courseStore.getCourses());
  //}

  return (
    <>
      <h2>Todos</h2>
      <button type="button" className="btn btn-primary">
        Add Todo
      </button>
      <TodoList todos={todos} />
    </>
  );
}

export default TodosPage;
