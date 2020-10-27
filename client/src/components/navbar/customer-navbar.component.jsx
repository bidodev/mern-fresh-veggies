import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

/* Styles */
import './customer-navbar.styles.scss';

const NavigationCustomer = ({ toggle }) => {
  //here logged in still to be changed
  const isLoggedIn = false;
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
            <FontAwesomeIcon icon={['fas', 'shopping-cart']} className="fa-shopping-cart" onClick={toggle} />
          </Link>
        </li>
        {isLoggedIn ? (
          <li>
            <Link to="#">
              <FontAwesomeIcon icon={['far', 'user-circle']} className="fa-user-circle" />
            </Link>
          </li>
        ) : (
          <li>
            <Link to="#">
              <div className="customer-navbar__account__login"> SIGN IN</div>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavigationCustomer;
