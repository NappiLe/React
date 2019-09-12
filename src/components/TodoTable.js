import React from "react";
import "../App.css";

export const TodoTable = props => {
  const { todos, handleDelete } = props;
  return (
    <table>
      <tbody>
        <tr>
          <th>Date</th>
          <th>Description</th>
        </tr>
        {todos.map((todo, index) => (
          <tr key={index}>
            <td>{todo.date}</td>
            <td>{todo.desc}</td>
            <td>
              {/*<button onClick={() => handleDelete(index)}>Delete</button>*/}
              <button id={index} onClick={handleDelete}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TodoTable;
