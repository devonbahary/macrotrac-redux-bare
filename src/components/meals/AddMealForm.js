import React from 'react';
import { connect } from 'react-redux';
import { addMeal } from '../../actions/meals';
import { totalCalories, foodToMeal } from '../../utils/utils';

class AddMealForm extends React.Component {
    state = {
        servingSize: this.props.foods.length > 0 ? this.props.foods[0].servingSize : '1',
        selectedFoodIndex: 0,
        meal: this.props.foods.length > 0 ? this.props.foods[0] : null
    };

    onSelectedFoodChange = (e) => {
        const selectedFoodIndex = e.target.value;
        this.setState({
          selectedFoodIndex,
          servingSize: this.props.foods[selectedFoodIndex].servingSize,
          meal: this.props.foods[selectedFoodIndex]
        });
    };

    onServingSizeChange = (e) => {
        const servingSize = e.target.value;
        if (servingSize > 0) {
            this.setState(() => ({
              servingSize,
              meal: foodToMeal(this.props.foods[this.state.selectedFoodIndex], servingSize)
            }));
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(addMeal(this.state.meal));
    };

    render() {
        return (
            <div>
                <h3>Add Meal</h3>
                {this.state.meal ? (
                  <form onSubmit={this.onSubmit}>
                      <select value={this.state.selectedFoodIndex} onChange={this.onSelectedFoodChange}>
                          {this.props.foods.map((food, index) => (
                            <option key={index} value={index}>
                              {food.name}
                            </option>
                          ))}
                      </select>
                      <input type="number" value={this.state.servingSize} onChange={this.onServingSizeChange} /> {this.props.foods[this.state.selectedFoodIndex].servingUnit}
                      <ul>
                          <li>Cals: {totalCalories(this.state.meal)}</li>
                          <li>Carbs: {this.state.meal.carbs}</li>
                          <li>Prot: {this.state.meal.prot}</li>
                          <li>Fat: {this.state.meal.fat}</li>
                      </ul>
                      <button type="submit">
                        Add Meal
                      </button>
                  </form>
                ) : (
                  <p>No foods found.</p>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  foods: state.foods.items
});


export default connect(mapStateToProps)(AddMealForm);
