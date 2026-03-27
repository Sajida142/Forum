import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import CreateThreadModal from "./CreateThreadModal";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [spaOpen, setSpaOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navigate = useNavigate();
  const { user, logout, continueAsGuest } = useAuth();

  // Theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm px-12 py-6 flex justify-between items-center z-50">

      {/* LEFT */}
      <div>
        <button
          onClick={() => setSpaOpen(!spaOpen)}
          className="font-extrabold text-4xl tracking-wide text-blue-600 dark:text-blue-400"
        >
          CONNECT
        </button>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6">

        {/* THEME */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-3xl"
        >
          {darkMode ? "🌛" : "☀️"}
        </button>

        {/* PROFILE */}
        <button
          onClick={() => setProfileOpen(!profileOpen)}
          className="w-14 h-14 rounded-full bg-blue-100 dark:bg-gray-700 flex items-center justify-center text-2xl"
        >
          👤
        </button>
      </div>

      {/* 🔥 SPA DROPDOWN (FIXED) */}
      {spaOpen && (
        <div className="fixed top-20 left-10 w-60 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl shadow-xl p-3 z-50">

          <button
            onClick={() => {
              navigate("/about");
              setSpaOpen(false);
            }}
            className="block w-full text-left px-4 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700"
          >
            Home
          </button>

          <button
            onClick={() => {
              if (!user) navigate("/login");
              else if (user.isGuest)
                alert("Guests cannot create threads.");
              else setShowModal(true);
              setSpaOpen(false);
            }}
            className="block w-full text-left px-4 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700"
          >
            + Create Thread
          </button>

          <button
            onClick={() => {
              navigate("/threads");
              setSpaOpen(false);
            }}
            className="block w-full text-left px-4 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700"
          >
            View Threads
          </button>
        </div>
      )}

      {/* 🔥 PROFILE DROPDOWN (FIXED) */}
      {profileOpen && (
        <div className="fixed top-20 right-10 w-52 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl shadow-xl p-3 z-50">

          {!user && (
            <>
              <button
                onClick={() => {
                  navigate("/login");
                  setProfileOpen(false);
                }}
                className="block w-full text-left px-4 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700"
              >
                Login
              </button>

              <button
                onClick={() => {
                  navigate("/signup");
                  setProfileOpen(false);
                }}
                className="block w-full text-left px-4 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700"
              >
                Signup
              </button>

              <button
                onClick={() => {
                  continueAsGuest();
                  navigate("/about");
                  setProfileOpen(false);
                }}
                className="block w-full text-left px-4 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700"
              >
                Continue as Guest
              </button>
            </>
          )}

          {user && (
            <>
              <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300">
                {user.isGuest
                  ? "Guest User"
                  : `Hello, ${user.username}`}
              </div>

              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="block w-full text-left px-4 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-900 text-red-500"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}

      {/* MODAL */}
      {showModal && (
        <CreateThreadModal closeModal={() => setShowModal(false)} />
      )}
    </header>
  );
}

export default Header;