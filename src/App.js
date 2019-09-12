import React from "react";
import Todolist from "./components/Todolist";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Simple Todolist</header>
      <div className="App-body">
        <Todolist />
      </div>
    </div>
  );
}

export default App;
