import React from 'react';

/* Component Imports */
import SignIn from 'components/authentication/login/login.component';
import SignUp from 'components/authentication/signup/signup.component';
import Story from 'components/authentication/story/story.component';
import ShopNavBar from 'components/navbar/ShopNavBar';

/* Styles */
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <>
      <ShopNavBar content={''}/>
      <div className="farmer__authentication">
        <Story />
      </div>
    </>
  );
};
export default Authentication;
