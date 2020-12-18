import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { requestFarmer } from 'redux/actions';

/* Components */
import Avatar from 'pages/farmeradmin/home/avatar/avatar.component';
import GalleryList from 'pages/farmeradmin/home/gallery/gallery.list.component';
import FarmerBiography from 'pages/farmeradmin/home/biography/farmerbiography.component';
import Spinner from 'components/UI/spinner/spinner.component';

/* Styles */
import './profile.styles.scss';

const ProfileAdmin = () => {
  const dispatch = useDispatch();
  const { isPending } = useSelector((state) => state.farmerPanel);
  const { data } = useSelector((state) => state.farmerPanel);

  useEffect(() => {
    dispatch(requestFarmer);
  }, [dispatch]);

  return (
    <>
      {isPending ? (
        <Spinner />
      ) : (
        <section className="panel-profile">
          <div className="panel-profile__wrapper">
            <Avatar {...data} />
            <FarmerBiography {...data} />
            <hr />
            <GalleryList {...data} />
            <hr />
          </div>
        </section>
      )}
    </>
  );
};

export default ProfileAdmin;
