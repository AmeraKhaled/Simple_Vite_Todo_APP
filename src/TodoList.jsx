import React from 'react'
import { Link } from "react-router-dom";

function TodoList({ todos, toggleStatus, deleteTodo }) {
    return (
        <div className="mt-6 w-3/4">
            {todos.length === 0 ? (
                <p className="text-gray-400 text-center">No tasks available. Add a new task!</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {todos.map((todo) => (
                        <div
                            key={todo.id}
                            className="relative bg-gray-900 text-white shadow-xl rounded-lg p-6 border border-gray-700"
                        >
                            <Link to={`/todo/${todo.id}`} className="text-xl font-semibold hover:text-blue-400">
                                {todo.task}
                            </Link>
                            <p className="text-gray-300 mt-2 text-m">{todo.description || "No description provided."}</p>

                            <div className="flex justify-between items-center mt-4">
                                <span
                                    className={`px-3 py-1 rounded text-white text-sm ${todo.status === "completed" ? "bg-green-500" : "bg-yellow-500"
                                        }`}
                                >
                                    {todo.status}
                                </span>
                                <div>
                                    <button
                                        onClick={() => toggleStatus(todo.id)}
                                        className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
                                    >
                                        {todo.status === "in-progress" ? "Complete" : "Undo"}
                                    </button>
                                    <button
                                        onClick={() => deleteTodo(todo.id)}
                                        className="ml-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TodoList
