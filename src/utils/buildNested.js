export function buildNestedComments(comments) {
  return comments.map(comment => ({
    ...comment,
    replies: [
      {
        id: comment.id + 1000,
        body: "Thats awesome",
        user: { username: "starlightt" },
        replies: []
      }
    ]
  }));
}