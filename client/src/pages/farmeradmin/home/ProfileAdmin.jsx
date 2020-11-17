import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

/* Components */
import Avatar from 'pages/farmeradmin/home/avatar/avatar.component';
import GalleryList from 'pages/farmeradmin/home/gallery/gallery.list.component';
import FarmerBiography from 'pages/farmeradmin/home/biography/farmerbiography.component';
import Spinner from 'components/UI/spinner/spinner.component';

/* Styles */
import './profile.styles.scss';

const ProfileAdmin = () => {
  const dispatch = useDispatch();
  const farmerData = useSelector((state) => state.login.adminPanelData);
  const [isLoading, setIstLoading] = useState(true);

  /* Retrieve Farmer Panel */
  useEffect(() => {
    axios
      .get('/farmers/admin/panel')
      .then(({ data }) => {
        dispatch({ type: 'SET_FARMER', payload: data.data });
        setIstLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert('etwas ist schief gelaufen');
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="panel-profile">
          <div className="panel-profile__wrapper">
            <Avatar {...farmerData} />
            <FarmerBiography {...farmerData} />
            <hr />
            <GalleryList {...farmerData} />
            <hr />
          </div>
        </section>
      )}
    </>
  );
};

export default ProfileAdmin;
