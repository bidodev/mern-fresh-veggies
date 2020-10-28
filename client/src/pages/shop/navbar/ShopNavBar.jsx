import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';

import './ShopNavBar.styles.scss';

import Modal from 'components/modal/modal.component';
import ClientSignIn from 'components/client-authentication/client-login/client-login.component';
import ClientSignUp from 'components/client-authentication/client-signup/client-signup.component';

const ShopNavBar = () => {
  //we are grabbing the login state and if it is true, we change the navbar to the account icon
  const isLoggedIn = useSelector((state) => state.login.farmerUser);
  const dispatch = useDispatch();

  // redux state for the cart modal
  const modalStatus = useSelector((state) => state.status.modal);
  const signInModalStatus = useSelector((state) => state.clientSignIn.modal);
  const switchLogInSignIn = useSelector((state) => state.switch.show);

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
                onClick={() => dispatch({ type: 'TOGGLE_MODAL' })}
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
                  onClick={() => dispatch({ type: 'TOGGLE_SIGN-IN_MODAL' })}
                >
                  SIGN IN
                </div>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <Modal
        modalStatus={modalStatus}
        closeModal={() => dispatch({ type: 'TOGGLE_MODAL' })}
        className="cart-modal"
        overlayClassName="cart-overlay"
      >
        This is what you added to cart
      </Modal>
      <Modal
        modalStatus={signInModalStatus}
        closeModal={() => dispatch({ type: 'TOGGLE_SIGN-IN_MODAL' })}
        className="sign-in-modal"
        overlayClassName="sign-in-overlay"
      >
        {switchLogInSignIn ? <ClientSignUp /> : <ClientSignIn />}
      </Modal>
    </>
  );
};

export default ShopNavBar;
