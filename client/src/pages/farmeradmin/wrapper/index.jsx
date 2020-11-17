import React from 'react';

/* React Router Dom */
import { Route } from 'react-router-dom';

/* Component Imports */
import ShopNavBar from 'components/navbar/ShopNavBar';
import Aside from 'pages/farmeradmin/aside/asidebar.component';
import ProfileAdmin from 'pages/farmeradmin/home/ProfileAdmin';
import Stock from 'pages/farmeradmin/stock/stock.component';
import FarmerSettings from 'pages/farmeradmin/settings/settings.component';

/* Styles */
import './admin.page.styles.scss';

/**
 * Using React.memo
 * We don't need to reload the parent every time the children update
 */
const FarmerAdmin = React.memo(({ match }) => {
  return (
    <>
      <section className="farmer-admin">
        <ShopNavBar match={match} />
        <Aside />
        <Route exact path={`${match.path}`} component={ProfileAdmin} />
        <Route path={`${match.path}/stock`} component={Stock} />
        <Route path={`${match.path}/settings`} render={({ match }) => <FarmerSettings match={match} />} />
      </section>
    </>
  );
});

export default FarmerAdmin;
