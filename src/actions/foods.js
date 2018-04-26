// ADD_FOOD
export const addFood = (food) => ({
  type: 'ADD_FOOD',
  food
});

// EDIT_FOOD
export const editFood = (id, updates) => ({
  type: 'EDIT_FOOD',
  id,
  updates
});

// REMOVE_FOOD
export const removeFood = ({ id } = {}) => ({
  type: 'REMOVE_FOOD',
  id
});
