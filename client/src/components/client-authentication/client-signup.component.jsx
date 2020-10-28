import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

/* Component Imports */
import FormInput from 'components/forms/input/input.component';
import CustomButton from 'components/UI/custom-button/custom-button.component';

/* Styles */
import './client-signup.styles.scss';

const ClientSignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userPassword !== confirmPassword) {
      alert("Passwords don't match...");
      return;
    }

    // Connecting CLIENT with the API
    const data = {
      name: displayName,
      email: userEmail,
      password: userPassword,
      passwordConfirmation: confirmPassword,
    };
    axios
      .post(`/account/register/user`, data)
      .then(({ data }) => {
        dispatch({ type: 'LOGIN_USER', payload: data });
        history.push('/shop');
        // if it is successful, close the modal
        if (data.status === 'success') {
          dispatch({ type: 'TOGGLE_SIGN-IN_MODAL' });
        }
      })
      .catch((error) => console.log('Error creating user', error.message));
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
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="name"
          handleInputValue={handleInputValue}
        />
        <FormInput type="email" name="email" value={userEmail} label="email" handleInputValue={handleInputValue} />
        <FormInput
          type="password"
          name="password"
          value={userPassword}
          label="password"
          handleInputValue={handleInputValue}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="repeat password"
          handleInputValue={handleInputValue}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ClientSignUp;
