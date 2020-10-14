import React, { useState } from "react";
import "./signup.styles.scss";

import FormInput from "components/forms/input.component";
import CustomButton from "components/custom-button/custom-button.component";


const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userPassword !== confirmPassword) {
      alert("Passwords don't match...");
      return;
    }

    try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     userEmail,
    //     userPassword
    //   );
    //   if (await createUserProfileDocument(user, { displayName })) {
    //     setDisplayName("");
    //     setUserEmail("");
    //     setUserPassword("");
    //     setConfirmPassword("");
    //     alert("Account Created with Sucess");
    //   }
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  };

  //update localState
  const handleInputValue = (event) => {
    const { value, name } = event.target;

    switch (name) {
      case "displayName":
        return setDisplayName(value);
      case "email":
        return setUserEmail(value);
      case "password":
        return setUserPassword(value);
      case "confirmPassword":
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
        <FormInput
          type="email"
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

export default SignUp;