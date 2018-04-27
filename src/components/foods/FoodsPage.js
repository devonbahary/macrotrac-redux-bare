import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FoodsNotification from './FoodsNotification';

const FoodsPage = (props) => (
    <div>
        <h3>Your Foods</h3>
        <FoodsNotification />
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
  foods: state.foods.items
});

export default connect(mapStateToProps)(FoodsPage);
