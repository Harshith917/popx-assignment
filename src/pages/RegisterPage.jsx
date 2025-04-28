import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/account"); // after account creation, move to account page
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2">Create your PopX account</h1>

      <form onSubmit={handleRegister} className="space-y-4">
        <input className="w-full border p-3 rounded-md" type="text" placeholder="Full Name" required />
        <input className="w-full border p-3 rounded-md" type="tel" placeholder="Mobile Number" required />
        <input className="w-full border p-3 rounded-md" type="email" placeholder="Email Address" required />
        <input className="w-full border p-3 rounded-md" type="password" placeholder="Password" required />
        <input className="w-full border p-3 rounded-md" type="text" placeholder="Company Name" required />

        <div>
          <p className="mb-2">Are you an Agency?</p>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input type="radio" name="agency" className="mr-2 cursor-pointer" required /> Yes
            </label>
            <label className="flex items-center">
              <input type="radio" name="agency" className="mr-2 cursor-pointer" required /> No
            </label>
          </div>
        </div>

        <button className="w-full bg-purple-600 text-white py-3 rounded-md cursor-pointer active:bg-purple-500" type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default RegisterPage;
