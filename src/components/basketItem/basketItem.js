import React, { useState, useContext } from 'react';

function BasketItem(props) {
    const item = props.props;
    return (
        <div className="basket-item">
            <img className="basket-item__img" src={item.image} alt={item.title} />
            <p className="basket-item__name">{item.title}</p>
            <p className="basket-item__price">{item.price}</p>
            <p className="basket-item__count">{item.num}</p>
            <p className="basket-item__total-price">{item.num * item.price}</p>
        </div>
    )
}


export default BasketItem;
