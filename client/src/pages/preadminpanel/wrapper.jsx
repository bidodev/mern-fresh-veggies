import React from 'react';
import { useSelector } from 'react-redux';

/* Component Imports */
import ShopNavBar from 'components/navbar/ShopNavBar';
import Story from 'pages/preadminpanel/story/Story';
import Footer from 'components/footer/Footer';
import Authentication from 'components/authentication/wrapper';

/* Styles */
import './wrapper.styles.scss';

const FarmerAdmin = React.lazy(() => import('pages/farmeradmin/wrapper'));

const PreAdminPanel = ({ match }) => {
  const currentUser = useSelector(({ login }) => login.user);

  return currentUser && currentUser.data.role === 'farmer' ? (
    <FarmerAdmin match={match} />
  ) : (
    <>
      <ShopNavBar match={match} />
      <Authentication match={match} />
      <Story />
      <Footer />
    </>
  );
};
export default PreAdminPanel;
