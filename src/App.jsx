import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";

const App = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [todoList, setTodoList] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const[clicked,setClicked] = useState(false);
  // useEffect(() => {
  //   // Load todos from local storage on component mount
  //   const storedTodos = localStorage.getItem('todos');

  //   if (storedTodos) {
  //     setTodoList((prev)=> [...prev]); // Parse the string back into an array

  //   }
  // },[]);

  useEffect(() => {
    // Save todos to local storage whenever todos change
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const handleAdd = () => {
    if (!inputTodo) {
      alert("please write some text");
      return;
    }
    setTodoList((prev) => [
      ...prev,
      { id: Date.now(), title: inputTodo, completed: false },
    ]);
    setInputTodo("");
  };

  const handleDelete = (id) => {
    const todos = [...todoList];
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodoList(filteredTodos);
  };

  console.log(todoList);

  return (
    <div className=" text-center flex  justify-center  ">
      <div className=" lg:w-6/12   mx-auto border-2 border-gray-200 rounded-lg py-5">
        <h1 className=" py-8 text-6xl font-bold text-white ">Todo List</h1>
        <div className="">
          <input
            placeholder="write your task"
            value={inputTodo}
            onChange={(e) => setInputTodo(e.target.value)}
            type="text"
            className="w-5/12 border border-black px-2 m-4  rounded-md mx-4 lg:w-8/12 ml-14 h-12"
          />
          <button
            className="bg-blue-600 px-6 py-3 text-white rounded-lg mx-4 hover:bg-black  duration-100 ease-in"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        {/* todo container */}
        <div className=" w-11/12 md:w-9/12 ml-8 md:ml-16 flex flex-col gap-4 ">
          {todoList.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              todoList={todoList}
              setTodoList={setTodoList}
              handleDelete={handleDelete}
            />
          ))}
        </div>
        <div>
          <button
            className="bg-blue-600 px-32 hover:text-black hover:bg-red-500 duration-100 ease-out py-3 text-white rounded-lg mx-4 mt-8"
            onClick={() => {
              setTodoList([]);
            }}
          >
            clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
