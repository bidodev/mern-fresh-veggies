import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hero from 'components/hero/hero.component';
import Story from 'components/story/story.component';
import './landing.styles.scss';

const Landing = () => {
  return (
    <React.Fragment>
      <Router>
        <Hero />
        <Story />
      </Router>
    </React.Fragment>
  );
};

export default Landing;

{
  /* <Router>
<Route to="/" component={Hero} />
<Route to="/about" component={Story} id="about" />
</Router> */
}
