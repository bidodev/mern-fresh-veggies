import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const Checkout = () => {
  const cartItems = useSelector(({ cart }) => cart.cartItems);
  return <h1>this is checkout</h1>;
  //   cartItems.length ? (
  //     cartItems.map((cartItem) => (
  //       <h2>
  //         Item: {cartItem.name}, Quantity: {cartItem.quantity}
  //       </h2>
  //     ))
  //   ) : (
  //     <h2>Your cart is empty</h2>
  //   );
};

export default Checkout;
