import React, { useState, useEffect, useContext, useRef } from 'react';
import './itemDetails.css';
import { Context } from '../../contex';
import { NavLink } from 'react-router-dom';
import backIcon from '../../arrowhead-thin-outline-to-the-left.svg';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from 'fortawesome/react-fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee as fasFaCoffee } from '@fortawesome/pro-solid-svg-icons'
// import { faCoffee as farFaCoffee } from '@fortawesome/pro-regular-svg-icons'
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
function ItemDetails(props) {
    const { addItemToBasket } = useContext(Context);
    const { removeItemToBasket } = useContext(Context);
    const { staffInBasket } = useContext(Context);
    const [inputVal, setInputVal] = useState(0);
    const [inBasket, setInBasket] = useState(false);
    const item = props.location.aboutProps.prop;


    useEffect(() => {
        let staffIndex = -1;

        staffInBasket.forEach((staff, index) => {
            if (staff.id === item.id) {
                staffIndex = index;
                setInputVal(staffInBasket[staffIndex].num)
                return;
            }
        });
    }, []);

    const minusClick = () => {
        if (inputVal - 1 < 0) {
            return;
        } else {
            setInputVal(inputVal => inputVal - 1);
        }
    }

    const plusClick = () => {
        setInputVal(inputVal => inputVal + 1);
    }


    return (
        <div className="container">
            <FontAwesomeIcon icon={['fas', 'fa-chevron-left']} className="fas fa-chevron-left " />
            <NavLink to="/">

                <i className="fas fa-chevron-left"></i>
                <FontAwesomeIcon className="fas fa-chevron-left" />
                Back to catalog
    </NavLink>
            <div className="item-details">
                <div className="item-details__inner">
                    <img className="item-details__img" src={item.image} alt={item.title} />
                    <div className="item-details__content">
                        <p className="item-details__name">{item.title}</p>
                        <p>{item.description}</p>
                        <p className="item-detaild__price">${(item.price).toFixed(2)}</p>
                        {inputVal >= 1 ? <button onClick={() => { removeItemToBasket(item, true); setInputVal(0) }}>remove from basket</button> :
                            <button onClick={() => { addItemToBasket(item); setInputVal(1) }}>Add to basket</button>
                        }
                        {inputVal >= 1 ? <><button onClick={() => { removeItemToBasket(item); minusClick() }} disabled={inputVal === 0}>-</button>
                            <input type="number" value={inputVal} readOnly />
                            <button onClick={() => { addItemToBasket(item); plusClick() }}>+</button>
                            <div className="total">
                                <div className="total__label">
                                    Total price
                            </div>
                                <div className="total__price">
                                    ${(inputVal * item.price).toFixed(2)}
                                </div>
                            </div>

                        </> : null}

                    </div>
                </div>
            </div>
        </div>
    )
}


export default ItemDetails;
