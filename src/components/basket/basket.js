import React, { useContext } from 'react';
import { Context } from '../../contex';
import BasketItem from '../basketItem/basketItem';
import { NavLink } from 'react-router-dom'

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
                            Total: ${staffInBasket.reduce((a, b) => a += b.price * b.num, 0)}
                        </div>
                    </div>
                    <button onClick={removeAll}>Remove All</button>
                </> :
                <NavLink to="/">
                    TO STAFF
    </NavLink>}

        </div>
    );
}

export default Basket;
