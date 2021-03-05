import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../contex';

function BasketItem(props) {
    const item = props.props;

    const { addItemToBasket } = useContext(Context);
    const { removeItemToBasket } = useContext(Context);
    const { staffInBasket } = useContext(Context);
    const [inputVal, setInputVal] = useState(0);


    useEffect(() => {
        let staffIndex = -1;

        staffInBasket.forEach((staff, index) => {
            if (staff.id === item.id) {
                staffIndex = index;
                setInputVal(staffInBasket[staffIndex].num)
                return;
            }
        });
    }, []);

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
        <div className="basket-item">
            <img className="basket-item__img" src={item.image} alt={item.title} />
            <p className="basket-item__name">{item.title}</p>
            <p className="basket-item__price">{item.price}</p>
            <p className="basket-item__count">{item.num}</p>
            <p className="basket-item__total-price">{item.num * item.price}</p>

            {inputVal >= 1 ? <button onClick={() => { removeItemToBasket(item, true); setInputVal(0) }}>remove from basket</button> :
                <button onClick={() => { addItemToBasket(item); setInputVal(1) }}>Add to basket</button>
            }
            {inputVal >= 1 ? <><button onClick={() => { removeItemToBasket(item); minusClick() }} disabled={inputVal === 0}>-</button>
                <input type="number" value={inputVal} readOnly />
                <button onClick={() => { addItemToBasket(item); plusClick() }}>+</button></> : null}
        </div>
    )
}


export default BasketItem;
