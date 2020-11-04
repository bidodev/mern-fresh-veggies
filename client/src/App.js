import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

/* Page Imports */
import Landing from 'pages/landing/landing.page';
import Shop from 'pages/shop/shop.page';
import FarmerAdmin from 'pages/farmeradmin/admin.page';

/* Component Imports */
import PreAdminPanel from 'components/preadminpanel/authentication.page';

const App = () => {
  /* Pull out the userFarmer from the LocalStorage */
  const user = useSelector(({ login }) => login.user);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/shop" render={({ match }) => <Shop match={match} />} />
        <Route
          path="/farmer/admin"
          render={({ match }) =>
            /* 
            <FarmerAdmin/> is displayed only when the farmer is logged
            While using the render Method, you can pass other props besides match such as location
            */
            user && user.data.role === 'farmer' ? (
              <FarmerAdmin user={user} match={match} />
            ) : (
              <PreAdminPanel match={match} />
            )
          }
        />
      </Switch>
    </div>
  );
};

export default App;
