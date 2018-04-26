import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Macrotrac (w/Redux)</h1>
        <NavLink to="/" exact activeClassName="active-link"> Home </NavLink>
        <NavLink to="/meals" exact activeClassName="active-link"> Meals </NavLink>
        <NavLink to="/foods" exact activeClassName="active-link"> Foods </NavLink>
        <NavLink to="/foods/create" exact activeClassName="active-link"> Add Food </NavLink>
        <NavLink to="/user" exact activeClassName="active-link"> User </NavLink>
    </header>
);

export default Header;
