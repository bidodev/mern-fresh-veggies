import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import ShopNavBar from 'components/navbar/ShopNavBar';
import { useSelector, useDispatch } from 'react-redux';

import Modal from 'components/modal/modal.component';

/* Styles */
import './shop.styles.scss';

/* Page Imports */
import ProfilePage from 'pages/shop/profile/profile.page';

/* Compouse Components */
import HowItWorks from 'pages/shop/overview/howitworks/how.it.works.component';
import FindYourFarmer from 'pages/shop/overview/findafarmer/FindYourFarmer';
import Feed from 'pages/shop/overview/feed/feed.component';
import Cart from 'pages/shop/cart/cart.component';

/* those two components are used in more pages, therefore they stay on the components folder */
import Footer from 'components/footer/footer.component';
import ScrollTopArrow from 'components/UI/scroll/scroll.component';
import CustomButton from 'components/UI/custom-button/custom-button.component';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

/* Components that will rendered only at /shop */
const ShopOverView = ({ match }) => {
  return (
    <div className="shop__internal__content">
      <Feed />
      <FindYourFarmer match={match} />
      <HowItWorks />
    </div>
  );
};

const Shop = ({ match }) => {
  const cartItems = useSelector(({ cart }) => cart.cartItems);
  /**
   * Shop overview
   * if the path is exact /shop we render <Navbar /> <FarmerList /> <Footer /> and <ScrollTopAroow />
   * if the path is /shop/:farmerId we render <Navbar /> <ProfilePage /> <Footer /> and <ScrollTopAroow />
   */

  const [cartModalStatus, toogleCartModal] = useState(false);

  const toogleModal = (modal) => {
    switch (modal) {
      case 'SHOP_CART': {
        return toogleCartModal(!cartModalStatus);
      }
      default:
    }
  };
  return (
    <>
      <ShopNavBar match={match}>
        {/* children */}
        <li>
          <Link to="#">
            <Icon
              icon={['fas', 'shopping-cart']}
              className="fa-shopping-cart"
              onClick={() => toogleModal('SHOP_CART')}
            />
          </Link>
        </li>
        <Modal
          modalStatus={cartModalStatus}
          closeModal={() => toogleModal('SHOP_CART')}
          className="cart-modal"
          overlayClassName="cart-overlay"
        >
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <h2>
                Item: {cartItem.name}, Quantity: {cartItem.quantity}
              </h2>
            ))
          ) : (
            <h2>Your cart is empty</h2>
          )}
          <Link to="shop/cart">
            <CustomButton type="submit" onClick={() => toogleModal('SHOP_CART')}>
              Edit shopping cart
            </CustomButton>
          </Link>
        </Modal>
      </ShopNavBar>

      {/* Those Component will switch, only one of them will active at sameTime */}
      <Route exact path={`${match.path}`} component={ShopOverView} />
      <Route path={`${match.path}/:farmerId`} component={ProfilePage} />
      <Route path={`${match.path}/cart`} component={Cart} />
      {/*
       * Both components will be available in /shop and /shop/:farmerId
       * You don't need to import it there again
       */}
      <Footer />
      <ScrollTopArrow />
    </>
  );
};

export default Shop;
