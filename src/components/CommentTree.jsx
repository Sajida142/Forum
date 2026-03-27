import { useState } from "react";

function CommentTree({ comments, setComments }) {
  const [activeReply, setActiveReply] = useState(null);
  const [replyText, setReplyText] = useState("");

  const addReplyRecursive = (comments, parentId, reply) => {
    return comments.map(comment => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), reply]
        };
      }

      if (comment.replies) {
        return {
          ...comment,
          replies: addReplyRecursive(comment.replies, parentId, reply)
        };
      }

      return comment;
    });
  };

  const handleReplySubmit = (commentId) => {
    if (!replyText.trim()) return;

    const newReply = {
      id: Date.now(),
      body: replyText,
      user: { username: "You" },
      replies: []
    };

    const updated = addReplyRecursive(comments, commentId, newReply);

    setComments(updated);
    setReplyText("");
    setActiveReply(null);
  };

  return (
    <div className="mt-4 pl-4 border-l-2 border-gray-200 dark:border-gray-600 w-full">
      {comments.map(comment => (
        <div
          key={comment.id}
          className="mb-4 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700"
        >
          <p className="text-gray-800 dark:text-gray-200">
            {comment.body}
          </p>

          <small className="text-gray-500 dark:text-gray-400">
            {comment.user?.username}
          </small>

          {/* Reply Button */}
          <div>
            <button
              onClick={() =>
                setActiveReply(
                  activeReply === comment.id ? null : comment.id
                )
              }
              className="text-blue-600 dark:text-blue-400 text-sm mt-1 hover:underline"
            >
              Reply
            </button>
          </div>

          {/* Reply Box */}
          {activeReply === comment.id && (
            <div className="mt-2">
              <textarea
                className="w-full max-w-full h-24 resize-none border border-gray-300 dark:border-gray-600 
                bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />

              <div className="flex justify-end">
                <button
                  onClick={() => handleReplySubmit(comment.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-lg mt-2"
                >
                  Submit
                </button>
              </div>
            </div>
          )}

          {/* Nested Replies */}
          {comment.replies && comment.replies.length > 0 && (
            <CommentTree
              comments={comment.replies}
              setComments={setComments}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default CommentTree;