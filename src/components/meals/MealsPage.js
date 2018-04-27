import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { removeMeal, clearMeals } from '../../actions/meals';
import AddMealForm from './AddMealForm';
import TodaysTotals from './TodaysTotals';

class MealsPage extends React.Component {
    daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    state = {
      time: new moment().format('dddd, MMMM D')
    };


    render() {
        return (
            <div>
                <h3>Today's Meals</h3>
                <h4>{this.state.time}</h4>
                <TodaysTotals />
                <AddMealForm />
                {this.props.meals.length > 0 ? (
                  <p>Found {this.props.meals.length} meals today:</p>
                ) : (
                  <p>No meals recorded today.</p>
                )}
                <ul>
                    {this.props.meals.map(meal => (
                      <li key={meal.id}>
                          {meal.name} ({meal.servingSize} {meal.servingUnit})
                          <button onClick={() => this.props.dispatch(removeMeal(meal))}>
                            Remove
                          </button>
                      </li>
                    ))}
                </ul>
                <button onClick={() => this.props.dispatch(clearMeals())}>
                  Remove All
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    meals: state.meals
});

export default connect(mapStateToProps)(MealsPage);
