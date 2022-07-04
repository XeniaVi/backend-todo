export const prepareTodoObject = (item) => {
  const objectItem = item.toJSON();
  const { _id, value, completed } = objectItem;
  return {
    id: _id,
    value: value,
    completed: completed,
  };
};

export const validateFields = (post) => {
  const length = Object.keys(post).length;
  if (
    length === 2 &&
    typeof post.value === "string" &&
    typeof post.completed === "boolean"
  )
    return post;
  if (length === 1 && typeof post.value === "string") return post;
  if (length === 1 && typeof post.completed === "boolean") return post;
  return {};
};
