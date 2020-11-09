import React from 'react';

/* Component Imports */
import Story from 'pages/preadminpanel/story/story.component';
import ShopNavBar from 'components/navbar/ShopNavBar';
import Footer from 'components/footer/Footer'

/* Styles */
import './authentication.styles.scss';

const PreAdminPanel = ({ match }) => {
  console.log("PreAdminPanel rendered")
  return (
    <>
      <ShopNavBar match={match}/>
      <Story />
      <Footer />
    </>
  );
};
export default PreAdminPanel;
