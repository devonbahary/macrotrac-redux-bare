import axios from 'axios';

// FETCH_FOODS_REQUEST
export const fetchFoodRequest = () => ({
  type: 'FETCH_FOODS_REQUEST'
});

// FETCH_FOODS_SUCCESS
export const fetchFoodSuccess = (foods) => ({
  type: 'FETCH_FOODS_SUCCESS',
  foods
});

// FETCH_FOODS_FAILURE
export const fetchFoodFailure = () => ({
  type: 'FETCH_FOODS_FAILURE'
});

// FETCH_FOODS
export const fetchFoods = () => {
    return (dispatch) => {
        dispatch(fetchFoodRequest());

        return axios
          .get('https://macrotrac-server.herokuapp.com/foods/')
          .then(
            res => dispatch(fetchFoodSuccess(res.data.foods)),
            err => dispatch(fetchFoodFailure())
          );
    };
};

// ADD_FOOD_REQUEST
export const addFoodRequest = () => ({
  type: 'ADD_FOOD_REQUEST'
});
// ADD_FOOD_SUCCESS
export const addFoodSuccess = (food) => ({
  type: 'ADD_FOOD_SUCCESS',
  food
});
// ADD_FOOD_FAILURE
export const addFoodFailure = () => ({
  type: 'ADD_FOOD_FAILURE'
});

// ADD_FOOD
export const addFood = (food) => {
    return (dispatch) => {
        dispatch(addFoodRequest());

        return axios
          .post('https://macrotrac-server.herokuapp.com/foods/', food)
          .then(
            res => dispatch(addFoodSuccess(res.data)),
            err => dispatch(addFoodFailure())
          );
    };
};

// EDIT_FOOD_REQUEST
export const editFoodRequest = () => ({
  type: 'EDIT_FOOD_REQUEST'
});

// EDIT_FOOD_SUCCESS
export const editFoodSuccess = (_id, updates) => ({
  type: 'EDIT_FOOD_SUCCESS',
  _id,
  updates
});

// EDIT_FOOD_FAILURE
export const editFoodFailure = () => ({
  type: 'EDIT_FOOD_FAILURE'
});

// EDIT_FOOD
export const editFood = (_id, updates) => {
    return (dispatch) => {
        dispatch(editFoodRequest());

        return axios
          .patch(`https://macrotrac-server.herokuapp.com/foods/${_id}`, updates)
          .then(
            res => { console.log(res.data.food); dispatch(editFoodSuccess(_id, res.data.food));},
            err => dispatch(editFoodFailure())
          );
    };
}

// REMOVE_FOOD_REQUEST
export const removeFoodRequest = () => ({
  type: 'REMOVE_FOOD_REQUEST'
});

// REMOVE_FOOD_SUCCESS
export const removeFoodSuccess = (_id) => ({
  type: 'REMOVE_FOOD_SUCCESS',
  _id
});

// REMOVE_FOOD_FAILURE
export const removeFoodFailure = () => ({
  type: 'REMOVE_FOOD_FAILURE'
});

// REMOVE_FOOD
export const removeFood = ({ _id } = {}) => {
    return (dispatch) => {
        dispatch(removeFoodRequest());

        return axios
          .delete(`https://macrotrac-server.herokuapp.com/foods/${_id}`)
          .then(
            res => dispatch(removeFoodSuccess(_id)),
            err => dispatch(removeFoodFailure())
          );
    };
};
