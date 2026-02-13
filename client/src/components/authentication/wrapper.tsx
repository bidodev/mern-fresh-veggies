import React from 'react';
import './wrapper.styles.scss';

/* Redux */
import { useSelector, useDispatch } from 'react-redux';

/* Components */
import SignIn from 'components/authentication/login/Login';
import SignUp from 'components/authentication/signup/Signup';
import DisplayModal from 'components/modal/modal.component';

const AuthenticationWrapper = () => {
  
  /* Pull out if the authentication is showing and which component is showing */
  const isAuthenticationModalShowing = useSelector((state: any) => state.authentication.show);
  const isAuthenticationStatusSwitched = useSelector((state: any) => state.authentication.switch);

  const dispatch = useDispatch<any>();

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
