import React from 'react';
import { connect } from 'react-redux';
import { removeMeal } from '../../actions/meals';
import AddMealForm from './AddMealForm';
import TodaysTotals from './TodaysTotals';

const MealsPage = (props) => (
    <div>
        <h3>Today's Meals</h3>
        <TodaysTotals />
        <AddMealForm />
        {props.meals.length > 0 ? (
          <p>Found {props.meals.length} meals today:</p>
        ) : (
          <p>No meals recorded today.</p>
        )}
        <ul>
            {props.meals.map(meal => (
              <li key={meal.id}>
                  {meal.name} ({meal.servingSize} {meal.servingUnit})
                  <button onClick={() => props.dispatch(removeMeal(meal))}>
                    Remove
                  </button>
              </li>
            ))}
        </ul>
    </div>
);

const mapStateToProps = (state) => ({
    meals: state.meals
});

export default connect(mapStateToProps)(MealsPage);
