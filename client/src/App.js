import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

/* Page Imports */
import Landing from 'pages/landing/landing.page';
import Authentication from 'pages/authentication/authentication.page';
import Shop from 'pages/shop/shop.page';

/* Page Imports */
import FarmerAdmin from 'pages/farmer/farmer.admin.page';

const App = () => {
  /* Pull out the userFarmer from the LocalStorage */
  const farmerUser = useSelector(({ login }) => login.farmerUser);
  console.log(farmerUser);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/shop" component={Shop} />
        <Route
          path="/farmer/admin"
          render={({ match }) =>
            /* 
            <FarmerAdmin/> is displayed only when the farmer is logged
            While using the render Method, you can pass other props besides math, suck as location
            */
            farmerUser ? <FarmerAdmin user={farmerUser} match={match} /> : <Authentication />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
