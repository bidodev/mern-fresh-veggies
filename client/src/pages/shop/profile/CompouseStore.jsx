import React from 'react'

/* Import themes */
import THEMES from 'settings/public-profile/Themes';

/* Compouse Store Components */
import OpenStore from './OpenStore';
import ClosedStore from './ClosedStore';

const CompouseStore = ({farmer}) => {
    const { open, color } = farmer.config;
    return (
      <div className={`public-profile__wrapper ${color ? THEMES[color] : THEMES['default']}`}>
        {open ? <OpenStore farmer={farmer}/> : <ClosedStore />}
      </div>
    );
  };

export default CompouseStore
