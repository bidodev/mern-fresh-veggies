import React from 'react';
import Story from 'components/story/story.component';

import './landing.styles.scss';

const Landing = () => {
  return (
    <React.Fragment>
      <div className="landing-page">Welcome to Landing Page!</div>
      <Story />
    </React.Fragment>
  );
};

export default Landing;
