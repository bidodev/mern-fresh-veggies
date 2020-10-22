import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

/* Styles */
import './navbar.styles.scss';

const Navbar = () => {
  const isLoggedIn = false;
  return (
    <nav className="navbar">
      <div className="navbar__logo">Logo</div>
      <div className="navbar__links">
        {/* <div>About Us</div> */}
        <div>How it works</div>
      </div>
      <ul className="navbar__account">
        <li>
          <Link to="#">
            <FontAwesomeIcon
              icon={['fas', 'shopping-cart']}
              className="fa-shopping-cart"
            />
          </Link>
        </li>
        {isLoggedIn ? (
          <li>
            <Link to="#">
              <FontAwesomeIcon
                icon={['far', 'user-circle']}
                className="fa-user-circle"
              />
            </Link>
          </li>
        ) : (
          <li>
            <Link to="#">
              <div className="navbar__account__login"> SIGNUP</div>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
