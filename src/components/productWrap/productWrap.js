import React, { useState, useEffect } from 'react';
import './products.css';
import ProductItem from '../productItem/productItem';
import InputRange from "react-input-range";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { FaSortAmountUpAlt } from "react-icons/fa";


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
            <div className="sort">
                <div className="sort-content">
                    <div className="btn-wrap">
                        <button className="sort-btn" onClick={() => sortPrice('up')}>Sort price up <FaSortAmountUpAlt /></button>
                        <button className="sort-btn" onClick={() => sortPrice('down')}>Sort price down <FaSortAmountDownAlt /></button>
                    </div>
                    <div className="slider">
                        <InputRange
                            minValue={sliderMin}
                            maxValue={sliderMax}
                            step={1}
                            onChange={onChange}
                            onChangeComplete={filterRange}
                            value={rangeVal}
                        />
                    </div>
                </div>
                <div>
                    <button className="sort-btn" onClick={() => resetSort()}>Reset sort</button>
                </div>
            </div>
            <div className="products">
                {staff ? staff.map(item => <ProductItem props={item} key={item.id} />) : <p>Loading...</p>}
            </div>
        </>
    )
}

export default ProductWrap;
