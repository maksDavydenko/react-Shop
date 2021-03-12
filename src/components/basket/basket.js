import React, { useContext } from 'react';
import { Context } from '../../contex';
import BasketItem from '../basketItem/basketItem';
import { NavLink } from 'react-router-dom';
import { GoChevronLeft } from "react-icons/go";

import './basket.css';

function Basket() {
    const { staffInBasket } = useContext(Context);
    const { removeAllFromBasket } = useContext(Context);

    const removeAll = () => {
        removeAllFromBasket()
    }

    return (
        <div className='container'>
            {staffInBasket.length > 0 ?
                <>
                    <NavLink to="/" className="back-link">
                        <GoChevronLeft />
              Back to catalog
            </NavLink>
                    <div className="basket">
                        {staffInBasket.length > 0 ? staffInBasket.map(item => <BasketItem props={item} key={item.id} />) : <p>Loading...</p>}
                        <div className="order-block">
                            <h2>
                                Total price: ${staffInBasket.reduce((a, b) => a += b.price * b.num, 0).toFixed(2)}
                            </h2>
                            <button className="btn" onClick={removeAll}>Remove All</button>

                        </div>
                    </div>
                    <button className="btn order-btn">Order Staff</button>
                </> :

                <div className="return-link">
                    <div> Your basket is empty</div>
                    <NavLink to="/" className="back-link back-link--big">
                        <GoChevronLeft />
              Back to catalog
            </NavLink>
                </div>
            }

        </div>
    );
}

export default Basket;
