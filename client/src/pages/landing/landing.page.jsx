import React from 'react';

import Hero from 'components/hero/hero.component';
import Story from 'components/story/story.component';
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
