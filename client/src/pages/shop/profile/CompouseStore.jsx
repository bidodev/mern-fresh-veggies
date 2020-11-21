import React from 'react';

/* Import themes */
import THEMES from 'settings/public-profile/Themes';

/* Compouse Store Components */
import OpenStore from './OpenStore';
import ClosedStore from './ClosedStore';

const CompouseStore = ({ farmer }) => {
  const { config } = farmer;

  return (
    <div className={`public-profile__wrapper ${config.color ? THEMES[config.color] : THEMES['default']}`}>
      {config.open ? <OpenStore farmer={farmer} /> : <ClosedStore />}
    </div>
  );
};

export default CompouseStore;
