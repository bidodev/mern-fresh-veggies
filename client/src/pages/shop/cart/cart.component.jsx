import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CustomButton from 'components/UI/custom-button/custom-button.component';
import Checkout from 'pages/checkout/checkout.page';

import './cart.styles.scss';
const Cart = () => {
  const cartItems = useSelector(({ cart }) => cart.cartItems);
  const dispatch = useDispatch();
  const removeItemHandler = (cartItemToRemove) => {
    dispatch({ type: 'REMOVE_ITEM', payload: cartItemToRemove });
  };
  const required = cartItems.length <= 0 ? undefined : 'Required';
  return (
    <div className="cart-edit">
      <Link to="/shop">
        <CustomButton>
          <FontAwesomeIcon icon={['fas', 'angle-left']} className="fa-angle-left" />
          Back to shopping
        </CustomButton>
      </Link>
      <h1>this is edit your cart</h1>
      <ul className="cart-list">
        {/* <li>
          <span>Item: </span>
          <span>Quantity: </span>
          <span>Price </span>
        </li> */}
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <li>
              <span>{cartItem.name}</span>
              <span>{cartItem.quantity}x</span>
              <span>Price </span>
              <FontAwesomeIcon
                icon={['fas', 'times']}
                className="fa-times"
                onClick={() => {
                  removeItemHandler(cartItem);
                }}
              />
            </li>
          ))
        ) : (
          <li>Your cart is empty</li>
        )}
      </ul>

      <Link to="/checkout">
        <CustomButton validate={[required]}>Proceed to checkout</CustomButton>
      </Link>
      <Route exact path={'/checkout'} component={Checkout}></Route>
    </div>
  );
};

export default Cart;
