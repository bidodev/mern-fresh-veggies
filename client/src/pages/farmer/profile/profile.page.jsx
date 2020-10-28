import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

/* Component Imports */
import Spinner from 'components/UI/spinner/spinner.component';
import Navbar from 'components/navbar/customer-navbar.component';
import Profile from 'components/profile/profile.component';
import Recipes from 'components/recipes/recipes.component';
import Footer from 'components/footer/footer.component';
import Modal from 'components/modal/modal.component';

/* Styles */
import './profile.page.styles.scss';

/* Component Photos Gallery */
const PhotosGallery = () => {
  return (
    <div className="profile__profile-container__gallery">
      <div className="profile__profile-container__gallery--img">
        <img src="" alt="img" className="gallery-img" />
      </div>
      <div className="profile__profile-container__gallery--img">
        <img src="" alt="img" className="gallery-img" />
      </div>
      <div className="profile__profile-container__gallery--img">
        <img src="" alt="img" className="gallery-img" />
      </div>
    </div>
  );
};

/* Component Farmer Products */
const FarmerProducts = ({ farmer }) => {
  const modalStatus = useSelector((state) => state.status.modal);
  const signInModalStatus = useSelector((state) => state.clientSignIn.modal);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Modal
        modalStatus={modalStatus}
        closeModal={() => dispatch({ type: 'TOGGLE_MODAL' })}
        className="cart-modal"
        overlayClassName="cart-overlay"
      >
        This is what you added to cart
      </Modal>
      <Modal
        modalStatus={signInModalStatus}
        closeModal={() => dispatch({ type: 'TOGGLE_SIGN-IN_MODAL' })}
        className="sign-in-modal"
        overlayClassName="sign-in-overlay"
      ></Modal>
      <section className="profile-page">
        <h2 className="profile-page--header">{farmer.name}'s available products</h2>
        {
          <div className="profile-page__farmer-products">
            {farmer.products.map((product) => (
              <div className="profile-page__farmer-products__card">
                <h3 className="profile-page__farmer-products__card--name">{product.name}</h3>
                <div className="profile-page__farmer-products__card__img-container">
                  <img
                    src={`/images/users/${product.photo}`}
                    alt="img"
                    className="profile-page__farmer-products__card__img-container--img"
                  />
                </div>
                <span className="profile-page__farmer-products__card--type">Type: {product.type}</span>
                <p className="profile-page__farmer-products__card--description">Information: {product.description}</p>
              </div>
            ))}
          </div>
        }
        {/* query the specific farmer and show the profile */}
      </section>
    </React.Fragment>
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
    console.log(farmer.config);

    return (
      <>
        {open ? (
          <>
            <Profile {...farmer} />
            {recipes ? <Recipes /> : null}
            {gallery ? <PhotosGallery /> : null}
            {products ? <FarmerProducts farmer={farmer} /> : null}
          </>
        ) : (
          <h3 style={{ paddingTop: '50vh' }}>This store is closed at the moment</h3>
        )}
        <Footer />
      </>
    );
  };

  return (
    <>
      <Navbar />
      {isLoading ? <Spinner /> : <ProfileCompouse />}
    </>
  );
}

export default ProfilePage;
