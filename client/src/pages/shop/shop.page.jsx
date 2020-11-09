import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

/* Styles */
import './shop.styles.scss';

/* Page Imports */
import ProfilePage from 'pages/shop/profile/profile.page';

/* Component Imports */
import ShopNavBar from 'components/navbar/ShopNavBar';
import Cart from 'pages/shop/cart/cart.component';
import Banner from 'pages/shop/overview/banner/banner.component';
import FindYourFarmer from 'pages/shop/overview/find.farmer/find.farmer.component';
import HowItWorks from 'pages/shop/overview/how.it.works/how.it.works.component';
import Footer from 'components/footer/footer.component';
import Modal from 'components/modal/modal.component';
import ScrollTopArrow from 'components/UI/scroll/scroll.component';
import CustomButton from 'components/UI/custom-button/custom-button.component';
import Checkout from 'pages/checkout/checkout.page';

// ===== Overview Component ===
const ShopOverView = ({ match }) => {
  return (
    <section>
      <Banner />
      <FindYourFarmer match={match} />
      <HowItWorks />
    </section>
  );
};

// ===== Shop Page ===
const Shop = ({ match }) => {
  console.log(match);
  const cartItems = useSelector(({ cart }) => cart.cartItems);
  const [cartModalStatus, toggleCartModal] = useState(false);
  console.log(cartModalStatus);
  const toggleModal = (modal) => {
    switch (modal) {
      case 'SHOP_CART': {
        return toggleCartModal(!cartModalStatus);
      }
      default:
    }
  };

  return (
    <>
      <ShopNavBar match={match}>
        <li>
          <Link to="#">
            <Icon
              icon={['fas', 'shopping-cart']}
              className="fa-shopping-cart"
              onClick={() => toggleModal('SHOP_CART')}
            />
          </Link>
        </li>
        <Modal
          modalStatus={cartModalStatus}
          closeModal={() => toggleModal('SHOP_CART')}
          className="cart-modal"
          overlayClassName="cart-overlay"
        >
          {/* The Cart Modal is the same as the edit your cart  */}
          <Cart toggleModal={toggleModal} match={match} />

          <Link to="shop/cart">
            <CustomButton
              type="button"
              disabled={cartItems.length <= 0 ? true : false}
              type="submit"
              onClick={() => toggleModal('SHOP_CART')}
            >
              {' '}
              Edit shopping cart
            </CustomButton>
          </Link>
        </Modal>
      </ShopNavBar>

      {/* Those components will switch, only one of them will be available at sameTime */}
      <Route exact path={`${match.path}`} component={ShopOverView} />
      <Route path={`${match.path}/:farmerId`} component={ProfilePage} />
      <Route path={`${match.path}/cart`} component={Cart} />
      {/* <Route exact path={`${match.path}/checkout`} component={Checkout} /> */}
      <Footer />
      <ScrollTopArrow />
    </>
  );
};

export default Shop;
