import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { IconContext } from "react-icons";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
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
      </div>
    </div>
  );
};

export default SideBar;
