import React, { useState, useEffect, useContext } from 'react';
import './productItem.css';
import { Context } from '../../contex';
import { NavLink } from 'react-router-dom';


function ProducItem(props) {
    const { addItemToBasket } = useContext(Context);
    const { removeItemToBasket } = useContext(Context);
    const item = props.props;

    const { staffInBasket } = useContext(Context);
    const staff = { staffInBasket: staffInBasket }
    const prop = Object.assign(item, staff);

    const saveToLocalStorage = () => {
        localStorage.setItem('activeItem', JSON.stringify(item));
    }

    return (
        <NavLink className="product" onClick={saveToLocalStorage} to={{
            pathname: 'itemDetails',
            aboutProps: { prop },
        }
        } exact>
            <img className="product__img" src={item.image} alt={item.title} />
            <p className="product__name">{item.title}</p>
            <p className="product__price">${item.price}</p>
            <div className="more-info">See more</div>
        </NavLink>
    )
}


export default ProducItem;
