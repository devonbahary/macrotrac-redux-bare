import React from 'react';
import { connect } from 'react-redux';
import {
  totalCalories,
  totalCarbs,
  totalProt,
  totalFat,
  carbsAsRatio,
  protAsRatio,
  fatsAsRatio
} from '../../utils/utils';
import './TodaysTotals.css';

const TodaysTotals = (props) => (
    <div className="TodaysTotals">
        <div className="TodaysTotals__row--header">
            <div className="TodaysTotals__column">

            </div>
            <div className="TodaysTotals__column">
                <strong>Total</strong>
            </div>
            <div className="TodaysTotals__column">
                <strong>Goal</strong>
            </div>
        </div>
        <div className="TodaysTotals__row">
            <div className="TodaysTotals__column">
                Calories
            </div>
            <div className="TodaysTotals__column">
                {props.cals}cals
            </div>
            <div className="TodaysTotals__column">
                {props.user.calorieGoal}
            </div>
        </div>
        <div className="TodaysTotals__row">
            <div className="TodaysTotals__column">
                Carbs
            </div>
            <div className="TodaysTotals__column">
                {props.carbsRatio}% ({props.carbs}g)
            </div>
            <div className="TodaysTotals__column">
                {props.user.carbsRatioGoal}%
            </div>
        </div>
        <div className="TodaysTotals__row">
            <div className="TodaysTotals__column">
                Prot
            </div>
            <div className="TodaysTotals__column">
                {props.protRatio}% ({props.prot}g)
            </div>
            <div className="TodaysTotals__column">
                {props.user.protRatioGoal}%
            </div>
        </div>
        <div className="TodaysTotals__row">
            <div className="TodaysTotals__column">
                Fat
            </div>
            <div className="TodaysTotals__column">
                 {props.fatRatio}% ({props.carbs}g)
            </div>
            <div className="TodaysTotals__column">
                {props.user.fatRatioGoal}%
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
  cals: totalCalories(state.meals),
  carbs: totalCarbs(state.meals),
  prot: totalProt(state.meals),
  fat: totalFat(state.meals),
  carbsRatio: Math.round(carbsAsRatio(state.meals) * 100),
  protRatio: Math.round(protAsRatio(state.meals) * 100),
  fatRatio: Math.round(fatsAsRatio(state.meals) * 100),
  user: state.user
});


export default connect(mapStateToProps)(TodaysTotals);
