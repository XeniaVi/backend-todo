export const prepareObject = (item) => {
  const objectItem = item.toJSON();
  const { _id, value, completed, isEditing } = objectItem;
  return {
    id: _id,
    value: value,
    completed: completed,
    isEditing: isEditing,
  };
};
