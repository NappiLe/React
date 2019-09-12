import React, { useState } from "react";
import { TodoTable } from "./TodoTable";
import "../App.css";

const Todolist = () => {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = event => {
    event.preventDefault();
    setTodos([...todos, { date, desc }]);
  };

  const handleDelete = event => {
    event.preventDefault();
    console.log(event.target.id);
    const remainder = todos.filter(
      (todo, index) => parseInt(event.target.id) !== index
    );
    //Another way to do it:
    //const handleDelete = (index) => {
    //const remainder = todos.filter((_, i) => i !== index);
    setTodos(remainder);
  };

  return (
    <>
      <div className="wrapper">
        <p>Add todo</p>
        <form onSubmit={addTodo}>
          <label>Description:</label>
          <input
            type="text"
            name="desc"
            onChange={e => setDesc(e.target.value)}
            value={desc}
          />
          <label>Date:</label>
          <input
            type="date"
            name="date"
            onChange={e => setDate(e.target.value)}
            value={date}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
      <TodoTable todos={todos} handleDelete={handleDelete} />
    </>
  );
};

export default Todolist;
