import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="flex flex-col justify-end items-center h-screen p-8">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="w-full space-y-4">
        <Link to="/register">
          <button className="w-full bg-purple-600 text-white py-3 rounded-md mb-3 cursor-pointer active:bg-purple-500">Create Account</button>
        </Link>
        <Link to="/login">
          <button className="w-full bg-purple-100 text-purple-600 py-3 rounded-md cursor-pointer active:bg-purple-500">Already Registered? Login</button>
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
