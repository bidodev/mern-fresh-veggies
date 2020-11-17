import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'components/modal/modal.component';

import './ShopNavBar.styles.scss';
const ShopNavBar = ({ match, children, totalQuantity }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  //we are grabbing the login state and if it is true, we change the navbar to the account icon
  const isLoggedIn = useSelector((state) => state.login.user);
  const isAccountModalStatus = useSelector((state) => state.modal.show);
  const logOutUser = () => {
    dispatch({ type: 'LOGOUT_USER' });
    dispatch({ type: 'TOGGLE_MODAL' });
    //if we logout from the '/farmer/admin' we send directly tot the landing page '/'
    match.path === '/farmer/admin' && history.push('/');
  };
  const toggleAuthentication = () => dispatch({ type: 'SHOW_AUTH' });
  const toggleModal = () => dispatch({ type: 'TOGGLE_MODAL' });
  return (
    <>
      <nav className="shop__navbar">
        {/* Our Logo will be available in the whole application, so it stays here */}
        <Link to="/">
          <div className="shop__navbar__logo">Veggies</div>
        </Link>
        {/* here it did not work with match.path because '/shop' is common with '/shop/cart */}
        {window.location.pathname === '/shop' ? (
          <HashLink to="#how-we-work" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <p className="shop__navbar__link">How we work</p>
          </HashLink>
        ) : null}
        <ul className="shop__navbar__account">
          {/* The children can be different upon to the parent, they are sent by the parent */}
          {children}
          <div className="total-quantity">{totalQuantity}</div>
          {/* SignIN will be available in the whole application, so it stays here */}
          {/* If it is loggenIn, then the account icon appears with on click --> Logout */}
          {isLoggedIn ? (
            <>
              <li>
                <FontAwesomeIcon icon={['far', 'user-circle']} className="fa-user-circle" onClick={toggleModal} />
              </li>
              <Modal
                modalStatus={isAccountModalStatus}
                closeModal={toggleModal}
                className="account-modal"
                overlayClassName="account-overlay"
              >
                <li>
                  <div className="shop__navbar__account__email">{isLoggedIn.data.email}</div>
                </li>
                <li>
                  <div className="shop__navbar__account__logout" onClick={logOutUser}>
                    LOG OUT
                  </div>
                </li>
              </Modal>
            </>
          ) : (
            <li>
              <div className="shop__navbar__account__login" onClick={toggleAuthentication}>
                LOGIN
              </div>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default ShopNavBar;
