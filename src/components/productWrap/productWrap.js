import React, { useState, useEffect } from 'react';
import './products.css';
import ProductItem from '../productItem/productItem'



function ProductWrap() {

    const [staff, setStaff] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setStaff(data)
            });

    }, [])


    return (
        <div className="products">
            {staff ? staff.map(item => <ProductItem props={item} key={item.id} />) : <p>Loading...</p>}
        </div>
    )
}


export default ProductWrap;
