import uuid from 'uuid';


const initialFoodsState = [];

export default (prevState = initialFoodsState, action) => {
    switch (action.type) {
        case 'FETCH_FOODS_REQUEST':
            return prevState;
        case 'FETCH_FOODS_SUCCESS':
            return prevState;
        case 'ADD_FOOD':
            return [...prevState, { ...action.food, id: uuid() } ];
        case 'EDIT_FOOD':
            return prevState.map(food => food.id === action.id ? { ...food, ...action.updates }: food);
        case 'REMOVE_FOOD':
            return prevState.filter(food => food.id !== action.id);
        default:
            return prevState;
    }
};
