import React, { useState, useEffect, useContext, useRef } from 'react';
import './itemDetails.css';
import { Context } from '../../contex';
import { NavLink } from 'react-router-dom';


function ItemDetails(props) {
    const { addItemToBasket } = useContext(Context);
    const { removeItemToBasket } = useContext(Context);
    const { staffInBasket } = useContext(Context);
    const [inputVal, setInputVal] = useState(0);

    let item = null;

    try {
        item = props.location.aboutProps.prop;

    } catch (error) {
        item = JSON.parse(localStorage.getItem('activeItem'));
    }

    useEffect(() => {
        setInputVal(item.num ? item.num : 0);
    }, [item.staffInBasket]);

    const minusClick = () => {
        if (inputVal - 1 < 0) {
            return;
        } else {
            setInputVal(inputVal => inputVal - 1);
        }
    }

    const plusClick = () => {
        setInputVal(inputVal => inputVal + 1);
    }


    return (
        <div className="container">
            <div className="item-details">
                <div className="item-details__inner">
                    <img className="item-details__img" src={item.image} alt={item.title} />
                    <div className="item-details__content">
                        <p className="item-details__name">{item.title}</p>
                        <p>{item.description}</p>
                        <p className="item-detaild__price">${(item.price).toFixed(2)}</p>
                        <button onClick={() => { removeItemToBasket(item); minusClick() }} disabled={inputVal === 0}>-</button>
                        <input type="number" value={inputVal} readOnly />
                        <button onClick={() => { addItemToBasket(item); plusClick() }}>+</button>

                        <div className="total">
                            <div className="total__label">
                                Total price
                            </div>
                            <div className="total__price">
                                ${(inputVal * item.price).toFixed(2)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ItemDetails;
