import app from "../../services/firebase";
import { getAuth, User } from "firebase/auth";
import { useEffect, useState } from "react";

import ToDo from "./components/todo";
import SideBar from "./components/sidebar";

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  useEffect(() => {
    const auth = getAuth(app);
    const currentUser = auth.currentUser;

    if (!currentUser) {
      console.log("No user");
    } else {
      setUser(currentUser);
      currentUser.displayName
        ? setUserName(currentUser.displayName)
        : setUserName(currentUser.email);
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="">
        <SideBar />
      </div>
      <div className="flex-col items-center justify-center font-inter">
        <div className="text-xl py-3">
          Welcome <span className="font-bold">{userName}</span>
        </div>
        <div className="flex w-full">
          <ToDo />
        </div>
      </div>
    </div>
  );
};

export default Home;
