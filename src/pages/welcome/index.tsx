import { useNavigate } from "react-router-dom";
import avatar from "./asssets/images/avatar.png";
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center font-inter">
        <img src={avatar} className="max-h-52" />
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl">
            Welcome to the <span className="font-bold">ToDo App! </span>
          </h1>
          <p className="text-lg">
            Let us get things done now!{" "}
            <span className="text-blue-900 font-bold"> Let's Go </span>
          </p>
          <div className="flex items-center justify-center">
            <button
              className="bg-slate-300 px-4 py-2 rounded-lg font-bold"
              onClick={() => navigate("/login")}
            >
              Let's ToDo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
