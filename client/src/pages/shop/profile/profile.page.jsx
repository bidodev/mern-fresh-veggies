import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

/* Styles */
import './profile.page.styles.scss';

/* Component Imports */
import Spinner from 'components/UI/spinner/spinner.component';
import Recipes from 'pages/shop/profile/recipes/recipes.component';
import PhotosGallery from 'pages/shop/profile/photo.gallery/PhotosGallery';
import FarmerProducts from 'pages/shop/profile/farmer.products/FarmerProducts';

const Profile = ({ name, products }) => {
  return (
    <>
      <header className="public-farmer">
        <aside className="public-farmer__aside">
          <div className="public-farmer__aside__infos">
            <div className="public-farmer__aside__infos__avatar">
              <h2>{name}</h2>
              <h3>Location</h3>
              <p>Berlin - Germany</p>
            </div>
            <div className="public-farmer__aside__infos__data">
              <h2>About Me</h2>
              <p className="public-farmer__aside__infos__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, fugiat? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Omnis neque aspernatur in qui temporibus veritatis unde, culpa porro?
                Nemo, magnam.
              </p>
            </div>
          </div>
          <div className="public-farmer__aside__main">
            <div className="public-farmer__main__featured">Hello Gallery</div>

            <div className="public-farmer__main__reviews">Hello Testimonials</div>
          </div>
        </aside>

        <main className="public-farmer__main__right">
          <div className="shiiit">
            <h2>New Products</h2>
          </div>
          <hr />
          {/* should be filtered by data add and limit to 5 */}
          <div className="shit2">
            {products
              .filter((product, index) => index < 5)
              .map((product) => (
                <div className="new-product">
                  <p>{product.name}</p>
                  <img src={`/uploads/${name.toLowerCase()}/images/products/${product.photo}`} alt="" />
                  <p>
                    EUR: {product.price} - {product.unit}
                  </p>
                </div>
              ))}
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
        <div className="header-profile__avatar">
          <img src={`/uploads/${name.toLowerCase()}/images/profile/${images.profile}`} alt="farmer-avatar" />
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
          <div className="super-test">
            <HeaderFarmerProfile {...farmer} />
            <Profile {...farmer} />
            {gallery ? <PhotosGallery {...farmer} /> : null}
            {products ? <FarmerProducts farmer={farmer} /> : null}
            {recipes ? <Recipes /> : null}
          </div>
        ) : (
          <h3 style={{ paddingTop: '50vh' }}>This store is closed at the moment</h3>
        )}
      </>
    );
  };

  return <>{isLoading ? <Spinner /> : <ProfileCompouse />}</>;
}

export default ProfilePage;
