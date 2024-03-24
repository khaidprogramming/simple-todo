import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";


import { GrEdit } from "react-icons/gr";


const Todo = ({ todo, handleDelete, setTodoList,todoList }) => {
  const { id, title } = todo;
  const [updateButton, setUpdateButton] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const[checked,setChecked] = useState(false);

  console.log(todo);
  const handleCheckBoxChange = () => {
setChecked(!checked)
todo.completed = !todo.completed;

localStorage.setItem('todos', JSON.stringify(todoList));


  }

  const handleEdit = (id) => {
    setUpdateButton(!updateButton);
    if (!inputValue) {
      return;
    }
    if (updateButton) {
      setTodoList((prev) =>
        prev.map((todo) =>
          todo.id == id ? { id: id, title: inputValue } : todo
        )
      );
    }
  };

  // useEffect(() => {
  //   // Save todos to local storage whenever todos change
  // }, [todoList]);

  return (
    <div className="border-black border flex justify-between w-11/12 bg-white lg:mx-auto md:mr-32 px-4 py-3 rounded-xl">
      <div className=" flex ">
      <label className=" cursor-pointer flex" htmlFor={id}>
        <input id={id} type="checkbox" className="border border-black mx-3" checked={todo.completed} onChange={handleCheckBoxChange} />
       <h2 className={`${todo.completed?"line-through":""} font-semibold text-md text-gray-500 text-sm md:text-base ` }>{title}</h2></label>
      </div>

      <div>
        {updateButton && (
          <input
            className=" w-32 md:w-52 border border-gray-400"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        )}
      </div>
      <div>
        <button className=" mx-2  rounded-lg" onClick={() => handleEdit(id)}>
          {updateButton ? <GrUpdate className=" size-4 mx-3"/> : <GrEdit className=" size-5 mx-1 md:mx-3"/>}
        </button>
        <button onClick={() => handleDelete(id)}><RiDeleteBin6Line className=" size-5 md:mx-3"/></button>
      </div>
    </div>
  );
};

export default Todo;
