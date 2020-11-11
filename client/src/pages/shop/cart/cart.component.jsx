import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CustomButton from 'components/UI/custom-button/custom-button.component';

import './cart.styles.scss';
const Cart = () => {
  const dispatch = useDispatch();

  /* Pull out the cart items*/
  const cartItems = useSelector(({ cart }) => cart.cartItems);

  /* RemoveItem from the cart */
  const removeItemHandler = (cartItemToRemove) => {
    dispatch({ type: 'REMOVE_ITEM', payload: cartItemToRemove });
  };
  const resetCart = (cartItemToRemove) => {
    dispatch({ type: 'CLEAR_CART', payload: cartItemToRemove });
  };

  /* Hidde or show cart */
  const toggleModal = () => dispatch({ type: 'TOGGLE_CART_HIDDEN' });

  return (
    <div className="cart-edit">
      <Link to={`/shop`}>
        <CustomButton onClick={toggleModal}>
          <FontAwesomeIcon icon={['fas', 'angle-left']} className="fa-angle-left" />
          Back to shopping
        </CustomButton>
      </Link>
      <p className="cart-title">You have added the following articles:</p>
      <ul className="cart-list">
        <li>
          <span>Item: </span>
          <span>Quantity: </span>
          <span>Price </span>
          <span>{} </span>
        </li>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <li>
              <span>{cartItem.name}</span>
              <span>{cartItem.quantity}x</span>
              <span>Price </span>
              <span>
                <FontAwesomeIcon
                  icon={['fas', 'times']}
                  className="fa-times"
                  onClick={() => {
                    removeItemHandler(cartItem);
                  }}
                />
              </span>
            </li>
          ))
        ) : (
          <li>Your cart is empty</li>
        )}
      </ul>
      <CustomButton type="button" disabled={cartItems.length <= 0 && true} onClick={resetCart}>
        Reset
      </CustomButton>
      <Link to={`/checkout`}>
        <CustomButton type="button" disabled={cartItems.length <= 0 && true}>
          Proceed to checkout
        </CustomButton>
      </Link>
    </div>
  );
};

export default Cart;
