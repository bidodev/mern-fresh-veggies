import React from 'react';
import './hero.styles.scss';

import { HashLink } from 'react-router-hash-link';

const Hero = () => {
  return (
    <div className="hero-component">
      <header>
        <HashLink
          to="#story"
          scroll={(el) =>
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        >
          <p className="hero-component__button">Our Story</p>
        </HashLink>
      </header>
      <div className="hero-component__main">
        <div className="hero-component__main__text-component">
          <p>
            Happiest bio <span>veggies</span>
          </p>
          {/* <div className="hero-component__main__text-component__button-box"> */}
          <button>I am a Farmer</button>
          <button>I am here to shop</button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
