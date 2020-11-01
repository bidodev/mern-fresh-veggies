import React from 'react';

/* Component Imports */
import Hero from 'pages/landing/hero/hero.component';
import Story from 'pages/landing/story/story.component';
import Footer from 'components/footer/footer.component';

import HowItWorks from 'pages/shop/overview/howitworks/how.it.works.component';

/* Styles */
import './landing.styles.scss';

const Landing = () => {
  return (
    <React.Fragment>
      <Hero />
      
      <HowItWorks />
      <Story />
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
