import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

/* Page Imports */
import ProfilePage from 'pages/farmer/profile/profile.page';

/* Component Imports */
import Spinner from 'components/UI/spinner/spinner.component';
import Navbar from 'components/navbar/customer-navbar.component';
import Feed from 'components/feed/feed.component';
import Footer from 'components/footer/footer.component';
import HowItWorks from 'components/how-it-works/how.it.works.component';
import ScrollTopArrow from 'components/UI/scroll/scroll.component';
import Modal from 'components/modal/modal.component';
import SignIn from 'components/authentication/login/login.component';
import SignUp from 'components/authentication/signup/signup.component';
/* Styles */
import './shop.styles.scss';

const FarmerList = ({ match }) => {
  const [farmers, setFarmers] = useState([]);
  const [isLoading, setStatusLoading] = useState(true);

  // redux state for the cart modal
  const modalStatus = useSelector((state) => state.status.modal);
  const signInModalStatus = useSelector((state) => state.clientSignIn.modal);
  const dispatch = useDispatch();
  // Getting all farmers profile
  useEffect(() => {
    axios(`/farmers`)
      .then(({ data }) => {
        setFarmers(data.data.farmers);
        setStatusLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <Navbar />
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
      >
        <SignIn />
        {/* <SignUp url={'user'} /> */}
        <div>You are not registered yet?</div>
      </Modal>
      <Feed />

      <section className="farmer-list">
        {/* Load first 4 farmers, an option can display more */}
        <h2 className="farmer-list--header">FARMER LIST</h2>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="farmer-list__list-container">
            {farmers.map((farmer) => (
              <li className="farmer-list__list-container__item">
                <Link to={`${match.url}/${farmer._id}`}>
                  <div className="farmer-list__list-container__item__bg-image-container">
                    <img
                      src="/images/farm-1.jpg"
                      alt="background-image"
                      className="farmer-list__list-container__item__bg-image-container--img"
                    />
                  </div>
                  <div className="farmer-list__list-container__item__avatar-container">
                    <img
                      src="/images/zoe.jpg"
                      alt="farmer-avatar"
                      className="farmer-list__list-container__item__avatar-container--img"
                    />
                  </div>
                  <h3 className="farmer-list__list-container__item--name">{farmer.name}</h3>
                  <div className="farmer-list__list-container__item__location">
                    <div className="farmer-list__list-container__item__location--city">Berlin</div>
                    <div className="farmer-list__list-container__item__location--country">Germany</div>
                  </div>
                  <div className="farmer-list__list-container__item--description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, ab ipsum optio quo recusandae
                    illum? Quidem hic corporis, voluptas cum ducimus dolores accusantium alias odio, quos in sed
                    distinctio illum.
                  </div>
                </Link>
              </li>
            ))}
          </div>
        )}
      </section>

      <HowItWorks />
      <ScrollTopArrow />
      <Footer />
    </div>
  );
};

const Shop = ({ match }) => {
  return (
    <section className="shop-page">
      <Route exact path={`${match.path}`} component={FarmerList} />
      <Route path={`${match.path}/:farmerId`} component={ProfilePage} />
    </section>
  );
};

export default Shop;
