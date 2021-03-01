import React, { useContext } from 'react';
import { Context } from '../../contex';
import BasketItem from '../basketItem/basketItem';

function Basket() {
    const { staffInBasket } = useContext(Context);

    return (
        <div className="basket">
            {staffInBasket.length > 0 ? staffInBasket.map(item => <BasketItem props={item} key={item.id} />) : <p>Loading...</p>}

            <div>
                basket
            </div>
        </div>
    );
}

export default Basket;