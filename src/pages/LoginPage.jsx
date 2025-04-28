import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/account");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2">Signin to your PopX account</h1>
      <p className="text-gray-500 mb-6">Access your account by entering your email and password below.</p>

      <form onSubmit={handleLogin} className="space-y-4">
        <input className="w-full border p-3 rounded-md " type="email" placeholder="Enter email address" required />
        <input className="w-full border p-3 rounded-md" type="password" placeholder="Enter password" required />
        <button className="w-full bg-gray-400 text-white py-3 rounded-md hover:bg-purple-600 cursor-pointer transition-all duration-200 active:bg-purple-500" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
