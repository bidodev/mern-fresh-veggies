import React from 'react';
import type { InputHTMLAttributes } from 'react';

/* Styles */
import './input.styles.scss';

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  handleInputValue?: (event: any) => void;
  label?: string;
};

const FormInput = ({ handleInputValue, label, ...restProps }: FormInputProps) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleInputValue} {...restProps} />
      {label ? (
        <label className={`${String(restProps.value ?? '').length ? 'shrink' : ''} form-input-label`}>{label}</label>
      ) : null}
    </div>
  );
};

export default FormInput;
