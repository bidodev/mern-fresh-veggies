import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

/* Component Imports */
import Spinner from 'components/UI/spinner/spinner.component';
import Recipes from 'components/recipes/recipes.component';

/* Styles */
import './profile.page.styles.scss';

/* Component Photos Gallery */
import PhotosGallery from 'pages/shop/profile/photo.gallery/photos.gallery.component';
import FarmerProducts from 'pages/shop/profile/farmer.products/farmer.products.component';

/* Sidebar profile */
const Profile = ({ photo, name, description }) => {
  return <section className="public__farmer__profile"></section>;
};

function ProfilePage() {
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
  }, [farmerId]);

  const ProfileCompouse = () => {
    const { open, recipes, gallery, products } = farmer.config;
    //console.log(farmer.config);

    return (
      <>
        {open ? (
          <>
            <Profile {...farmer} />
            {gallery ? <PhotosGallery /> : null}
            {products ? <FarmerProducts farmer={farmer} /> : null}
            {recipes ? <Recipes /> : null}
          </>
        ) : (
          <h3 style={{ paddingTop: '50vh' }}>This store is closed at the moment</h3>
        )}
      </>
    );
  };

  return <>{isLoading ? <Spinner /> : <ProfileCompouse />}</>;
}

export default ProfilePage;
