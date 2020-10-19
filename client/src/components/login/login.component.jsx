import React, { useState } from 'react';
import './login.component.styles.scss';

import FormInput from 'components/forms/input.component';
import CustomButton from 'components/custom-button/custom-button.component';
import axios from 'axios';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  //update redux
  const handleLoginData = async (event) => {
    event.preventDefault();
    const data = {
      email: userEmail,
      password: userPassword,
    };

    console.log(data);
    const response = axios
      .post('/account/login', data)
      .then(({ data }) => {
        console.log(data);
        alert('Logged with Sucess');
      })
      .catch((error) => console.log('Error in the login', error.message));
  };

  //update localState
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

  const signInWithGoogle = () => {
    console.log('Not implemented yet');
  };

  return (
    <div className="sign-in">
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
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSingIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Login;
