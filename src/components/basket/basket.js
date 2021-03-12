import React, { useContext } from 'react';
import { Context } from '../../contex';
import BasketItem from '../basketItem/basketItem';
import { NavLink } from 'react-router-dom'
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
                    <div className="basket">
                        {staffInBasket.length > 0 ? staffInBasket.map(item => <BasketItem props={item} key={item.id} />) : <p>Loading...</p>}
                        <div>
                            Total: ${staffInBasket.reduce((a, b) => a += b.price * b.num, 0).toFixed(2)}
                        </div>
                    </div>
                    <button className="btn" onClick={removeAll}>Remove All</button>
                </> :

                <NavLink to="/" className="return-link" >
                    <div> Your basket is empty</div>
                    <div>Return to staff</div>
                </NavLink>
            }

        </div>
    );
}

export default Basket;
