import './App.css';
import React from "react";
import ReactDOM from "react-dom/client"; 
import TodoList from './todo-list/todolist.js';

const root = ReactDOM.createRoot(document.getElementById("root"))

function App() {
  return (
    <TodoList/>
  );
}

root.render(<App/>);
