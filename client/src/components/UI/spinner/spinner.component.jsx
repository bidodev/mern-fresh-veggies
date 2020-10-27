import React from 'react';

/* Fontawesome Import */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Component Imports */
import './spinner.styles.scss';

const Spinner = () => {
  return (
    <div className="loading">
      <FontAwesomeIcon icon="spinner" className="icon" spin />
    </div>
  );
};

export default Spinner;
