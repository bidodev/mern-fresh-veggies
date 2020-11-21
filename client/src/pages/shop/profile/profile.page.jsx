import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

/* http services */
import { loadFarmerPublicProfileData } from 'utils/services';

/* Styles */
import './profile.page.styles.scss';

/* Utils */
import Spinner from 'components/UI/spinner/spinner.component';
import CompouseStore from './CompouseStore';

const ProfilePage = ({ slug, profileId }) => {
  const { farmerId } = useParams();

  /* Farmer page object */
  const [farmer, setFarmer] = useState(null);

  useEffect(() => {
    loadFarmerPublicProfileData(farmerId).then(({data, status}) => {
      setFarmer(data);
    });
  }, [farmerId]);

  return (
    <>
      {farmer ? <CompouseStore farmer={farmer} /> : <Spinner /> }
    </>
  );
};

export default ProfilePage;
