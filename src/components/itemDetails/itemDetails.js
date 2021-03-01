import React, { useState, useEffect, useContext, useRef } from 'react';
// import './productItem.css';
import { Context } from '../../contex';
import { NavLink } from 'react-router-dom';


function ItemDetails(props) {
    const { addItemToBasket } = useContext(Context);
    const { removeItemToBasket } = useContext(Context);
    const { staffInBasket } = useContext(Context);
    const [inputVal, setInputVal] = useState(0);

    const item = props ? props.location.aboutProps.prop : JSON.parse(localStorage.getItem('activeItem'));

    localStorage.setItem('activeItem', JSON.stringify(item));

    console.log(item)

    useEffect(() => {
        const num = staffInBasket.reduce((a, b) => b.id === item.id ? a = a + 1 : a, 0);
        setInputVal(num)
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
        <div className="item-details">
            <img className="item-details__img" src={item.image} alt={item.title} />
            <p className="item-details__name">{item.title}</p>
            <p>{item.description}</p>
            <button onClick={() => { removeItemToBasket(item); minusClick() }} disabled={inputVal === 0}>-</button>
            <input type="number" value={inputVal} readOnly />
            <button onClick={() => { addItemToBasket(item); plusClick() }}>+</button>
        </div>
    )
}


export default ItemDetails;
