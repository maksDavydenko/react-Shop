import React, { useState, useEffect } from 'react';
import './products.css';
import ProductItem from '../productItem/productItem'


function ProductWrap() {

    const [staff, setStaff] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setStaff(data));
    }, [])



    const sortPrice = (val) => {
        val === 'up' ?
            setStaff([...staff].sort((a, b) => a.price - b.price)) :
            setStaff([...staff].sort((a, b) => b.price - a.price));
    }

    return (
        <>
            <div>
                <button onClick={() => sortPrice('up')}>Sort price up</button>
                <button onClick={() => sortPrice('down')}>Sort price down</button>
            </div>
            <div className="products">
                {staff ? staff.map(item => <ProductItem props={item} key={item.id} />) : <p>Loading...</p>}
            </div>
        </>
    )
}


export default ProductWrap;
