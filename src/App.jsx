import { useState } from 'react'
import { useEffect } from 'react'

import './App.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import TodoDetails from './TodoDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (task, description) => {
    setTodos([...todos, { id: Date.now(), task, description, status: "in-progress" }]);
  };

  const toggleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: todo.status === "in-progress" ? "completed" : "in-progress" } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "all") return true;
    return todo.status === filter;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  return (
    <Router>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-600">Todo App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TodoForm addTodo={addTodo} />
                <div className="flex space-x-4 mt-4">
                  <button onClick={() => setFilter("all")} className="px-4 py-2 bg-gray-500 text-white rounded">All</button>
                  <button onClick={() => setFilter("in-progress")} className="px-4 py-2 bg-yellow-500 text-white rounded">In Progress</button>
                  <button onClick={() => setFilter("completed")} className="px-4 py-2 bg-green-500 text-white rounded">Completed</button>
                </div>
                <TodoList todos={filteredTodos} toggleStatus={toggleStatus} deleteTodo={deleteTodo} />
              </>
            }
          />
          <Route path="/todo/:id" element={<TodoDetails todos={todos} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
