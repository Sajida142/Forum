import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("forumUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem("forumUser", JSON.stringify(userData));
    setUser(userData);
  };

  const signup = (userData) => {
    localStorage.setItem("forumUser", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("forumUser");
    setUser(null);
  };

  const continueAsGuest = () => {
    setUser({ username: "Guest", isGuest: true });
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, continueAsGuest }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}