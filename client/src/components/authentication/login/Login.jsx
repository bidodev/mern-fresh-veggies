import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { loginUser } from 'redux/actions/authentication';

/* Component Imports */
import FormInput from 'components/forms/input/input.component';
import CustomButton from 'components/UI/custom-button/custom-button.component';

/* Styles */
import './Login.styles.scss';

const ClientLogin = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState(null);
  const [signin, setIsSignin] = useState(false);

  const dispatch = useDispatch();

  /* show or hidden the authentication modal  */
  const toggleAuthenticationModal = () => dispatch({ type: 'SHOW_AUTH' });

  /* toggle which component is active (signIn or SignUp) */
  const toggleAuthenticationState = () => dispatch({ type: 'SWITCH_AUTH' });

  // grabbing the form data and send it to the database
  const handleLoginData = async (event) => {
    event.preventDefault();

    const data = {
      email: userEmail,
      password: userPassword,
    };

    setIsSignin(true);
    axios
      .post('/account/login', data)
      .then(({ data }) => {
        dispatch(loginUser(data));
        toggleAuthenticationModal();
        setIsSignin(false);
      })
      .catch((error) => {
        setError(error.response.data.errors);
        setTimeout(() => {
          setIsSignin(false);
          setError(null);
        }, 1000);
      });
  };

  // update localState
  const handleInputValue = (event) => {
    const { value, name } = event.target;

    switch (name) {
      case 'email':
        return setUserEmail(value);
      case 'password':
        return setUserPassword(value);
      default:
    }
  };

  return (
    <React.Fragment>
      <div className="sign-in__animation"></div>
      <div className="sign-in__form-container">
        <div className="sign-in__form">
          <h2 className="title">I already have an account</h2>
          <span>Sign in with your email and password</span>
          <form onSubmit={handleLoginData}>
            <FormInput
              name="email"
              type="email"
              value={userEmail}
              required
              label="email"
              handleInputValue={handleInputValue}
            />
            <FormInput
              name="password"
              type="password"
              value={userPassword}
              required
              label="password"
              handleInputValue={handleInputValue}
            />
            <div className="alert-error">{error && <h5>{`Fail: ${error}`}</h5>}</div>

            <div className="not-authenticated">
              <div onClick={toggleAuthenticationState}>You are not registered yet?</div>
              <div className="buttons">
                <CustomButton type="submit">{signin ? 'Loging...' : 'Sign In'}</CustomButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClientLogin;
