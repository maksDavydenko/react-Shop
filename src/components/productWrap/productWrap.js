import React, { useState, useEffect } from 'react';
import './products.css';
import ProductItem from '../productItem/productItem';
import InputRange from "react-input-range";


import 'react-rangeslider/lib/index.css';

function ProductWrap() {
    const [staff, setStaff] = useState(null);
    const [staffArr, setStaffArr] = useState(null);
    const [sliderMin, setSliderMin] = useState(0);
    const [sliderMax, setSliderMax] = useState(0);
    const [rangeVal, setRangeVal] = useState({ min: 0, max: 0 });

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                setStaff(data);
                setStaffArr(data);
                const sortArr = [...data].sort((a, b) => a.price - b.price);
                setSliderMin(sortArr[0].price);
                setSliderMax(sortArr[sortArr.length - 1].price);
                setRangeVal({ min: sortArr[0].price, max: sortArr[sortArr.length - 1].price })
            })
    }, []);

    const filterRange = () => {
        const sortArr = staffArr.filter(i => i.price >= rangeVal.min && i.price <= rangeVal.max);
        setStaff(sortArr);
    }

    const sortPrice = (val) => {
        val === 'up' ?
            setStaff([...staff].sort((a, b) => a.price - b.price)) :
            setStaff([...staff].sort((a, b) => b.price - a.price));
    }

    const resetSort = () => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                setStaff(data);
                const sortArr = [...data].sort((a, b) => a.price - b.price);
                setSliderMin(sortArr[0].price)
                setSliderMax(sortArr[sortArr.length - 1].price)
                setRangeVal({ min: sortArr[0].price, max: sortArr[sortArr.length - 1].price })
            })
    };

    const onChange = (val) => {
        setRangeVal(val);
    }

    return (
        <>
            <div>
                <button onClick={() => sortPrice('up')}>Sort price up</button>
                <button onClick={() => sortPrice('down')}>Sort price down</button>
                <div className="slider">
                    <label>price</label>
                    <InputRange
                        minValue={sliderMin}
                        maxValue={sliderMax}
                        step={1}
                        onChange={onChange}
                        onChangeComplete={filterRange}
                        value={rangeVal}
                    />
                </div>
                <button onClick={() => resetSort()}>Reset sort</button>
            </div>
            <div className="products">
                {staff ? staff.map(item => <ProductItem props={item} key={item.id} />) : <p>Loading...</p>}
            </div>
        </>
    )
}

export default ProductWrap;
