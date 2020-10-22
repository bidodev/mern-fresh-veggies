import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

/* Styles */
import './navbar.styles.scss';

const Navbar = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const isLoggedIn = false;
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar__logo">Veggies</div>
      </Link>
      <div className="navbar__links">
        {/* <div>About Us</div> */}
        <HashLink
          to="#how-we-work"
          scroll={(el) =>
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        >
          <div>How it works</div>
        </HashLink>
      </div>
      <ul className="navbar__account">
        <li>
          <Link to="#">
            <FontAwesomeIcon
              icon={['fas', 'shopping-cart']}
              className="fa-shopping-cart"
              onClick={() => setIsDisplayed(!isDisplayed)}
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
