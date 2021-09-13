import React from 'react';

/* Component Imports */
import Hero from '../hero/hero.component';
import Story from '../story/story.component';
import Footer from '../../../components/footer/Footer';
import ScrollTopArrow from '../../../components/UI/scroll/scroll.component';

//
const Landing = () => {
  return (
    <React.Fragment>
      <Hero />
      <Story />
      <Footer />
      <ScrollTopArrow />
    </React.Fragment>
  );
};
export default Landing;
