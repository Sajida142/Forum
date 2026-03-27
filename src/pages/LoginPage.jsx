import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login, continueAsGuest } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) return alert("All fields required");

    login({ username, isGuest: false });
    navigate("/about");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900 px-4">

      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl p-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
          Login
        </button>

        <button
          type="button"
          onClick={() => {
            continueAsGuest();
            navigate("/about");
          }}
          className="w-full mt-4 border border-gray-400 dark:border-gray-600 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Continue as Guest
        </button>
      </form>

    </div>
  );
}