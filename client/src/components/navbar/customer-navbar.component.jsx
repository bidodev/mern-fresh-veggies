import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
/* Styles */
import './customer-navbar.styles.scss';

const NavigationCustomer = () => {
  //we are grabbing the login state and if it is true, we change the navbar to the account icon
  const isLoggedIn = useSelector((state) => state.status.login);
  console.log(isLoggedIn);
  const dispatch = useDispatch();
  const history = useHistory();
  const reloadPageHandler = () => {
    dispatch({ type: 'LOGIN_USER' });
    window.location.reload(false);
  };
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
                <div className="customer-navbar__account__logout" onClick={() => reloadPageHandler()}>
                  LOG OUT
                </div>
              </Link>
            </li>
          </React.Fragment>
        ) : (
          <li>
            <div className="customer-navbar__account__login" onClick={() => dispatch({ type: 'TOGGLE_SIGN-IN_MODAL' })}>
              SIGN IN
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavigationCustomer;
