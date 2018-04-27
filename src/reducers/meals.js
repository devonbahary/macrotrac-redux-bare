import uuid from 'uuid';

const initialMealsState = [];

export default (prevState = initialMealsState, action) => {
    switch (action.type) {
        case 'ADD_MEAL':
            return [ ...prevState, { ...action.meal, id: uuid() } ];
        case 'REMOVE_MEAL':
            return prevState.filter(meal => meal.id !== action.id);
        case 'CLEAR_MEALS':
            return [];
        default:
            return prevState;
    }
};
