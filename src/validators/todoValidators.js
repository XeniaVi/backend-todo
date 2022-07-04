export const validateNewTodo = (req, res, next) => {
  const { value, completed } = req.body;

  if (!value || typeof value !== "string" || typeof completed !== "boolean") {
    throw new Error("Wrong data!");
  }

  next();
};

export const validateUpdateTodo = (req, res, next) => {
  const { value, completed } = req.body;

  if (value === undefined && completed === undefined) {
    throw new Error("Wrong data!");
  }

  if (value && (typeof value !== "string" || !value.length)) {
    throw new Error("Wrong data!");
  }

  if (completed && typeof completed !== "boolean") {
    throw new Error("Wrong data!");
  }

  next();
};
