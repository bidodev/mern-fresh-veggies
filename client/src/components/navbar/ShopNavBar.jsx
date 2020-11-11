import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ShopNavBar.styles.scss';
const ShopNavBar = ({ match, children }) => {

  //we are grabbing the login state and if it is true, we change the navbar to the account icon
  const isLoggedIn = useSelector((state) => state.login.user);

  const dispatch = useDispatch();
  const logOutUser = () => dispatch({ type: 'LOGOUT_USER' });
  const toggleAuthentication = () => dispatch({ type: 'SHOW_AUTH' });

  return (
    <>
      <nav className="shop__navbar">
        {/* Our Logo will be avaiable in the whole application, so it stays here */}
        <Link to="/">
          <div className="shop__navbar__logo">Veggies</div>
        </Link>
        <ul className="shop__navbar__account">
          {/* The childrens can be different upon to the parent, they are sent by the parent */}
          {children}

          {/* SignIN will be avaiable in the whole application, so it stays here */}
          {isLoggedIn ? (
            <>
              <li>
                <FontAwesomeIcon icon={['far', 'user-circle']} className="fa-user-circle" />
              </li>
              <li>
                <div className="shop__navbar__account__logout" onClick={logOutUser}>
                  LOG OUT
                </div>
              </li>
            </>
          ) : (
            <li>
              <Link to="#">
                <div className="shop__navbar__account__login" onClick={toggleAuthentication}>
                  LOGIN
                </div>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default ShopNavBar;
