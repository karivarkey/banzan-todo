import { useState } from "react";
import { Todo } from "../../types";

interface ToDoProps {
  todos: Todo[];
  onToggleComplete: (id: number) => void;
}

const ToDo = ({ todos, onToggleComplete }: ToDoProps) => {
  const [expandedTodoId, setExpandedTodoId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedTodoId(expandedTodoId === id ? null : id);
  };

  const isLate = (dueDate: string): boolean => {
    const today = new Date();
    const due = new Date(dueDate);
    return due < today;
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    e.stopPropagation(); // Prevent triggering the parent onClick
    onToggleComplete(id);
  };

  return (
    <div className="w-full p-4 font-inter">
      <h1 className="text-3xl font-bold text-center mb-8">My ToDo List</h1>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`bg-white shadow-md rounded-lg p-4 border-l-4 ${
              todo.completed
                ? "border-green-500"
                : isLate(todo.dueDate)
                ? "border-red-500"
                : "border-blue-500"
            }`}
            onClick={() => toggleExpand(todo.id)} // Expands or collapses the todo
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer">
              <div className="flex items-center w-full">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => handleCheckboxChange(e, todo.id)}
                  className="form-checkbox h-5 w-5 text-blue-600 rounded"
                />
                <h2
                  className={`ml-3 text-lg font-semibold w-full ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.title}
                </h2>
                <span className="ml-3 text-xl">{todo.category}</span>
              </div>
              <span className="text-gray-600 mt-2 md:mt-0 md:ml-4">
                {todo.dueDate}
              </span>
            </div>
            {expandedTodoId === todo.id && (
              <div className="mt-4 text-gray-700">
                <p>{todo.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
