import React, { useState } from "react";
import Formulario from "../components/form";
import Lista from "../components/list";
import "./todo.css"

const Todo = () => {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const handleChangeInput = (event) => {
    const inputTask = event.target.value;

    setTask(inputTask);
  };

  const handleAddItemToList = (event) => {
    event.preventDefault();

    if (!task) {
      return;
    }

    setItemsList([...itemsList, task]);
    setTask("");
  };

  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
     <Formulario task={task} handleAddItemToList={handleAddItemToList} handleChangeInput={handleChangeInput}/>
     <Lista itemsList={itemsList} />
    </div>
  );
};

export default Todo;