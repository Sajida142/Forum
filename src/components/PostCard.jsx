import { useState } from "react";
import CommentTree from "./CommentTree";
import { buildNestedComments } from "../utils/buildNested";

function PostCard({ post }) {
  const [show, setShow] = useState(false);
  const [comments, setComments] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [likes, setLikes] = useState(post.reactions?.likes || 0);
  const [liked, setLiked] = useState(false);

  const [dislikes, setDislikes] = useState(0);
  const [disliked, setDisliked] = useState(false);

  const imageUrl = `https://picsum.photos/seed/${post.id}/800/400`;

  const toggleComments = async () => {
    if (!loaded) {
      try {
        const res = await fetch(
          `https://dummyjson.com/posts/${post.id}/comments`
        );
        const data = await res.json();

        const nested = buildNestedComments(data.comments);
        setComments(nested);
        setLoaded(true);
      } catch (err) {
        console.error("Failed to load comments", err);
      }
    }

    setShow(!show);
  };

  const handleLike = () => {
    setLikes(prev => (liked ? prev - 1 : prev + 1));
    setLiked(!liked);
  };

  const handleDislike = () => {
    setDislikes(prev => (disliked ? prev - 1 : prev + 1));
    setDisliked(!disliked);
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mb-6 cursor-pointer">

      <img
        src={imageUrl}
        alt="post"
        className="w-full h-56 object-cover rounded-xl mb-4"
      />

      <h2 className="font-bold text-xl text-gray-900 dark:text-white">
        {post.title}
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mt-3">
        {post.body}
      </p>

      <div className="flex items-center gap-4 mt-5">

        <button
          onClick={handleLike}
          className={`px-4 py-1.5 rounded-lg text-sm ${
            liked
              ? "bg-red-500 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          👍 {likes}
        </button>

        <button
          onClick={handleDislike}
          className={`px-4 py-1.5 rounded-lg text-sm ${
            disliked
              ? "bg-gray-700 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          👎 {dislikes}
        </button>

        <button
          onClick={toggleComments}
          className="text-blue-600 text-sm hover:underline"
        >
          {show ? "Hide Comments" : "Show Comments"}
        </button>
      </div>

      {show && (
        <div className="mt-5 border-t pt-4">
          <CommentTree
            comments={comments}
            setComments={setComments}
          />
        </div>
      )}
    </div>
  );
}

export default PostCard;