import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

/* Import themes */
import THEMES from 'settings/public-profile/Themes';

/* Styles */
import './profile.page.styles.scss';

/* Utils */
import Spinner from 'components/UI/spinner/spinner.component';

/* Compouse Store Components */
import OpenStore from './OpenStore';
import ClosedStore from './ClosedStore';

const ProfilePage = () => {
  const { farmerId } = useParams();

  /* Farmer page object */
  const [farmer, setFarmer] = useState([]);
  const [isLoading, setStatusLoading] = useState(true);

  useEffect(() => {
    axios(`/farmers/farmer/${farmerId}`)
      .then(({ data }) => {
        setFarmer(data.data);
        setStatusLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const CompouseStore = () => {
    const { open, color } = farmer.config;
    return (
      <div className={`public-profile__wrapper ${color ? THEMES[color] : THEMES['default']}`}>
        {open ? <OpenStore farmer={farmer}/> : <ClosedStore />}
      </div>
    );
  };

  return (
    <>
      {isLoading ? <Spinner /> : <CompouseStore />}
    </>
  );
};

export default ProfilePage;
