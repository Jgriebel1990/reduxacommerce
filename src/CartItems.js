import React from 'react';
import { connect } from 'react-redux'

const CartItems = props => {
    return (
        <div>
            <li>
                <img src={props.imgSrc} alt="javelin"/>
                <p>{props.name}</p>
                <p>{props.count}</p>
                <p>{props.price}</p>
            </li>
        </div>
    );
}

export default CartItems;