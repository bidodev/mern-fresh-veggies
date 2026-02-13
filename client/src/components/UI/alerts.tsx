import React from 'react';

import './alerts.styles.scss';

type AlertProps = {
  status?: string;
  message?: string;
};

function Error({ status, message }: AlertProps) {
  return (
    <div className="messages error">
      <h2 className="element-invisible">Statusbericht</h2>
      {status ? <p>{status}</p> : null}
      <h3>{message}</h3>
    </div>
  );
}

export default Error;
