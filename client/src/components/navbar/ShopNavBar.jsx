import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';

import './ShopNavBar.styles.scss';

import Modal from 'components/modal/modal.component';
import ClientSignIn from 'components/client-authentication/client-login/client-login.component';
import ClientSignUp from 'components/client-authentication/client-signup/client-signup.component';

const AdminNavBar = () => {
  return (<div>Hello Admin</div>)
}

const TestBar = () => {
  return (<div>Hello Test</div>)
}

const ShopNavBar = ({ match }) => {


  //we are grabbing the login state and if it is true, we change the navbar to the account icon
  const isLoggedIn = useSelector((state) => state.login.farmerUser);
  const cartItems = useSelector(({cart}) => cart.cartItems);

  const dispatch = useDispatch();
  const switchLogInSignIn = useSelector((state) => state.switch.show);

  const [signInModalStatus, toogleSignInModal] = useState(false);
  const [cartModalStatus, toogleCartModal] = useState(false);

  const toogleModal = (modal) => {
    switch (modal) {
      case 'SIGN_IN': {
        return toogleSignInModal(!signInModalStatus)
      }
      case 'SHOP_CART': {
        return toogleCartModal(!cartModalStatus)
      }
      default:
    }
  }

  return (
    <>
      <nav className="shop__navbar">
        <Link to="/">
          <div className="shop__navbar__logo">Veggies</div>
        </Link>
        <div className="shop__navbar__links">
          {/* <div>About Us</div> */}
          <HashLink to="#how-we-work" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <div>How it works</div>
          </HashLink>
        </div>
        <ul className="shop__navbar__account">
          <li>
            <Link to="#">
              <FontAwesomeIcon
                icon={['fas', 'shopping-cart']}
                className="fa-shopping-cart"
                onClick={()=>toogleModal('SHOP_CART')}
              />
            </Link>
          </li>
          {isLoggedIn ? (
            <React.Fragment>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={['far', 'user-circle']} className="fa-user-circle" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="shop__navbar__account__logout" onClick={() => dispatch({ type: 'LOGOUT_USER' })}>
                    LOG OUT
                  </div>
                </Link>
              </li>
            </React.Fragment>
          ) : (
            <li>
              <Link to="#">
                <div
                  className="shop__navbar__account__login"
                  onClick={()=>toogleModal('SIGN_IN')}
                >
                  SIGN IN
                </div>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <Modal
        modalStatus={cartModalStatus}
        closeModal={()=>toogleModal('SHOP_CART')}
        className="cart-modal"
        overlayClassName="cart-overlay"
      >
        {cartItems.length ? (
        cartItems.map(cartItem => (
          <h2>Item: {cartItem.name}, Quantity: {cartItem.quantity}</h2>
        ))
      ) : (
        <h2>Your cart is empty</h2>
      )}
      </Modal>
      <Modal
        modalStatus={signInModalStatus}
        closeModal={() => toogleModal('SIGN_IN')}
        className="sign-in-modal"
        overlayClassName="sign-in-overlay"
      >
        {switchLogInSignIn ? <ClientSignUp toogleModal={toogleModal}/> : <ClientSignIn toogleModal={toogleModal}/>}
      </Modal>
    </>
  );
};

export default ShopNavBar;
