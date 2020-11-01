import React from 'react';
import { Route } from 'react-router-dom';
import ShopNavBar from 'components/navbar/ShopNavBar';

/* Styles */
import './shop.styles.scss';

/* Page Imports */
import ProfilePage from 'pages/shop/profile/profile.page';

/* Compouse Components */
import HowItWorks from 'pages/shop/overview/howitworks/how.it.works.component';
import FindYourFarmer from 'pages/shop/overview/findafarmer/FindYourFarmer';
import Feed from 'pages/shop/overview/feed/feed.component';

/* those two components are used in more pages, thefore they stay on the components folder */
import Footer from 'components/footer/footer.component';
import ScrollTopArrow from 'components/UI/scroll/scroll.component';

/* Components that will rendered only at /shop */
const ShopOverView = ({ match }) => {
  return (
    <div className="shop__internal__content">
      <Feed />
      <HowItWorks />
      <FindYourFarmer match={match} />
    </div>
  );
};

const Shop = ({ match }) => {
  /**
   * Shop overview
   * if the path is exact /shop we render <Navbar /> <FarmerList /> <Footer /> and <ScrollTopAroow />
   * if the path is /shop/:farmerId we render <Navbar /> <ProfilePage /> <Footer /> and <ScrollTopAroow />
   */
  return (
    <>
      <ShopNavBar />
      {/* Those Component will switch, only one of them will active at sameTime */}
      <Route exact path={`${match.path}`} component={ShopOverView} />
      <Route path={`${match.path}/:farmerId`} component={ProfilePage} />
      
      {/*
       * Both components will be avabiable in /shop and /shop/:farmerId
       * You don't neet to import it there again
       */}
      <Footer />
      <ScrollTopArrow />
    </>
  );
};

export default Shop;
