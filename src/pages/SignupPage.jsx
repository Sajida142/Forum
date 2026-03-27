import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (!username || !password) return alert("All fields required");

    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900 px-4">

      <form
        onSubmit={handleSignup}
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl p-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          Create Account
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
          Signup
        </button>

        <p className="text-sm text-center mt-6 text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 dark:text-blue-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </form>

    </div>
  );
}