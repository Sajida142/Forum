export const initialState = {
  posts: [],
  loading: false,
  page: 1,
  hasMore: true
};

// 🔁 Recursive helper to add reply
function addReplyRecursive(comments, parentId, reply) {
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
}

export function forumReducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };

    case "SET_POSTS":
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        loading: false
      };

    case "NEXT_PAGE":
      return { ...state, page: state.page + 1 };

    case "NO_MORE":
      return { ...state, hasMore: false };

    // ❤️ LIKE POST
    case "LIKE_POST":
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload
            ? { ...post, likes: (post.likes || 0) + 1 }
            : post
        )
      };

    // 💬 ADD REPLY
    case "ADD_REPLY":
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.postId
            ? {
                ...post,
                comments: addReplyRecursive(
                  post.comments,
                  action.payload.commentId,
                  action.payload.reply
                )
              }
            : post
        )
      };

    default:
      return state;
  }
}