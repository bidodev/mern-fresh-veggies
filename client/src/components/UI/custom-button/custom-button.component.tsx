import React from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

/* Styles */
import './custom-button.styles.scss';

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  isGoogleSingIn?: boolean;
  size?: string;
};

function CustomButton({ children, isGoogleSingIn = false, size = '', ...restProps }: CustomButtonProps) {
  return (
    <button
      className={`${isGoogleSingIn ? 'google-sign-in' : ''} 
      ${size} custom-button `}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
