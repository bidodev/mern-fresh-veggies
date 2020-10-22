import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Route } from 'react-router-dom';

/* Page Imports */
import ProfilePage from 'pages/farmer/profile.page';

/* Component Imports */
import Spinner from 'components/spinner/spinner.component';
import Navbar from 'components/navbar/navbar.component';
import Feed from 'components/feed/feed.component';
import Footer from 'components/footer/footer.component';

/* Styles */
import './shop.styles.scss';

const FarmerList = ({ match }) => {
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
      <div className="ideas">
        <h2>FREE SECTION FOR IDEAS</h2>
      </div>
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
                  <h3 className="farmer-list__list-container__item--header">
                    {farmer.name}
                  </h3>
                  <div className="farmer-list__list-container__item__img-container">
                    <img
                      src="/images/zoe.jpg"
                      alt="img"
                      className="farmer-list__list-container__item__img-container--img"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </div>
        )}
      </section>

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
