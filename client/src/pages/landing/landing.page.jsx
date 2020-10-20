import React from 'react';

/* Component Imports */
import Hero from 'components/hero/hero.component';
import Story from 'components/story/story.component';
import Footer from 'components/footer/footer.component';

/* Styles */
import './landing.styles.scss';

const Landing = () => {
  return (
    <React.Fragment>
      <Hero />
      <Story />
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
