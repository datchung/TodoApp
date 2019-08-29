import React, { useState, useEffect } from "react";
//import courseStore from "../stores/courseStore";
import TodosSimple from "./TodosSimple";
//import { Link } from "react-router-dom";
//import { loadCourses, deleteCourse } from "../actions/courseActions";

function TodosSmart() {
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
      <TodosSimple todos={todos} />
    </>
  );
}

export default TodosSmart;
