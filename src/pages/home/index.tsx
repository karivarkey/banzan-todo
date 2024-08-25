import app from "../../services/firebase";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const auth = getAuth(app);
    const user = auth.currentUser;
    if (!user) {
      console.log("no user");
    } else {
      console.log(user.uid);
    }
  }, []);
  return (
    <div className="flex h-screen bg-gray-100">
      <div>left bar</div>
      <div>right bar</div>
    </div>
  );
};

export default Home;
