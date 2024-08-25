import { useEffect, useState } from "react";
import { getAuth, User } from "firebase/auth";
import app from "../../services/firebase";
import ToDo from "./components/todo";
import SideBar from "./components/sidebar";
import { Todo } from "./types"; // Import the Todo type
import { Calendar } from "@/components/ui/calendar";

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Study the basics of React and build a small project.",
      dueDate: "2024-08-30",
      completed: false,
      category: "📚",
    },
    {
      id: 2,
      title: "Buy Groceries",
      description: "Get milk, bread, and eggs from the store.",
      dueDate: "2024-08-25",
      completed: false,
      category: "🛒",
    },
    {
      id: 3,
      title: "Read a Book",
      description: "Finish reading 'Atomic Habits' by James Clear.",
      dueDate: "2024-09-01",
      completed: false,
      category: "📖",
    },
  ]);

  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState<Date | undefined>(new Date());

  const toggleTodoComplete = (id: number) => {
    // Create a shallow copy of the todos array
    const temp = [...todos];

    // Modify the temp array
    const updatedTodos = temp.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    // Set the updated todos as the new state
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const handleCategoryChange = (categories: string[]) => {
    setFilteredTodos(
      categories.length === 0
        ? todos
        : todos.filter((todo) => categories.includes(todo.category))
    );
  };

  useEffect(() => {
    const auth = getAuth(app);
    const currentUser = auth.currentUser;

    if (!currentUser) {
      console.log("No user");
    } else {
      setUser(currentUser);
      setUserName(currentUser.displayName || currentUser.email);
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar todos={todos} onCategoryChange={handleCategoryChange} />
      <div className="flex-1 p-4 flex flex-col items-center justify-center">
        <div className="text-xl py-3">
          Welcome <span className="font-bold">{userName}</span>
        </div>
        <div className="flex-1 w-full max-w-4xl mx-auto">
          <ToDo todos={filteredTodos} onToggleComplete={toggleTodoComplete} />
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
