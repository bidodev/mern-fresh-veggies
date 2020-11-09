import React from 'react';
import { useSelector } from 'react-redux';

/* React Router Dom */
import { Route } from 'react-router-dom';

/* Component Imports */
import ProfileAdmin from 'pages/farmeradmin/home/profile.component';
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
const FarmerAdmin = React.memo(({ match }) => {
  const user = useSelector(({ login }) => login.user.data);
  console.log(user)

  return (
    <>
      <section className="farmer-admin">
        <ShopNavBar match={match}/>
        <Aside {...user} />
        <Route exact path={`${match.path}`} component={ProfileAdmin} />
        <Route path={`${match.path}/stock`} component={Stock} />
        <Route path={`${match.path}/settings`} render={({ match }) => <FarmerSettings match={match} user={user} />} />
      </section>
    </>
  );
});

export default FarmerAdmin;
