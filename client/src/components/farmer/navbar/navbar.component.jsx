import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from 'react-router-dom';

/* Styles */
import './navbar.styles.scss';

function Navbar({ name, photo }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [active, setActive] = useState(false);

  const logoutUser = () => {
    //1. Remove the user data
    dispatch({ type: 'LOGOUT_USER' });

    //2. Set the user to the landingPage
    history.push('/');
  };

  return (
    <section className="wrapper">
      <div className="navbar">
        <div className="left">
          <ul>
          <li>
              <Link to="#">
                <FontAwesomeIcon icon={['fas', 'plus']} className="icon" />
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
            <li className={active ? 'active' : ''} onClick={() => setActive(!active)}>
              <Link to="#">
                <img src={`/images/users/${photo}`} alt={`${name}`} />
                <i className="fas fa-angle-down"></i>
              </Link>

              <div className="dropdown">
                <ul>
                  <li>
                    <Link to="/farmer/admin">
                      <FontAwesomeIcon icon={['fas', 'user']} className="icon" />
                      <span className="dropdown__link">Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/farmer/admin/settings">
                      <FontAwesomeIcon icon={['fas', 'sliders-h']} className="icon " />
                      <span className="dropdown__link">Settings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FontAwesomeIcon icon={['fas', 'sign-out-alt']} className="icon" />
                      <button className="logout-btn" onClick={logoutUser}>
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
    </section>
  );
}

export default Navbar;
