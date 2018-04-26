import React from 'react';

class UserForm extends React.Component {
  state = {
    calorieGoal: this.props.user.calorieGoal,
    carbsRatioGoal: this.props.user.carbsRatioGoal,
    protRatioGoal: this.props.user.protRatioGoal,
    fatRatioGoal: this.props.user.fatRatioGoal,
    err: ''
  };

  onCalorieGoalChange = (e) => {
      const calorieGoal = Number(e.target.value);
      if (calorieGoal > 0) {
          this.setState(() => ({ calorieGoal }));
      }
  };

  onCarbsRatioGoalChange = (e) => {
      const carbsRatioGoal = Number(e.target.value);
      if (carbsRatioGoal >= 0) {
          this.setState(() => ({ carbsRatioGoal }));
      }
  };

  onProtRatioGoalChange = (e) => {
      const protRatioGoal = Number(e.target.value);
      if (protRatioGoal >= 0) {
          this.setState(() => ({ protRatioGoal }));
      }
  };

  onFatRatioGoalChange = (e) => {
      const fatRatioGoal = Number(e.target.value);
      if (fatRatioGoal >= 0) {
          this.setState(() => ({ fatRatioGoal }));
      }
  };

  onSubmit = (e) => {
      e.preventDefault();
      if (this.state.carbsRatioGoal + this.state.protRatioGoal + this.state.fatRatioGoal !== 100) {
          this.setState(() => ({ err: 'Sum of ratios must be 100%.' }));
      } else {
          this.setState(() => ({ err: '' }));
          this.props.onSubmit({
            calorieGoal: this.state.calorieGoal,
            carbsRatioGoal: this.state.carbsRatioGoal,
            protRatioGoal: this.state.protRatioGoal,
            fatRatioGoal: this.state.fatRatioGoal
          });
      }
  };

  hasUserChanged = () => {
      return (
        this.state.calorieGoal !== this.props.user.calorieGoal ||
        this.state.carbsRatioGoal !== this.props.user.carbsRatioGoal ||
        this.state.protRatioGoal !== this.props.user.protRatioGoal ||
        this.state.fatRatioGoal !== this.props.user.fatRatioGoal
      );
  }

  render() {
      return (
          <div>
              {this.state.err && <p className="error">{this.state.err}</p>}
              <form onSubmit={this.onSubmit}>
                  <div>
                      Calorie Goal:
                      <input
                        type="number"
                        value={this.state.calorieGoal}
                        onChange={this.onCalorieGoalChange}
                        step='100'
                        required
                      />
                  </div>
                  <div>
                      Carbs Ratio:
                      <input
                        type="number"
                        value={this.state.carbsRatioGoal}
                        onChange={this.onCarbsRatioGoalChange}
                        required
                      />%
                  </div>
                  <div>
                      Prot Ratio:
                      <input
                        type="number"
                        value={this.state.protRatioGoal}
                        onChange={this.onProtRatioGoalChange}
                        required
                      />%
                  </div>
                  <div>
                      Fat Ratio:
                      <input
                        type="number"
                        value={this.state.fatRatioGoal}
                        onChange={this.onFatRatioGoalChange}
                        required
                      />%
                  </div>
                  <button type="submit" disabled={!this.hasUserChanged()}>
                      Save Changes
                  </button>
              </form>
          </div>
      );
  }
}

export default UserForm;
