import React from 'react';

/* Component Imports */
import Story from 'components/preadminpanel/story/story.component';
import ShopNavBar from 'components/navbar/ShopNavBar';
import Footer from 'components/footer/footer.component';

/* Styles */
import './authentication.styles.scss';

const PreAdminPanel = ({ match }) => {
  return (
    <>
      <ShopNavBar match={match}>Welcome</ShopNavBar>
      <Story />
      <Footer />
    </>
  );
};
export default PreAdminPanel;
