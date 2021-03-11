import React, { useState, useEffect, useContext, useRef } from 'react';
import './itemDetails.css';
import { Context } from '../../contex';
import { NavLink } from 'react-router-dom';
import { GoChevronLeft } from "react-icons/go";

function ItemDetails(props) {
    const { addItemToBasket } = useContext(Context);
    const { removeItemToBasket } = useContext(Context);
    const { staffInBasket } = useContext(Context);
    const [inputVal, setInputVal] = useState(0);
    const item = props.location.aboutProps.prop;


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
        <div className="container">
            <NavLink to="/" className="back-link">
                <GoChevronLeft />
              Back to catalog
            </NavLink>
            <div className="item-details">
                <div className="item-details__inner">
                    <img className="item-details__img" src={item.image} alt={item.title} />
                    <div className="item-details__content">
                        <p className="item-details__name">{item.title}</p>
                        <p>{item.description}</p>
                        <p className="item-detaild__price">${(item.price).toFixed(2)}</p>
                        {inputVal >= 1 ? <div className="controls-wrap">
                            <div className="controls-btn-wrap">
                                <button className="btn-controls" onClick={() => { removeItemToBasket(item); minusClick() }}>-</button>
                                <input className="staff-num" type="number" value={inputVal} readOnly />
                                <button className="btn-controls" onClick={() => { addItemToBasket(item); plusClick() }}>+</button>
                            </div>

                            <div className="total">
                                <div className="total__label">
                                    Total price:
                            </div>
                                <div className="total__price">
                                    ${(inputVal * item.price).toFixed(2)}
                                </div>

                            </div>
                        </div>
                            : null}
                        {inputVal >= 1 ? <button className="btn" onClick={() => { removeItemToBasket(item, true); setInputVal(0) }}>remove from basket</button> :
                            <button className="btn" onClick={() => { addItemToBasket(item); setInputVal(1) }}>Add to basket</button>
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}


export default ItemDetails;
