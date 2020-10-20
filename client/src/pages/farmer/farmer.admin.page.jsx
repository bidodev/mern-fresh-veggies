import React from 'react';

import Profile from 'components/farmer/profile/profile.component';
import Stock from 'components/farmer/stock/stock.component';

import './farmer.admin.page.styles.scss';

const FarmerAdmin = ({user}) => {
  //if the user is already logedIn as farmer, don't send the authentication
  //instead login in  the farmer pannel

  //here the farmer will have all configurations avaiable, update his profile and so on
  console.log(user)
  return (
    <section className="farmer-admin">
      <h1>Farmer Admin Page</h1>
      <Profile farmerData={user.data}/>
      <Stock />
    </section>
  );
};

export default FarmerAdmin;
