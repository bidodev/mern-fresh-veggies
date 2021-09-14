import React from 'react';

/* Component Imports */
import Hero from './hero/hero.component';
import Story from './story/story.component';
import Footer from '../../../../components/footer/Footer';
import { ArrowScroll } from '@components';

//
const Landing = (props: any) => {
  return (
    <React.Fragment>
      <Hero />
      <Story />
      <Footer />
      <ArrowScroll />
    </React.Fragment>
  );
};
export default Landing;
