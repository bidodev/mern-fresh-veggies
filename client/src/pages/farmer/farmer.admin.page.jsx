import React from 'react';

/* Import components to compouse the admin panel */
import Navbar from 'components/farmer/navbar/navbar.component';
import Profile from 'components/farmer/profile/profile.component';
import Stock from 'components/farmer/stock/stock.component';

import './farmer.admin.page.styles.scss';

//here the farmer will have all configurations avaiable, update his profile and so on

/**
 * Using React.memo
 * We don't need to reload the parent everytime the children update
 */
const FarmerAdmin = React.memo(({ user }) => {
  return (
    <section className="farmer-admin">
      <Navbar {...user}/>
      <Profile farmerData={user.data} />
      <Stock jwt={user.jwt} />
    </section>
  );
});

export default FarmerAdmin;
