import uuid from 'uuid';


const initialFoodsState = {
  items: [],
  isFetching: false,
  failedLoad: false,
  isAdding: false,
  failedAdd: false,
  isEditing: false,
  failedEdit: false,
  isRemoving: false,
  failedRemove: false
};

export default (prevState = initialFoodsState, action) => {
    switch (action.type) {
        case 'FETCH_FOODS_REQUEST':
            return {
              ...prevState,
              isFetching: true
            };
        case 'FETCH_FOODS_SUCCESS':
            return {
              items: action.foods,
              isFetching: false
            };
        case 'FETCH_FOODS_FAILURE':
            return {
              ...prevState,
              isFetching: false,
              failedLoad: true
            };
        case 'ADD_FOOD_REQUEST':
            return {
              ...prevState,
              isAdding: true
            };
        case 'ADD_FOOD_SUCCESS':
            return {
              ...prevState,
              isAdding: false,
              items: [ ...prevState.items, action.food ]
            };
        case 'ADD_FOOD_FAILURE':
            return {
              ...prevState,
              isAdding: false,
              failedAdd: true
            }
        case 'EDIT_FOOD_REQUEST':
            return {
              ...prevState,
              isEditing: true
            };
        case 'EDIT_FOOD_SUCCESS':
            return {
              ...prevState,
              isEditing: false,
              items: prevState.items.map(food => food._id === action._id ? { ...food, ...action.updates }: food)
            };
        case 'EDIT_FOOD_FAILURE':
            return {
              ...prevState,
              isEditing: false,
              failedEdit: true
            };
        case 'REMOVE_FOOD_REQUEST':
            return {
              ...prevState,
              isRemoving: true
            };
        case 'REMOVE_FOOD_SUCCESS':
            return {
              ...prevState,
              isRemoving: false,
              items: prevState.items.filter(food => food._id !== action._id)
            };
        case 'REMOVE_FOOD_FAILURE':
            return {
              ...prevState,
              isRemoving: false,
              failedRemove: true
            };
        default:
            return prevState;
    }
};
