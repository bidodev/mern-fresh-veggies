import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

/* http services */
import { loadFarmerPublicProfileData } from 'utils/services';

/* Styles */
import './PublicFarmerProfile.styles.scss';

/* Utils */
import Spinner from 'components/UI/spinner/spinner.component';
import CompouseStore from './CompouseStore';

const ProfilePage = () => {
  const { farmerURL } = useParams();
  const history = useHistory();

  /* Save the Farmer Page object */
  const [farmer, setFarmer] = useState(null);

  /* Call the API */
  useEffect(() => {
    loadFarmerPublicProfileData(farmerURL).then(({data, status}) => {
      setFarmer(data);
    });
  }, [farmerURL]);

  return (
    <>
      {farmer ? <CompouseStore farmer={farmer} /> : <Spinner /> }
    </>
  );
};

export default ProfilePage;
