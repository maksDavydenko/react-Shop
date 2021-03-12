import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../contex';

function ControlsBtn(props) {
    const itemInfo = props.props;
    const { addItemToBasket } = useContext(Context);
    const { removeItemToBasket } = useContext(Context);
    const { staffInBasket } = useContext(Context);
    const [item, setItem] = useState(null)
    const [inputVal, setInputVal] = useState(null);

    useEffect(() => {
        staffInBasket.forEach((staff, index) => {
            if (staff.id === itemInfo.id) {
                setItem(staffInBasket[index])
                setInputVal(staffInBasket[index].num)
                return;
            }
        });
    }, []);

    const minusClick = () => {
        setInputVal(inputVal => inputVal - 1);
    }

    const plusClick = () => {
        setInputVal(inputVal => inputVal + 1);
    }

    return (
        <div className="controls-btn-wrap">
            <button className="btn-controls" onClick={() => { removeItemToBasket(item); minusClick() }}>-</button>
            <input className="staff-num" type="number" value={inputVal} readOnly />
            <button className="btn-controls" onClick={() => { addItemToBasket(item); plusClick() }}>+</button>
        </div>
    )
}

export default ControlsBtn;