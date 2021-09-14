import React from 'react';
import './wrapper.styles.scss';

/* Redux */
import { useSelector, useDispatch } from 'react-redux';

/* Components */
import SignIn from 'src/components/authentication/login/Login';
import SignUp from 'src/components/authentication/signup/Signup';
import DisplayModal from 'src/components/modal/modal.component';

const AuthenticationWrapper = ({ match }) => {
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

  return <DisplayModal {...modalConfig}>{isAuthenticationStatusSwitched ? <SignUp /> : <SignIn />}</DisplayModal>;
};

export default AuthenticationWrapper;
