import { useState } from "react";
import Swal from "sweetalert2";
import React from "react";

export default function TodoApp() {
  // * 1. Create  useStates to store the task to be added and the array of tasks.

  const [newItem, setNewItem] = useState();
  const [items, setItems] = useState([]);

  //4. *Write a function to handle the button click event.
  const addTaskHandler = () => {
    //check if the input is empty before you add a new item
    if (!newItem) {
      Swal.fire("Please enter a task");
      return;
    }
    //5. * Add each task to the array of tasks after the button is clicked.
    setItems([...items, { id: Date.now(), newItem }]);
    console.log(items);
  };
  function deleteItemHandler(id) {
    //Filter and retain all the items that don't have a parameter id.
    setItems(items.filter(x => x.id !== id))
    Swal.fire('Task Deleted')
  }

  return (
    <>
      <h1 className="text-center text-uppercase">Todo App </h1>
      <div className=" todo-header d-flex flex-wrap justify-content-around m-3 p-3 rounded border border-success">
        {/*2 * Add an onChange event to the input.  */}

        <input
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter Task Description"
          type="text"
          className="fs-1 p-3  rounded w-50 me-5"
        />
        {/* * 3. Add an onClick to the button. */}

        <button
          onClick={addTaskHandler}
          className="btn btn-success p-3 fs-1 w-25 ms-5"
        >
          Add Task
        </button>
      </div>
      <div className="tasks">
        {/*7. * Map through the tasks and display them on the browser. */}

        {items.map((x) => {
          return (
            <div
              key={x.id}
              className="bg-success text-light fs-5 d-flex justify-content-between m-3 rounded p-3 "
            >
              {x.newItem}
              <i
                onClick={() => deleteItemHandler(x.id)}
                style={{ cursor: "pointer" }}
                className="fa fa-trash text-danger "
              ></i>
            </div>
          );
        })}
      </div>
    </>
  );
}
