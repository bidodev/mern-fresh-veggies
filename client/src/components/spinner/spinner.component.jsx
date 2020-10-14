import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './spinner.styles.scss';

const Spinner = () => {
  return (
    <div className="loading">
      <FontAwesomeIcon icon="spinner" className="icon" spin />
    </div>
  );
};

export default Spinner;
