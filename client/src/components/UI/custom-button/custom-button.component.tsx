import React from 'react';

/* Styles */
import './custom-button.styles.scss';

interface ICustomButton {
  children?: React.ReactNode;
  isGoogleSingIn?: boolean;
  size?: string;
  restProps?: any;
}

function CustomButton({ children, isGoogleSingIn, size, ...restProps }: ICustomButton) {
  return (
    <button
      className={`${isGoogleSingIn ? 'google-sign-in' : ''} 
      ${size ? size : ''} custom-button `}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
