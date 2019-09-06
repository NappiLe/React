import React from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Simple Todolist</header>
      <div className="App-body">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
