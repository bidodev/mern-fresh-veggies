import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import axios from 'axios';

/* Import Pages */
import Landing from 'pages/landing/landing.page';
import Authentication from 'pages/authentication/authentication.page';
import Shop from 'pages/shop/shop.page';

import FarmerAdmin from 'pages/farmer/farmer.admin.page';

const App = () => {
  /*
   * Pull out the userFarmer from the LocalStorage
   */
  const farmerUser = useSelector(({login}) => login.farmerUser);


  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/shop" component={Shop} />

        {/* <FarmerAdmin/> is displayed once farmer is logged */}
        <Route
          exact
          path="/farmer/admin"
          render={() =>
            farmerUser ? <FarmerAdmin user={farmerUser} /> : <Authentication />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
