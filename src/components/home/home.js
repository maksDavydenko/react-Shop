import React, { useState } from 'react';
import Header from '../header/header';
import ProductWrap from '../productWrap/productWrap';

function Home() {

    const [staff, setStaff] = useState(0);

    const addItemToBasket = id => {
        setStaff(staff + 1)
    }

    const removeItemToBasket = id => {
        setStaff(staff - 1)
    }

    const state = {
        'removeItemToBasket': removeItemToBasket,
        'addItemToBasket': addItemToBasket
    }
    return (
        <div className="App container">
            <ProductWrap />
        </div>
    );
}

export default Home;
