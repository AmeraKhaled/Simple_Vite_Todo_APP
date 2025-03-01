import { useState } from "react";
import { useParams } from "react-router-dom";

function TodoForm({ addTodo }) {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTodo(task, description);
            setTask("");
            setDescription("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full h-screen">
            <div className="w-full max-w-2xl bg-gray-900/80 shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white text-center mb-4">Add a New Task</h2>

                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="form-control"
                    placeholder="Enter task title..."
                />

                {/* Description Textarea (Now below the input) */}
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    placeholder="Enter task details..."
                ></textarea>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full mt-4 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
                >
                    Add Task
                </button>
            </div>
        </form>
    );
}
export default TodoForm;