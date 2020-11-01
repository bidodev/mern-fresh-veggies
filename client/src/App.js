import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

/* Pages (Main worflows)*/
import Landing from 'pages/landing/landing.page';
import Shop from 'pages/shop/shop.page';
import FarmerAdmin from 'pages/farmeradmin/admin.page';

/* Extra Imports */
import Authentication from 'components/authentication/authentication.page';
import ShopNavBar from 'components/navbar/ShopNavBar';

const App = () => {
  /* Pull out the userFarmer from the LocalStorage */
  const farmerUser = useSelector(({ login }) => login.farmerUser);

  return (
    <div>
      {/* The navbar will be avaiable for all the components */}
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
