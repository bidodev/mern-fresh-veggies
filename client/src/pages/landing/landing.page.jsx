import React from 'react';

/* Component Imports */
import Hero from 'pages/landing/hero/hero.component';
import Story from 'pages/landing/story/story.component';
import Footer from 'components/footer/Footer';
import ScrollTopArrow from 'components/UI/scroll/scroll.component';

/* Styles */
import './landing.styles.scss';

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
