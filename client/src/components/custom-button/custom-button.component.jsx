 
import React from "react";
import "./custom-button.styles.scss";

function CustomButton({ children, isGoogleSingIn, size, ...restProps }) {
  return (
    <button
      className={`${isGoogleSingIn ? "google-sign-in" : ''} ${size ? size : ''} custom-button `}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;