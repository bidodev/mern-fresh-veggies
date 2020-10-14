import React from "react";
import "./authentication.styles.scss";

//signIn Component
import SignIn from "components/login/login.component"
import SignUp from "components/signup/signup.component";

const Authentication = () => {
  return (
    <div className="farmer__authentication">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default Authentication;