import React, { useState, useEffect, useContext, useRef } from 'react';
import './itemDetails.css';
import { Context } from '../../contex';
import { NavLink } from 'react-router-dom';
import { GoChevronLeft } from "react-icons/go";
import ControlsBtn from '../controlsBtn/controlsBtn';

function ItemDetails(props) {
    const item = props.location.aboutProps.prop;

    const { addItemToBasket } = useContext(Context);
    const { staffInBasket } = useContext(Context);
    const [staffIndex, setStaffIndex] = useState(-1)

    useEffect(() => {
        staffInBasket.forEach((staff, index) => {
            if (staff.id === item.id) {
                setStaffIndex(index);
                return;
            }
        });
    }, [staffInBasket]);

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
                        <h2 className="item-details__name">{item.title}</h2>
                        <p>{item.description}</p>
                        <p className="item-detaild__price">${(item.price).toFixed(2)}</p>
                        {staffInBasket[staffIndex] && staffInBasket[staffIndex].num > -1 ?
                            <div className="controls-wrap">
                                <ControlsBtn props={staffInBasket[staffIndex]} />
                                <div className="total">
                                    <div className="total__label">
                                        Total price:
                                    </div>
                                    <div className="total__price">
                                        ${(staffInBasket[staffIndex].num * staffInBasket[staffIndex].price).toFixed(2)}
                                    </div>
                                </div>

                            </div>
                            : null}
                        {staffInBasket[staffIndex] && staffInBasket[staffIndex].num > -1 ?
                            <>
                                <NavLink to="basket" className="back-link">
                                    <button className="btn btn-right">Go to basket</button>
                                </NavLink>
                            </>
                            :
                            <button className="btn" onClick={() => addItemToBasket(item)}>Add to basket</button>
                        }


                    </div>
                </div>
            </div>
        </div >
    )
}


export default ItemDetails;
