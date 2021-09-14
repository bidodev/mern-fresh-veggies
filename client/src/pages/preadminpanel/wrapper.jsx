import React from 'react';
import { useSelector } from 'react-redux';

/* Component Imports */
import ShopNavBar from 'src/components/navbar/ShopNavBar';
// import Story from 'src/pages/preadminpanel/story/Story';
// import Footer from 'src/components/footer/Footer';
// import Authentication from 'src/components/authentication/wrapper';

/* Styles */
import './wrapper.styles.scss';

// const FarmerAdmin = React.lazy(() => import('src/pages/farmeradmin/wrapper'));

const PreAdminPanel = ({ match }) => {
  const currentUser = true;

  return currentUser ? (
    // <FarmerAdmin match={match} />
    <h2>Farmer is Logged</h2>
  ) : (
    <>
      <ShopNavBar match={match} />
      {/* <ShopNavBar match={match} />
      <Authentication match={match} />
      <Story />
      <Footer /> */}
    </>
  );
};
export default PreAdminPanel;
