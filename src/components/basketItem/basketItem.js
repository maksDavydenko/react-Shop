import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../contex';
import ControlsBtn from '../controlsBtn/controlsBtn';
import './basketItem.css'

function BasketItem(props) {
    const item = props.props;
    const { removeItemToBasket } = useContext(Context);

    return (
        <div className="basket-item">
            <img className="basket-item__img" src={item.image} alt={item.title} />
            <div className="basket-item__content">
                <p className="basket-item__name">{item.title}</p>
                <p className="basket-item__price">{item.price}</p>
                <p className="basket-item__count">{item.num}</p>
                <p className="basket-item__total-price">{(item.num * item.price).toFixed(2)}</p>
                {item ?
                    <ControlsBtn props={item} /> : null
                }

                {item >= 1 ?
                    <div className="remove-btn">
                        <button className="btn" onClick={() => { removeItemToBasket(item, true) }}>remove from basket</button>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    )
}


export default BasketItem;
