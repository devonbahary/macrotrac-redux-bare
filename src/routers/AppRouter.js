import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import AddFoodPage from '../components/foods/AddFoodPage';
import EditFoodPage from '../components/foods/EditFoodPage';
import FoodsPage from '../components/foods/FoodsPage';
import MealsPage from '../components/meals/MealsPage';
import NotFoundPage from '../components/NotFoundPage';
import UserPage from '../components/user/UserPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/foods' exact component={FoodsPage} />
                <Route path='/foods/create' exact component={AddFoodPage} />
                <Route path='/foods/edit/:id' exact component={EditFoodPage} />
                <Route path='/meals' exact component={MealsPage} />
                <Route path='/user' exact component={UserPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
