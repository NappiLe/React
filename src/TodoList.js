import ReactTable from "react-table";
import "react-table/react-table.css";
import React, { useState } from "react";

const TodoList = () => {
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = event => {
    event.preventDefault();
    setTodos([...todos, { date, desc }]);
  };

  const handleDelete = () => {
    setTodos(todos.slice(0, -1));
  };

  const columns = [
    {
      Header: "Date",
      accessor: "date"
    },
    {
      Header: "Description",
      accessor: "desc"
    },
    {
      Cell: row => <button onClick={() => handleDelete()}>Delete</button>
    }
  ];

  return (
    <>
      <form onSubmit={addTodo}>
        <label>Description:</label>
        <input
          type="text"
          name="desc"
          onChange={e => setDesc(e.target.value)}
          value={desc}
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          onChange={e => setDate(e.target.value)}
          value={date}
        />
        <input type="submit" value="Add" />
      </form>
      <ReactTable
        data={todos}
        columns={columns}
        sortable={true}
        defaultPageSize={5}
        minRows={10}
      />
    </>
  );
};

export default TodoList;
