import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

/* http services */
import { loadFarmerPublicProfileData } from 'utils/services';

/* Styles */
import './PublicFarmerProfile.styles.scss';

/* Utils */
import Spinner from 'components/UI/spinner/spinner.component';
import CompouseStore from './CompouseStore';

const ProfilePage = () => {
  const { slug } = useParams();
  console.log(slug)

  /* Save the Farmer Page object */
  const [farmer, setFarmer] = useState(null);

  /* Call the API */
  useEffect(() => {
    loadFarmerPublicProfileData(slug).then(({data, status}) => {
      setFarmer(data);
    });
  }, [slug]);

  return (
    <>
      {farmer ? <CompouseStore farmer={farmer} /> : <Spinner /> }
    </>
  );
};

export default ProfilePage;
