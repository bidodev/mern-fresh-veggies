import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CustomButton from 'components/UI/custom-button/custom-button.component';
import Checkout from 'pages/checkout/checkout.page';

import './cart.styles.scss';
const Cart = () => {
  const cartItems = useSelector(({ cart }) => cart.cartItems);
  return (
    <div className="cart-edit">
      <Link to="/shop">
        <CustomButton>Back to shopping</CustomButton>
      </Link>
      <h1>this is edit your cart</h1>
      <ul>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <li>
              Item: {cartItem.name}, Quantity: {cartItem.quantity}
            </li>
          ))
        ) : (
          <li>Your cart is empty</li>
        )}
      </ul>
      <Router>
        {/* <Link to="/checkout"> */}
        <Route path="/checkout" component={Checkout}>
          <CustomButton>
            {/* <Link to="/checkout"> */}
            Proceed to checkout
            {/* </Link> */}
          </CustomButton>
        </Route>
      </Router>
      {/* </Link> */}
    </div>
  );
};

export default Cart;
