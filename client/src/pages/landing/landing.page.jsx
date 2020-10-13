import React from 'react';

/**
 * loading components to compuse landing page
 */
import Hero from 'components/hero/hero.component';
import Story from 'components/story/story.component';

/* styles */
import './landing.styles.scss';

const Landing = () => {
  return (
    <React.Fragment>
      <Hero />
      <Story />
    </React.Fragment>
  );
};

export default Landing;
