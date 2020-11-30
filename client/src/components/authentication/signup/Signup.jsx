import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import axios from 'axios';

/* Component Imports */
import FormInput from 'components/forms/input/input.component';
import CustomButton from 'components/UI/custom-button/custom-button.component';

/* Styles */
import './Signup.styles.scss';

const ClientSignUp = () => {
  const match = useRouteMatch();
  const url = match.path === '/shop' ? 'user' : 'farmer';

  /* show or hidden the authentication modal  */
  const toggleAuthenticationModal = () => dispatch({ type: 'SHOW_AUTH' });

  /* toggle which component is active (signIn or SignUp) */
  const toggleAuthenticationState = () => dispatch({ type: 'SWITCH_AUTH' });

  const [displayName, setDisplayName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  console.log(error);
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Connecting CLIENT with the API
    const data = {
      name: displayName,
      email: userEmail,
      password: userPassword,
      passwordConfirmation: confirmPassword,
    };
    axios
      .post(`/account/register/${url}`, data)
      .then(({ data }) => {
        dispatch({ type: 'LOGIN_USER', payload: data });
        toggleAuthenticationModal();
      })
      .catch((error) => {
        setError(error.response.data.errors);
        setTimeout(() => {
          setError(null);
        }, 1000);
      });
  };

  // Update localState
  const handleInputValue = (event) => {
    const { value, name } = event.target;

    switch (name) {
      case 'displayName':
        return setDisplayName(value);
      case 'email':
        return setUserEmail(value);
      case 'password':
        return setUserPassword(value);
      case 'confirmPassword':
        return setConfirmPassword(value);
      default:
    }
  };

  return (
    <>
      <div className="sign-up__form-container">
        <div className="sign-up__form">
          <h2 className="title">I do not have an account</h2>
          <span>Sign up with your email and password</span>

          <form className="sign-up-form" onSubmit={handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              label="name"
              required
              handleInputValue={handleInputValue}
            />
            <FormInput
              type="email"
              required
              name="email"
              value={userEmail}
              label="email"
              handleInputValue={handleInputValue}
            />
            <FormInput
              type="password"
              name="password"
              value={userPassword}
              label="password"
              required
              handleInputValue={handleInputValue}
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              label="repeat password"
              required
              handleInputValue={handleInputValue}
            />
            <div onClick={toggleAuthenticationState}>You already have an account?</div>

            <div className="buttons">
              <CustomButton type="submit">Sign Up</CustomButton>
            </div>
          </form>
          <div className="alert-error">{error && error.map((error) => <h5>{`${error.param}: ${error.msg}`}</h5>)}</div>
        </div>
      </div>
      <div className="sign-up__animation"></div>
    </>
  );
};

export default ClientSignUp;
