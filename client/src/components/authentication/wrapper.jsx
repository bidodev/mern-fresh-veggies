import React from 'react';
import './wrapper.styles.scss';

import { useSelector, useDispatch } from 'react-redux';

import SignIn from 'components/authentication/login/Login';
import SignUp from 'components/authentication/signup/Signup';

import DisplayModal from 'components/modal/modal.component';

const AuthenticationWrapper = () => {
  /* Pull out if the authentication is showing and which component is showing */
  const isAuthenticationModalShowing = useSelector(({ authentication }) => authentication.show);
  const isAuthenticationStatusSwitched = useSelector(({ authentication }) => authentication.switch);

  const dispatch = useDispatch();

  /* show or hidden the authentication modal  */
  const toggleAuthenticationModal = () => dispatch({ type: 'SHOW_AUTH' });

  const modalConfig = {
    modalStatus: isAuthenticationModalShowing,
    closeModal: toggleAuthenticationModal,
    className: 'authentication-modal',
    overlayClassName: 'authentication-modal--overlay',
  };

  return (
    <DisplayModal {...modalConfig}>
      {isAuthenticationStatusSwitched ? <SignUp /> : <SignIn />}
    </DisplayModal>
  );
};

export default AuthenticationWrapper;
