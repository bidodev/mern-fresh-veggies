import React, { useEffect, useState } from 'react';
import { Route, Link, useParams } from 'react-router-dom';

/* Page Imports */
import ProfilePage from 'pages/farmer/profile.page';

/* Component Imports */
import Navbar from 'components/navbar/navbar.component';
import Feed from 'components/feed/feed.component';
import FarmerList from 'components/farmer/farmer-list/farmer.list.component';
import Footer from 'components/footer/footer.component';

/* Styles */
import './shop.styles.scss';

const Shop = ({ match }) => {
  return (
    <section className="shop-page">
      <Navbar />
      <div className="ideas">FREE SECTION FOR IDEAS</div>
      <Feed />
      <Route exact path={`${match.path}`} component={FarmerList} />
      <Route path={`${match.path}/:farmerId`} component={ProfilePage} />
      <Footer />
    </section>
  );
};

export default Shop;
