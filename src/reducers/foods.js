import uuid from 'uuid';


const initialFoodsState = {
  items: []
};

export default (prevState = initialFoodsState, action) => {
    let items;
    switch (action.type) {
        case 'FETCH_FOODS':
            items = localStorage.getItem('foods');
            return {
              items: items ? JSON.parse(items) : prevState.items
            };
        case 'ADD_FOOD':
            items = [ ...prevState.items, { ...action.food, id: uuid() } ];
            localStorage.setItem('foods', JSON.stringify(items));
            return {
              items
            };
        case 'EDIT_FOOD':
            items = prevState.items.map(food => food.id === action.id ? { ...food, ...action.updates } : food);
            localStorage.setItem('foods', JSON.stringify(items));
            return {
              items
            };
        case 'REMOVE_FOOD':
            items = prevState.items.filter(food => food.id !== action.id);
            localStorage.setItem('foods', JSON.stringify(items));
            return {
              items
            };
        default:
            return prevState;
    }
};
