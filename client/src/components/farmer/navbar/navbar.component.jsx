import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

/* Styles */
import './navbar.styles.scss';

function Navbar({ data }) {
  const { name, photo } = data;
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  return (
    <div className="wrapper">
      <div className="navbar">
        <div className="left">
          <ul>
            <li>
              <Link to="#">
                <FontAwesomeIcon icon={['fas', 'home']} className="icon" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FontAwesomeIcon icon={['fas', 'envelope']} className="icon" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FontAwesomeIcon icon={['fas', 'bell']} className="icon" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li
              className={active ? 'active' : ''}
              onClick={() => setActive(!active)}
            >
              <Link to="#">
                <img src={`/images/${photo}`} alt={`${name}`} />
                <i className="fas fa-angle-down"></i>
              </Link>

              <div className="dropdown">
                <ul>
                  <li>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={['fas', 'user']}
                        className="icon"
                      />
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={['fas', 'sliders-h']}
                        className="icon"
                      />
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={['fas', 'sign-out-alt']}
                        className="icon"
                      />
                      <button onClick={() => dispatch({ type: 'LOGOUT_USER' })}>
                        Logout
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
