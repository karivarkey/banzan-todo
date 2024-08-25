import { useState } from "react";

interface Todo {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

const ToDo = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Study the basics of React and build a small project.",
      dueDate: "2024-08-30",
      completed: false,
    },
    {
      id: 2,
      title: "Buy Groceries",
      description: "Get milk, bread, and eggs from the store.",
      dueDate: "2024-08-25",
      completed: false,
    },
    {
      id: 3,
      title: "Read a Book",
      description: "Finish reading 'Atomic Habits' by James Clear.",
      dueDate: "2024-09-01",
      completed: false,
    },
  ]);

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const [expandedTodoId, setExpandedTodoId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedTodoId(expandedTodoId === id ? null : id);
  };

  return (
    <div className="max-w-2xl mx-auto p-5 font-inter">
      <h1 className="text-3xl font-bold text-center mb-8">My ToDo List</h1>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`bg-white shadow-md rounded-lg p-4 border-l-4 ${
              todo.completed ? "border-green-500" : "border-blue-500"
            }`}
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleExpand(todo.id)}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                  className="form-checkbox h-5 w-5 text-blue-600 rounded"
                />
                <h2
                  className={`ml-3 text-lg font-semibold ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.title}
                </h2>
              </div>
              <span className="text-gray-600">{todo.dueDate}</span>
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
