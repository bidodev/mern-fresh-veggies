import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

/* http services */
import { loadFarmerPublicProfileData } from 'utils/services';

/* Styles */
import './PublicFarmerProfile.styles.scss';

/* Utils */
import Spinner from 'src/components/UI/spinner/spinner.component';
import ComposeStore from 'src/pages/shop/profile/store/CompouseStore.component';

const ProfilePage = () => {
  const { slug } = useParams();
  /* Save the Farmer Page object */
  const [farmer, setFarmer] = useState(null);

  /* Call the API */
  useEffect(() => {
    loadFarmerPublicProfileData(slug).then(({ data, status }) => {
      setFarmer(data);
    });
  }, [slug]);

  return <>{farmer ? <ComposeStore farmer={farmer} /> : <Spinner />}</>;
};

export default ProfilePage;
