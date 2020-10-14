import React, { useEffect, useState } from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

import axios from 'axios';
import './shop.styles.scss';

const FarmerOverview = () => {
  return (
    <div><h1>Shop Overview</h1></div>
  )
}

const ProfilePage = ({ match}) => {
  console.log(match)
  return (
    <div><h1>ProfilePage</h1></div>
  )
}

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={FarmerOverview} />
      <Route path={`${match.path}/:farmer`} component={ProfilePage}/>
    </div>
  );
};

export default Shop;
