import app from "../../services/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import avatar from "./assets/images/avatar.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function login() {
    const auth = getAuth(app);

    toast.promise(
      signInWithEmailAndPassword(auth, email, password).then((user) => {
        navigate("/home");
      }),
      {
        loading: "Loading",
        success: "Logged in",
        error: "An error occurred",
      }
    );
  }

  return (
    <div className="flex justify-center items-center h-screen font-inter">
      <div className="flex flex-col items-center justify-center border-2 rounded-3xl p-10 gap-12">
        <div className="flex flex-col items-center">
          <img src={avatar} className="max-h-48" />
          <p className="font-semibold">Let's get you started!</p>
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <h1>Email</h1>
            <input
              type="email"
              placeholder="Email"
              className=" rounded-lg border-2 border-slate-200  focus:outline  focus:outline-slate-400 py-1 pl-1"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1>Password</h1>
            <input
              type="password"
              placeholder="Password"
              className=" rounded-lg border-2 border-slate-200  focus:outline  focus:outline-slate-400 py-1 pl-1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button
          className="bg-slate-200 px-4 py-2 rounded-lg font-medium hover:bg-slate-400 transition-all "
          onClick={login}
        >
          Login!
        </button>
      </div>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#fff",
            color: "#363636",
          },

          // Default options for specific types
        }}
      />
    </div>
  );
};

export default Login;
