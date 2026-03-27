import { createContext, useContext, useState, useEffect } from "react";

const ThreadContext = createContext();

export function ThreadProvider({ children }) {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("threads");
    if (saved) setThreads(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("threads", JSON.stringify(threads));
  }, [threads]);

  const addThread = (title, content, author) => {
    const newThread = {
      id: Date.now(),
      title,
      content,
      author,
      createdAt: new Date().toLocaleString()
    };

    setThreads(prev => [newThread, ...prev]);
  };

  // ✅ DELETE THREAD
  const deleteThread = (id) => {
    setThreads(prev => prev.filter(thread => thread.id !== id));
  };

  return (
    <ThreadContext.Provider value={{ threads, addThread, deleteThread }}>
      {children}
    </ThreadContext.Provider>
  );
}

export function useThreads() {
  return useContext(ThreadContext);
}