import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

/* Styles */
import './profile.page.styles.scss';

/* Utils */
import Spinner from 'components/UI/spinner/spinner.component';

/* Component Imports */
import HeaderFarmerProfile from 'pages/shop/profile/header/HeaderFarmerProfile.jsx';
import ProfileInfo from 'pages/shop/profile/header/ProfileInfo/ProfileInfo';
import PhotosGallery from 'pages/shop/profile/gallery/PhotosGallery';
import FarmerProducts from 'pages/shop/profile/products/FarmerProducts';
import Recipes from 'pages/shop/profile/recipes/recipes.component';

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

  const ProfileCompouse = () => {
    const { open, recipes, gallery, products } = farmer.config;

    return (
      <div className="public-profile__wrapper green-mode">
        {open ? (
          <div className="public-profile__wrapper__store-open">
            <HeaderFarmerProfile {...farmer} />
            <ProfileInfo {...farmer} />
            {gallery && <PhotosGallery {...farmer} />}
            {products && <FarmerProducts farmer={farmer} />}
            {recipes && <Recipes farmer={farmer}/>}
          </div>
        ) : (
          <div className="public-profile__wrapper__store-closed">
              <h3>This store is closed at the moment</h3>
          </div>
        )}
      </div>
    );
  };

  return <>{isLoading ? <Spinner /> : <ProfileCompouse />}</>;
};

export default ProfilePage;
