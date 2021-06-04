import React from "react";
import "./index.css"

import { InputTodo } from "./components/InputTodo";
import { ListTodos } from "./components/ListTodos";
import { Footer } from "./components/Footer";
import { ToggleTodos } from "./components/ToggleTodos";
import {useSelector} from "react-redux";

function App() {

    const todos = useSelector(state => state.todosReducer);

  return (
      <section className="todoapp">
          <header className="header">
              <h1>todos</h1>
              <InputTodo/>
          </header>
          <section className="main">
              {todos.length > 0 && (<ToggleTodos/>)}
              <ListTodos/>
          </section>
          {todos.length > 0 && (<Footer/>)}
      </section>
  );
}

export default App;
