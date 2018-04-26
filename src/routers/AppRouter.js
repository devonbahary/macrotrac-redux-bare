import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFoods } from '../actions/foods';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import AddFoodPage from '../components/foods/AddFoodPage';
import EditFoodPage from '../components/foods/EditFoodPage';
import FoodsPage from '../components/foods/FoodsPage';
import MealsPage from '../components/meals/MealsPage';
import NotFoundPage from '../components/NotFoundPage';
import UserPage from '../components/user/UserPage';

class AppRouter extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchFoods());
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/foods' exact component={FoodsPage} />
                        <Route path='/foods/create' exact component={AddFoodPage} />
                        <Route path='/foods/edit/:_id' exact component={EditFoodPage} />
                        <Route path='/meals' exact component={MealsPage} />
                        <Route path='/user' exact component={UserPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default connect()(AppRouter);
