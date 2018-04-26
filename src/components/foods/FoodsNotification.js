import React from 'react';
import { connect } from 'react-redux';

const FoodsNotification = (props) => {
    if (props.foods.isFetching) {
        return (
            <p className="confirmed">Loading your food..</p>
        );
    } else if (props.foods.failedLoad) {
        return (
            <p className="error">Failed to load your food.</p>
        );
    } else if (props.foods.isAdding) {
        return (
            <p className="confirmed">Adding new food item..</p>
        );
    } else if (props.foods.failedAdd) {
        return (
            <p className="error">Failed to add new food item.</p>
        );
    } else if (props.foods.isEditing) {
        return (
            <p className="confirmed">Editing food item..</p>
        );
    } else if (props.foods.failedEdit) {
        return (
            <p className="error">Failed to edit food item.</p>
        );
    } else if (props.foods.isRemoving) {
        return (
            <p className="confirmed">Removing food item..</p>
        );
    } else if (props.foods.failedRemove) {
        return (
            <p className="error">Failed to remove food item.</p>
        );
    } else if (props.foods.items.length > 0) {
        return (
            <p>Found {props.foods.items.length} foods:</p>
        );
    } else {
        return (
            <p>No food items found.</p>
        );
    }
};

const mapStateToProps = (state) => ({
  foods: state.foods
});

export default connect(mapStateToProps)(FoodsNotification);
