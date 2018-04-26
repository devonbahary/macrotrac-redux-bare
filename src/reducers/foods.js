import uuid from 'uuid';


const initialFoodsState = [{
  name: 'banana',
  servingSize: 1,
  servingUnit: 'banana',
  carbs: 8,
  prot: 1,
  fat: 1,
  id: uuid()
}, {
  name: 'muffin',
  servingSize: 12,
  servingUnit: 'ounce (oz)',
  carbs: 12,
  prot: 2,
  fat: 4,
  id: uuid()
}];

export default (prevState = initialFoodsState, action) => {
    switch (action.type) {
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
