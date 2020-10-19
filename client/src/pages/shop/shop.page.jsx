import React, { useEffect, useState } from 'react';

/* Spinner */
import Spinner from 'components/spinner/spinner.component';

import { Route, Link, useParams } from 'react-router-dom';

import axios from 'axios';
import './shop.styles.scss';
import ProfilePage from 'pages/farmer/profile.page';

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
      <header className="header">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, vel!
      </header>
      <section className="featured-products">List of featured products</section>

      <section className="featured-farmers">
        {/* We load a previous a grid with some farmers maybe 4
           * Then we have an option to load more farmers
          
          
          */}
        <h2>Featured Farmers</h2>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="featured-farmers__list">
            {farmers.map((farmer) => (
              <li>
                <Link to={`${match.url}/${farmer._id}`}>{farmer.name}</Link>
              </li>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={FarmerOverview} />
      <Route path={`${match.path}/:farmerId`} component={ProfilePage} />
    </div>
  );
};

export default Shop;
