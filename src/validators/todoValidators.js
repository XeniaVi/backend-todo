export const validateNewTodo = (req, res, next) => {
  let post = req.body;
  const length = Object.keys(post).length;
  if (
    length !== 2 ||
    typeof post.value !== "string" ||
    typeof post.completed !== "boolean"
  )
    throw new Error("Wrong data!");
  next();
};

export const validateUpdateTodo = (req, res, next) => {
  let post = req.body;
  const length = Object.keys(post).length;

  if (
    length !== 1 ||
    (post.hasOwnProperty("value") && typeof post.value !== "string") ||
    (post.hasOwnProperty("completed") && typeof post.completed !== "boolean") ||
    (!post.hasOwnProperty("completed") && !post.hasOwnProperty("value"))
  )
    throw new Error("Wrong data!");
  next();
};
