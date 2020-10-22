import React from 'react';

/* Component Imports */
import Navbar from 'components/farmer/navbar/navbar.component';
import ProfileAdmin from 'components/farmer/profile/profile.component';
import Stock from 'components/farmer/stock/stock.component';

/* Styles */
import './farmer.admin.page.styles.scss';

// farmer's configuration is available here

/**
 * Using React.memo
 * We don't need to reload the parent every time the children update
 */
const FarmerAdmin = React.memo(({ user }) => {
  return (
    <section className="farmer-admin">
      <Navbar {...user} />
      <ProfileAdmin farmerData={user.data} />
      <Stock jwt={user.jwt} />
    </section>
  );
});

export default FarmerAdmin;
