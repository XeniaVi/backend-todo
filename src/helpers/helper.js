export const prepareTodoObject = (item) => {
  const objectItem = item.toJSON();
  const { _id, value, completed } = objectItem;
  return {
    id: _id,
    value: value,
    completed: completed,
    isEditing: false,
  };
};
