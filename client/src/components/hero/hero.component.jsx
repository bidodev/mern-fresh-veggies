import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import './hero.styles.scss';

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
          <button>
            <Link to="/farmer/admin">I am a Farmer</Link>
          </button>
          <button>
            <Link to="/shop">I am here to shop</Link>
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
