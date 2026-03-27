import { useEffect, useReducer, useRef, useState } from "react";
import { forumReducer, initialState } from "../store/forumReducer";
import { useThreads } from "../context/ThreadContext";
import PostCard from "../components/PostCard";
import Skeleton from "../components/Skeleton";
import CommentTree from "../components/CommentTree";

// ✅ THREAD CARD
function ThreadCard({ thread }) {
  const { deleteThread } = useThreads();

  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      body: newComment,
      user: { username: "You" },
      replies: []
    };

    setComments(prev => [comment, ...prev]);
    setNewComment("");
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-sm mb-6">

      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        {thread.title}
      </h2>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        {thread.content}
      </p>

      <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        {thread.author} • {thread.createdAt}
      </div>

      {/* ACTIONS */}
      <div className="flex gap-4 mt-3">

        <button
          onClick={() => setShowComments(!showComments)}
          className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
        >
          {showComments ? "Hide Comments" : "Add Comment"}
        </button>

        <button
          onClick={() => deleteThread(thread.id)}
          className="text-red-500 text-sm hover:underline"
        >
          Delete
        </button>
      </div>

      {/* COMMENT SECTION */}
      {showComments && (
        <div className="mt-4">

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-lg bg-white text-black"
            />

            <button
              onClick={handleAddComment}
              className="bg-blue-500 text-white px-3 rounded-lg"
            >
              Post
            </button>
          </div>

          <div className="mt-4">
            <CommentTree
              comments={comments}
              setComments={setComments}
            />
          </div>

        </div>
      )}
    </div>
  );
}

function PostsPage() {
  const [state, dispatch] = useReducer(forumReducer, initialState);
  const { threads } = useThreads();
  const loader = useRef(null);

  useEffect(() => {
    fetchPosts();
  }, [state.page]);

  const fetchPosts = async () => {
    dispatch({ type: "LOADING" });

    const skip = (state.page - 1) * 10;

    const res = await fetch(
      `https://dummyjson.com/posts?limit=10&skip=${skip}`
    );
    const data = await res.json();

    if (data.posts.length === 0) {
      dispatch({ type: "NO_MORE" });
    } else {
      dispatch({ type: "SET_POSTS", payload: data.posts });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && state.hasMore && !state.loading) {
        dispatch({ type: "NEXT_PAGE" });
      }
    });

    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, [state.hasMore, state.loading]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-28">

      <div className="max-w-3xl mx-auto px-4">

        {/* THREADS */}
        {threads.length > 0 && (
          <>
            <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
              Your Threads
            </h2>

            {threads.map(thread => (
              <ThreadCard key={thread.id} thread={thread} />
            ))}
          </>
        )}

        {/* POSTS */}
        <h2 className="text-xl font-bold mt-10 mb-6 text-gray-900 dark:text-white">
          Public Posts
        </h2>

        {state.posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}

        {state.loading && <Skeleton />}
        <div ref={loader} className="h-10"></div>

      </div>
    </div>
  );
}

export default PostsPage;