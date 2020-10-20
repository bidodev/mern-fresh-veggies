import React, { useEffect, useState } from 'react';

import { Route, Link, useParams } from 'react-router-dom';
import axios from 'axios';

/* Page Imports */
import ProfilePage from 'pages/farmer/profile.page';

/* Component Imports */
import Spinner from 'components/spinner/spinner.component';
import Navbar from 'components/navbar/navbar.component';
import Feed from 'components/feed/feed.component';
import Footer from 'components/footer/footer.component';

/* Styles */
import './shop.styles.scss';

const FarmerOverview = ({ match }) => {
  const [farmers, setFarmers] = useState([]);
  const [isLoading, setStatusLoading] = useState(true);

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
      <header className="header">FREE SECTION FOR IDEAS</header>
      <Feed />

      {/* === NEED TO CREATE A NEW COMPONENT FOR FARMER-LIST === */}
      <section className="farmer-list">
        {/* First we load a grid with 4 farmers, then we have an option to load more */}
        <h2>Featured Farmers</h2>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="farmer-list__list">
            {farmers.map((farmer) => (
              <li>
                <Link to={`${match.url}/${farmer._id}`}>{farmer.name}</Link>
              </li>
            ))}
          </div>
        )}
      </section>
      {/* ======== */}

      <Footer />
    </div>
  );
};

const Shop = ({ match }) => {
  return (
    <section className="shop-page">
      <Route exact path={`${match.path}`} component={FarmerOverview} />
      <Route path={`${match.path}/:farmerId`} component={ProfilePage} />
    </section>
  );
};

export default Shop;
