import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

/* Styles */
import './profile.page.styles.scss';

/* Component Imports */
import Spinner from 'components/UI/spinner/spinner.component';
import Recipes from 'components/recipes/recipes.component';
import PhotosGallery from 'pages/shop/profile/photo.gallery/PhotosGallery';
import FarmerProducts from 'pages/shop/profile/farmer.products/farmer.products.component';

const Profile = () => {
  return (
    <>
      <header className="public-farmer">
        <aside className="public-farmer__aside">
          <div className="public-farmer__aside__infos">
            <div className="public-farmer__aside__infos__avatar">Hello</div>
            <div className="public-farmer__aside__infos__data">Hello</div>
          </div>
          <div className="public-farmer__aside__main">

          </div>
        </aside>

        <main className="public-farmer__main">
          <div className="public-farmer__main__featured">

          </div>

          <div className="public-farmer__main__reviews">

          </div>
        </main>
      </header>
    </>
  );
};

const HeaderFarmerProfile = ({ name, images }) => {
  //const src = images.profile ? `/uploads/${name.toLowerCase()}/images/profile/${images.profile}` : '/uploads/default.jpg';

  return (
    <>
      <header className="header-profile">
        <img className="header-profile__cover" src={`/images/farm-1.jpg`} alt="cover" />
        <div
          className="header-profile__avatar"

        >
          <img src={`${'src'}`} alt="farmer-avatar" />
        </div>
      </header>
    </>
  );
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

    return (
      <>
        {open ? (
          <>
            <HeaderFarmerProfile />
            <Profile farmer={farmer} />
            {recipes ? <Recipes /> : null}
            {gallery ? <PhotosGallery {...farmer} /> : null}
            {products ? <FarmerProducts farmer={farmer} /> : null}
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
