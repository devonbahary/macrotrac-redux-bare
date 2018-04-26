import React from 'react';
import { connect } from 'react-redux';
import { addFood } from '../../actions/foods';
import FoodForm from './FoodForm';

const AddFoodPage = (props) => {
    const onSubmit = (food) => {
        props.dispatch(addFood(food)).then((res) => console.log('res'));
        props.history.push('/foods');
    };

    return (
        <div>
            <h3>Add Food</h3>
            <FoodForm onSubmit={onSubmit} />
        </div>
    );
};

export default connect()(AddFoodPage);
