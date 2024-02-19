import React, { useState } from "react";

const Todo = ({ todo, handleDelete, setTodoList, handleCheck }) => {
  const { id, title } = todo;
  const [updateButton, setUpdateButton] = useState(false);
  const [inputValue, setInputValue] = useState("");

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

  return (
    <div className="border-black border flex justify-between   w-11/12 bg-white lg:mx-auto mr-32 px-4 py-3 rounded-xl">
      <div className=" flex ">
        <input type="checkbox" className="border border-black mx-3" />
        <h2>{title}</h2>
      </div>

      <div>
        {updateButton && (
          <input
            className=" w-52 border border-gray-400"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        )}
      </div>
      <div>
        <button className=" mx-2 border border-gray-200 rounded-lg" onClick={() => handleEdit(id)}>
          {updateButton ? "update" : "✏️"}
        </button>
        <button onClick={() => handleDelete(id)}>🗑️</button>
      </div>
    </div>
  );
};

export default Todo;
