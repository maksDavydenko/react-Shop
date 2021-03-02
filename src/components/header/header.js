import React, { useContext } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import { Context } from '../../contex';


function Header() {
    const { staffInBasket } = useContext(Context);

    return (
        <header className="header">
            <NavLink to="/">
                LOGO
                </NavLink>
            <NavLink to="/basket">
                <div className="basket">
                    {staffInBasket.length > 0 ? <div className="basket__count">{staffInBasket.length}</div> : null}
                    <img src="https://cdn1.iconfinder.com/data/icons/ecommerce-1-9/48/2-512.png" alt="basket" width="25" height="25" />
                </div>
            </NavLink>

        </header>
    );
}

export default Header;
