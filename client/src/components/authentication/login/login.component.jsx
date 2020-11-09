import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

/* Component Imports */
import FormInput from 'components/forms/input/input.component';
import CustomButton from 'components/UI/custom-button/custom-button.component';

/* Styles */
import './client-login.styles.scss';

const ClientLogin = ({ toogleModal }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useDispatch();

  // grabbing the form data and send it to the database
  const handleLoginData = async (event) => {
    event.preventDefault();

    const data = {
      email: userEmail,
      password: userPassword,
    };

    axios
      .post('/account/login', data)
      .then(({ data }) => {
        dispatch({ type: 'LOGIN_USER', payload: data });
        toogleModal('SIGN_IN');
      })
      .catch((error) => console.log('Error in the login', error.message));
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

            <div onClick={() => dispatch({ type: 'SWITCH_SIGN-IN_LOG-IN' })}>You are not registered yet?</div>
            <div className="buttons">
              <CustomButton type="submit">Sign In</CustomButton>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClientLogin;
