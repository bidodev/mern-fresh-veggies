import React from 'react';

/* Component Imports */
import SignIn from 'components/login/login.component';
import SignUp from 'components/signup/signup.component';

/* Styles */
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="farmer__authentication">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default Authentication;
