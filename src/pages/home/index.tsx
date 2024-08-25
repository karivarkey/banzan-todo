import { useEffect, useState } from "react";
import { getAuth, User } from "firebase/auth";
import app from "../../services/firebase";
import ToDo from "./components/todo";
import SideBar from "./components/sidebar";
import { Todo } from "./types";
import ThemedDatePicker from "./components/calendar";
import EmojiPicker from "emoji-picker-react";

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
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");
  const [newTodoDueDate, setNewTodoDueDate] = useState<Date | undefined>(
    new Date()
  );
  const [newTodoCategory, setNewTodoCategory] = useState("📚");
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

  const toggleTodoComplete = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
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

  const handleAddTodo = () => {
    if (newTodoTitle.trim() === "") return; // Prevent adding empty todos

    const newTodo: Todo = {
      id: todos.length + 1, // Simple ID generation; consider a more robust method
      title: newTodoTitle,
      description: newTodoDescription,
      dueDate: newTodoDueDate?.toISOString().split("T")[0] || "",
      completed: false,
      category: newTodoCategory,
    };
    setTodos([...todos, newTodo]);
    setFilteredTodos([...todos, newTodo]); // Show the new todo immediately
    setNewTodoTitle("");
    setNewTodoDescription("");
    setNewTodoDueDate(undefined);
    setNewTodoCategory("📚");
    setEmojiPickerVisible(false); // Hide emoji picker after adding todo
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
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      <SideBar todos={todos} onCategoryChange={handleCategoryChange} />
      <div className="flex-1 p-4 md:p-6 flex flex-col items-center">
        <div className="text-xl py-2 md:py-3">
          Welcome <span className="font-bold">{userName}</span>
        </div>
        <div className="flex-1 w-full max-w-4xl mx-auto">
          <ToDo todos={filteredTodos} onToggleComplete={toggleTodoComplete} />
          <div className="mt-6 p-4 md:p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl md:text-2xl mb-4 font-semibold">
              Add a New Todo
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-medium">Title</label>
                <input
                  type="text"
                  value={newTodoTitle}
                  onChange={(e) => setNewTodoTitle(e.target.value)}
                  placeholder="Enter todo title"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium">Description</label>
                <input
                  type="text"
                  value={newTodoDescription}
                  onChange={(e) => setNewTodoDescription(e.target.value)}
                  placeholder="Enter description"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium">Due Date</label>
                <ThemedDatePicker
                  selected={newTodoDueDate}
                  onChange={setNewTodoDueDate}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium">Category</label>
                <div className="relative">
                  <button
                    onClick={() => setEmojiPickerVisible(!emojiPickerVisible)}
                    className="bg-gray-200 p-2 rounded-lg w-full text-left"
                  >
                    {newTodoCategory || "Select an emoji"}
                  </button>
                  {emojiPickerVisible && (
                    <EmojiPicker
                      onEmojiClick={(emojiObject) => {
                        setNewTodoCategory(emojiObject.emoji);
                        setEmojiPickerVisible(false); // Hide emoji picker after selection
                      }}
                      className="absolute top-full mt-2 z-10"
                    />
                  )}
                </div>
              </div>
              <button
                onClick={handleAddTodo}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 w-full"
              >
                Add Todo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
