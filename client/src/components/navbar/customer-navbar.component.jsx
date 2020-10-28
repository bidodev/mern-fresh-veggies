import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useSelector, useDispatch } from 'react-redux';
/* Styles */
import './customer-navbar.styles.scss';

const NavigationCustomer = () => {
  //we are grabbing the login state and if it is true, we change the navbar to the account icon
  const isLoggedIn = useSelector((state) => state.login.farmerUser);
  const dispatch = useDispatch();

  return (
    <nav className="customer-navbar">
      <Link to="/">
        <div className="customer-navbar__logo">Veggies</div>
      </Link>
      <div className="customer-navbar__links">
        {/* <div>About Us</div> */}
        <HashLink to="#how-we-work" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
          <div>How it works</div>
        </HashLink>
      </div>
      <ul className="customer-navbar__account">
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
                <div className="customer-navbar__account__logout" onClick={() => dispatch({ type: 'LOGOUT_USER' })}>
                  LOG OUT
                </div>
              </Link>
            </li>
          </React.Fragment>
        ) : (
          <li>
            <Link to="#">
              <div
                className="customer-navbar__account__login"
                onClick={() => dispatch({ type: 'TOGGLE_SIGN-IN_MODAL' })}
              >
                SIGN IN
              </div>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavigationCustomer;
