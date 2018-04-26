import React from 'react';
import './FoodForm.css';

class FoodForm extends React.Component {
    servingUnits = [
      'gram (g)',
      'ounce (oz)',
      'pound (lb)',
      'teaspoon (tsp)',
      'tablespoon (Tbsp)',
      'cup (c)',
      'pint (p)',
      'quart (q)',
      'gallon (gal)'
    ];

    state = {
      name: this.props.food ? this.props.food.name : '',
      servingSize: this.props.food ? this.props.food.servingSize : 1,
      servingUnit: this.props.food ?
        this.props.food.name === this.props.food.servingUnit ? (
          this.servingUnits.length
        ) : (
          this.servingUnits.indexOf(this.props.food.servingUnit)
        ) : 0,
      carbs: this.props.food ? this.props.food.carbs : 0,
      prot: this.props.food ? this.props.food.prot : 0,
      fat: this.props.food ? this.props.food.fat : 0,
      err: '',
      servingUnits: this.props.food ? [ ...this.servingUnits, this.props.food.name ] : this.servingUnits
    };

    onNameChange = (e) => {
        const name = e.target.value;
        const updatedServingUnits = this.state.servingUnits.filter(units => units !== this.state.name);
        this.setState(() => ({
          name,
          servingUnits: name.length > 0 ? [ ...updatedServingUnits, name ] : updatedServingUnits
        }));
    };

    onServingSizeChange = (e) => {
        const servingSize = e.target.value;
        if (servingSize > 0) {
            this.setState(() => ({ servingSize }));
        }
    }

    onServingUnitChange = (e) => {
        const servingUnit = e.target.value;
        this.setState(() => ({ servingUnit }));
    }

    onCarbsChange = (e) => {
        const carbs = e.target.value;
        if (carbs >= 0) {
            this.setState(() => ({ carbs }));
        }
    };

    onProtChange = (e) => {
        const prot = e.target.value;
        if (prot >= 0) {
            this.setState(() => ({ prot }));
        }
    };

    onFatChange = (e) => {
        const fat = e.target.value;
        if (fat >= 0) {
            this.setState(() => ({ fat }));
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.carbs + this.state.prot + this.state.fat > 0) {
            this.setState(() => ({ err: '' }));
            this.props.onSubmit({
              name: this.state.name,
              servingSize: this.state.servingSize,
              servingUnit: this.state.servingUnits[this.state.servingUnit],
              carbs: this.state.carbs,
              prot: this.state.prot,
              fat: this.state.fat
            });
        } else {
            this.setState(() => ({ err: 'Can\'t add an empty-calorie food.' }));
        }

    }

    render() {
        return (
            <div>
                {this.state.err && <p className="error">{this.state.err}</p>}
                <form onSubmit={this.onSubmit}>
                    <div className="FoodForm__row">
                        Name:
                        <input
                          type='name'
                          value={this.state.name}
                          onChange={this.onNameChange}
                          placeholder="name"
                          required
                        />
                    </div>
                    <div className="FoodForm__row">
                        Serving Size
                        <input
                          type="number"
                          value={this.state.servingSize}
                          onChange={this.onServingSizeChange}
                          required
                        />
                    </div>
                    <div className="FoodForm__row">
                        Serving Units
                        <select value={this.state.servingUnit} onChange={this.onServingUnitChange}>
                          {this.state.servingUnits.map((unit, index) => (
                            <option key={index} value={index}>
                              {unit}
                            </option>
                          ))}
                        </select>
                    </div>
                    <div className="FoodForm__row">
                        Carbs
                        <input
                          type='number'
                          value={this.state.carbs}
                          onChange={this.onCarbsChange}
                          required
                        />
                    </div>
                    <div className="FoodForm__row">
                        Prot
                        <input
                          type='number'
                          value={this.state.prot}
                          onChange={this.onProtChange}
                          required
                        />
                    </div>
                    <div className="FoodForm__row">
                        Fat
                        <input
                          type='number'
                          value={this.state.fat}
                          onChange={this.onFatChange}
                          required
                        />
                    </div>
                    <button type="submit">
                      {this.props.food ? 'Edit Food' : 'Add Food'}
                    </button>
                </form>

            </div>
        );
    }
}

export default FoodForm;
