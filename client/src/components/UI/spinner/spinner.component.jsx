import React from 'react';

/* Fontawesome Import */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

/* Component Imports */
import './spinner.styles.scss';

const Spinner = () => {
  return (
    <div className="spinner-loading">
      <Icon icon="spinner" className="icon" spin />
    </div>
  );
};

export default Spinner;
