import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AccountPage from "./pages/AccountPage";

function App() {
  return (
    <Router>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-[375px] bg-white shadow-lg min-h-screen">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
