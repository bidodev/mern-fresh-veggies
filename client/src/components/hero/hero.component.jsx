import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

/* Styles */
import './hero.styles.scss';

const Hero = () => {
  return (
    <div className="hero-component">
      {/* <header>
        <HashLink to="#story" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
          <p className="hero-component__button">Our Story</p>
        </HashLink>
        <HashLink to="#footer" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
          <p className="hero-component__button">Contact Us</p>
        </HashLink>
      </header> */}
      <div className="hero-component__main">
        <div className="hero-component__main__text-component">
          <p>
            Happiest bio <span>veggies</span>
          </p>
          {/* <div className="hero-component__main__text-component__button-box"> */}
          <button>
            <Link to="/farmer/admin" className="hero-component__main__text-component--link-farmer">
              I am a Farmer
            </Link>
          </button>
          <button>
            <Link to="/shop" className="hero-component__main__text-component--link-shop">
              I am here to shop
            </Link>
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
