import React from 'react';

import './alerts.styles.scss';

function Error(status, message) {
  return (
    <div className="messages error">
      <h2 className="element-invisible">Statusbericht</h2>
          <h3>{message}</h3>
    </div>
  );
}

export default Error;
