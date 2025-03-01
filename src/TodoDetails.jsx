import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TodoDetails({ todos }) {
    const { id } = useParams();
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        const foundTodo = storedTodos.find((t) => t.id.toString() === id);
        setTodo(foundTodo);
    }, [id]);

    if (!todo) {
        return <p className="text-center text-red-500">Todo not found</p>;
    }

    return (
        <div className="text-center p-4">
            <h2 className="text-2xl font-bold">{todo.task}</h2>
            <p className="mt-2">Status: {todo.status}</p>
            <p className="mt-2">Description: {todo.description}</p>
            <Link to="/" className="mt-4 block text-blue-600">Go Back</Link>
        </div> 
    );
}
export default TodoDetails;
