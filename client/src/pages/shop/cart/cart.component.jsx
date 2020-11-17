import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CustomButton from 'components/UI/custom-button/custom-button.component';

import './cart.styles.scss';
const Cart = ({ match }) => {
  const dispatch = useDispatch();
  /* Pull out the cart items*/
  const cartItems = useSelector(({ cart }) => cart.cartItems);

  //total sum for the cart
  let totalSumArray = cartItems.map((cartItem) => cartItem.quantity * cartItem.price);
  let totalSum = totalSumArray.reduce((acc, cur) => acc + cur, 0).toFixed(2);

  // INCREASE from the cart
  const increaseItemHandler = (cartItem) => {
    console.log(cartItem);
    const { id, name, quantity, farmer } = cartItem;
    dispatch({
      type: 'ADD_ITEM',
      payload: { id, name, quantity: 1, farmer },
    });
  };

  /* DECREASE Item from the cart */
  const decreaseItemHandler = (cartItemToDecrease) => {
    dispatch({ type: 'REMOVE_ITEM', payload: cartItemToDecrease });
  };
  /* RemoveItem from the cart */
  const removeItemHandler = (cartItemToRemove) => {
    dispatch({ type: 'CLEAR_ITEM_FROM_CART', payload: cartItemToRemove });
  };
  const resetCart = (cartItemToRemove) => {
    dispatch({ type: 'CLEAR_CART', payload: cartItemToRemove });
  };

  /* Hide or show cart */
  const toggleModal = () => dispatch({ type: 'TOGGLE_CART_HIDDEN' });
  // here we need to reverse the logic with the modal
  const closeModal = () => (match.path === '/shop/cart' ? false : dispatch({ type: 'TOGGLE_CART_HIDDEN' }));
  return (
    <div className="cart-edit">
      <Link to={`/shop`}>
        <CustomButton onClick={closeModal}>
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
            <li className="modal-li">
              <span>{cartItem.name}</span>
              <span>
                <button className="decrease-button" onClick={() => decreaseItemHandler(cartItem)}>
                  -
                </button>
                {cartItem.quantity}
                <button className="increase-button" onClick={() => increaseItemHandler(cartItem)}>
                  +
                </button>
              </span>
              <span> {cartItem.price} </span>
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
          <li className="empty-cart">Your cart is empty</li>
        )}
      </ul>
      <div className="total-price">Total price: {totalSum}</div>
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
