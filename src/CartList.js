import React from "react";
import CartItems from './CartItems';


const CartList = props => {
  const CartItem = Object.keys(props.products).map(id => {
    if (props.products[id].count > 0) {
      return <CartItems {...props.products[id]} key={id} id={id}/>;
    } else {
      return null;
    }
  });

  return (
    <div style={props.style}>
        CART LIST
      <div>{CartItem}</div>
    </div>
  );
};

export default CartList;
