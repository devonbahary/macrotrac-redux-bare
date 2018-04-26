import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import foodsReducer from '../reducers/foods';
import mealsReducer from '../reducers/meals';
import userReducer from '../reducers/user';

export default () => createStore(
  combineReducers({
      foods: foodsReducer,
      meals: mealsReducer,
      user: userReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
