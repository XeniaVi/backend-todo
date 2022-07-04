export const validateNewTodo = (req, res, next) => {
  let post = req.body;
  const length = Object.keys(post).length;
  if (
    length !== 2 ||
    !(post.value || post.value.length) ||
    typeof post.completed !== "boolean"
  )
    throw new Error("Wrong data!");
  next();
};

export const validateUpdateTodo = (req, res, next) => {
  const post = req.body;
  const length = Object.keys(post).length;

  if (
    (length !== 1 && !(post.value || post.value.length)) ||
    (length !== 1 && typeof post.completed !== "boolean")
  )
    throw new Error("Wrong data!");
  next();
};
