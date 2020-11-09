import React, { useEffect, useState } from 'react';
import axios from 'axios';

/* Components */
import HeaderFarmerProfile from 'pages/farmeradmin/home/header/header.profile';
import GalleryList from 'pages/farmeradmin/home/gallery/gallery.list';
import Spinner from 'components/UI/spinner/spinner.component';

/* Styles */
import './profile.styles.scss';

const FarmerBioGraphy = ({ name, description }) => {
  return (
    <div className="panel-profile__biography">
      <div className="panel-profile__biography__info">Welcome {name}</div>
      <div className="panel-profile__biography__text">{description}</div>
    </div>
  );
};

const ProfileAdmin = () => {
  const [farmerData, setFarmerData] = useState(null);
  const [isLoading, setIstLoading] = useState(true);

  /* Retrieve Farmer Panel */
  useEffect(() => {
    axios
      .get('/farmers/admin/panel')
      .then(({ data }) => {
        setFarmerData(data.data);
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
            <HeaderFarmerProfile {...farmerData} />
            <FarmerBioGraphy {...farmerData} />
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
