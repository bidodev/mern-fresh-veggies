import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//import { HashLink } from 'react-router-hash-link';
import './ShopNavBar.styles.scss';

import Modal from 'components/modal/modal.component';

import SignIn from 'components/authentication/login/login.component';
import SignUp from 'components/authentication/signup/signup.component';

const ShopNavBar = ({ match, children }) => {
  console.log('render');

  //we are grabbing the login state and if it is true, we change the navbar to the account icon
  const isLoggedIn = useSelector((state) => state.login.user);
  const dispatch = useDispatch();

  const switchLogInSignIn = useSelector((state) => state.switch.show);
  const [signInModalStatus, toogleSignInModal] = useState(false);
  const toogleModal = (modal) => {
    switch (modal) {
      case 'SIGN_IN': {
        return toogleSignInModal(!signInModalStatus);
      }
      default:
    }
  };

  const logOutUser = (user) => {
    //1. LOGOUT THE USERS
    dispatch({ type: 'LOGOUT_USER' });

    //2.REDIRECT USER TO PAGE.
    //useHistory.push('/')
  };
  const navFixed = React.createRef();
  /*On component mount add eventListener */


  return (
    <>
      <nav className="shop__navbar" ref={navFixed}>
        {/* Our Logo will be avaiable in the whole application, so it stays here */}
        <Link to="/">
          <div className="shop__navbar__logo">Veggies</div>
        </Link>
        <ul className="shop__navbar__account">
          {/* The childrens can be different upon to the parent, they are sent by the parent */}
          {children}

          {/* SignIN will be avaiable in the whole application, so it stays here */}
          {isLoggedIn ? (
            <React.Fragment>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={['far', 'user-circle']} className="fa-user-circle" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="shop__navbar__account__logout" onClick={logOutUser}>
                    LOG OUT
                  </div>
                </Link>
              </li>
            </React.Fragment>
          ) : (
            <li>
              <Link to="#">
                <div className="shop__navbar__account__login" onClick={() => toogleModal('SIGN_IN')}>
                  LOGIN
                </div>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      {/* SIGN IN MODAL */}

      <Modal
        modalStatus={signInModalStatus}
        closeModal={() => toogleModal('SIGN_IN')}
        className="sign-in-modal"
        overlayClassName="sign-in-overlay"
      >
        {switchLogInSignIn ? <SignUp match={match} toogleModal={toogleModal} /> : <SignIn toogleModal={toogleModal} />}
      </Modal>
    </>
  );
};

export default ShopNavBar;
