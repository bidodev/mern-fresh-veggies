import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

/* Styles */
import './shop.styles.scss';

/* Page Imports */
import ProfilePage from 'pages/shop/profile/PublicFarmerProfile';

/* Component Imports */
import ShopNavBar from 'components/navbar/ShopNavBar';
import Cart from 'pages/shop/cart/cart.component';
import Banner from 'pages/shop/overview/banner/banner.component';
import FindYourFarmer from 'pages/shop/overview/find-farmer/FindFarmer.component';
import HowItWorks from 'pages/shop/overview/how.it.works/how.it.works.component';
import Footer from 'components/footer/Footer';
import Modal from 'components/modal/modal.component';
import ScrollTopArrow from 'components/UI/scroll/scroll.component';
import CustomButton from 'components/UI/custom-button/custom-button.component';
import Authentication from 'components/authentication/wrapper';

// ===== Overview Component ===
const ShopOverView = () => {
  return (
    <section>
      <Banner />
      <FindYourFarmer />
      <HowItWorks />
    </section>
  );
};

// ===== Shop Page ===
const Shop = () => {
  const cartItems = useSelector(({ cart }) => cart.cartItems);
  const cartModalStatus = useSelector(({ cart }) => cart.show);
  //const cartNum = useSelector(({ cart }) => cart.cartQuantity);
  // Total quantity for cart
  const totalQuantityArray = cartItems.map((cartItem) => cartItem.quantity);
  let totalQuantity = totalQuantityArray.reduce((acc, cur) => acc + cur, 0);
  const dispatch = useDispatch();

  /* Hide or show cart */
  const toggleModal = () => dispatch({ type: 'TOGGLE_CART_HIDDEN' });

  return (
    <>
      <Authentication />
      <ShopNavBar totalQuantity={totalQuantity}>
        <li>
          <Icon icon={['fas', 'shopping-cart']} className="fa-shopping-cart" onClick={toggleModal} />
        </li>
        <Modal
          modalStatus={cartModalStatus}
          closeModal={toggleModal}
          className="cart-modal"
          overlayClassName="cart-overlay"
        >
          {/* The Cart Modal is the same as the edit your cart  */}
          <Cart toggleCartModal={toggleModal} />
          <Link to="/shop/cart">
            <CustomButton disabled={cartItems.length <= 0 ? true : false} type="submit" onClick={toggleModal}>
              Edit shopping cart
            </CustomButton>
          </Link>
        </Modal>
      </ShopNavBar>

      {/* Those components will switch, only one of them will be available */}
      <Routes>
        <Route index element={<ShopOverView />} />
        <Route path="farmer/:slug" element={<ProfilePage />} />
        <Route path="cart" element={<Cart />} />
      </Routes>

      <Footer />
      <ScrollTopArrow />
    </>
  );
};

export default Shop;
