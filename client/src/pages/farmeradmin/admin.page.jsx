import React from 'react';

/* React Router Dom */
import { Route } from 'react-router-dom';

/* Component Imports */
import ProfileAdmin from 'pages/farmeradmin/profile/profile.component';
import Stock from 'pages/farmeradmin/stock/stock.component';
import Aside from 'pages/farmeradmin/aside/asidebar.component';
import FarmerSettings from 'pages/farmeradmin/settings/settings.component';
import ShopNavBar from 'components/navbar/ShopNavBar';

/* Styles */
import './admin.page.styles.scss';

// farmer's configuration is available here

/**
 * Using React.memo
 * We don't need to reload the parent every time the children update
 */
const FarmerAdmin = React.memo(({ match, user }) => {
  const { data, jwt } = user;

  return (
    <>
      {/* <Navbar {...data} /> */}
      <section className="farmer-admin">
        <ShopNavBar match={match}/>
        <Aside {...data} />
        <Route exact path={`${match.path}`} render={() => <ProfileAdmin {...data} jwt={jwt} />} />
        <Route path={`${match.path}/stock`} component={Stock} />
        <Route path={`${match.path}/settings`} render={({ match }) => <FarmerSettings match={match} user={user} />} />
      </section>
    </>
  );
});

export default FarmerAdmin;
