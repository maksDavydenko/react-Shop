import React, { useState, useEffect, useContext } from 'react';
import './productItem.css';
import { Context } from '../../contex';
import { NavLink } from 'react-router-dom';


function ProducItem(props) {
    const item = props.props;
    const { staffInBasket } = useContext(Context);
    const staff = { staffInBasket: staffInBasket }
    const prop = Object.assign(item, staff);
    const [inBasket, setInBasket] = useState(false);

    useEffect(() => {
        staffInBasket.forEach(staff => {
            if (staff.id === item.id) {
                setInBasket(true);
                return;
            }
        });
    }, []);

    return (
        <NavLink className="product" to={{
            pathname: 'itemDetails',
            aboutProps: { prop },
        }
        } exact>
            <img className="product__img" src={item.image} alt={item.title} />
            <p className="product__name">{item.title}</p>
            <h4 className="product__price">${(item.price).toFixed(2)}</h4>
            <div className="more-info">See more</div>
            {inBasket ? <div className="label">In basket</div> : null}
        </NavLink>
    )
}


export default ProducItem;
