import { useState } from "react";
import { useThreads } from "../context/ThreadContext";
import { useAuth } from "../context/AuthContext";

export default function CreateThreadModal({ closeModal }) {
  const { addThread } = useThreads();
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("All fields required");
      return;
    }

    addThread(title, content, user.username);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl w-full max-w-md p-8">

        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Create New Thread
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Thread Title"
            className="w-full p-3 mb-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Write your thoughts..."
            rows="4"
            className="w-full p-3 mb-6 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 border border-gray-400 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
            >
              Post
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}