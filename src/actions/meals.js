
// ADD_MEAL
export const addMeal = (meal) => ({
  type: 'ADD_MEAL',
  meal
});

// REMOVE_MEAL
export const removeMeal = ({ id } = {}) => ({
  type: 'REMOVE_MEAL',
  id
});

// CLEAR_MEALS
export const clearMeals = () => ({
  type: 'CLEAR_MEALS'
});
