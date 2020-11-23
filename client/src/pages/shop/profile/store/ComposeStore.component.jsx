import React from 'react';

/* Import themes */
import THEMES from 'settings/public-profile/Themes';

/* Component Imports */
import OpenStore from 'pages/shop/profile/store/OpenStore.component';
import ClosedStore from 'pages/shop/profile/store/ClosedStore.component';

const ComposeStore = ({ farmer }) => {
  const { config } = farmer;

  return (
    <div className={`public-profile__wrapper ${config.color ? THEMES[config.color] : THEMES['default']}`}>
      {config.open ? <OpenStore farmer={farmer} /> : <ClosedStore />}
    </div>
  );
};

export default ComposeStore;
