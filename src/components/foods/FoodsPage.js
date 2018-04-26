import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const FoodsPage = (props) => (
    <div>
        <h3>Your Foods</h3>
        {props.foods.length > 0 ? (
          <p>Found {props.foods.length} foods:</p>
        ) : (
          <p>No foods found.</p>
        )}
        <ul>
            {props.foods.map(food => (
              <li key={food.id}>
                  <Link to={`/foods/edit/${food.id}`}>{food.name}</Link> ({food.servingSize} {food.servingUnit})
                  <ul>
                      <li>Carbs: {food.carbs}</li>
                      <li>Prot: {food.prot}</li>
                      <li>Fat: {food.fat}</li>
                  </ul>
              </li>
            ))}
        </ul>
    </div>
);

const mapStateToProps = (state) => ({
  foods: state.foods
});

export default connect(mapStateToProps)(FoodsPage);
