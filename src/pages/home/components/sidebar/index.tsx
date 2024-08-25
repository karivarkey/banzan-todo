import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { IconContext } from "react-icons";

interface Todo {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
  category: string;
}

interface SideBarProps {
  todos: Todo[];
  onCategoryChange: (categories: string[]) => void;
}

const SideBar = ({ todos, onCategoryChange }: SideBarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set()
  );

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const uniqueCategories = Array.from(
    new Set(todos.map((todo) => todo.category))
  );

  const handleCheckboxChange = (category: string) => {
    const updatedSelectedCategories = new Set(selectedCategories);
    if (updatedSelectedCategories.has(category)) {
      updatedSelectedCategories.delete(category);
    } else {
      updatedSelectedCategories.add(category);
    }
    setSelectedCategories(updatedSelectedCategories);
    onCategoryChange(Array.from(updatedSelectedCategories));
  };

  return (
    <div className="h-screen mx-5 flex flex-col justify-center font-inter">
      <div
        className={`bg-gray-200 rounded-lg h-5/6 flex flex-col gap-3 transition-all duration-300 ease-in-out
          ${isCollapsed ? "w-16" : "w-64"}`}
      >
        <div className="flex justify-between py-3 items-center px-5 w-full">
          <IconContext.Provider
            value={{
              color: "gray",
              className: "global-class-name",
              size: "2em",
            }}
          >
            <button onClick={toggleSidebar}>
              <IoArrowBack
                className={`transition-transform duration-300 ease-in-out ${
                  isCollapsed ? "rotate-180" : ""
                }`}
              />
            </button>
          </IconContext.Provider>
        </div>
        {!isCollapsed && (
          <div className="text-lg px-8 font-bold text-gray-500 underline-offset-2 underline">
            CATEGORIES
          </div>
        )}
        {!isCollapsed && (
          <div className="flex flex-col gap-2 px-4">
            {uniqueCategories.map((category) => (
              <label
                key={category}
                className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-gray-900"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.has(category)}
                  onChange={() => handleCheckboxChange(category)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                {category}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
