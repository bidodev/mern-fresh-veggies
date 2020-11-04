import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

/* Component Imports */
import CustomButton from 'components/UI/custom-button/custom-button.component';

/* Styles */
import './hero.styles.scss';

const Hero = () => {
  return (
    <>
      <div className="hero-component">
        <header>
          <Link to="/farmer/admin">
            <p className="hero-component__button">Farmer</p>
          </Link>
          <Link to="/shop">
            <p className="hero-component__button">Shop</p>
          </Link>
          <HashLink to="#footer" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <p className="hero-component__button">Contact</p>
          </HashLink>
        </header>
        <div className="hero-component__main">
          <div className="hero-component__main__text-component">
            <p>
              Happiest bio <span>veggies</span>
            </p>
            {/* <div className="hero-component__main__text-component__button-box"> */}
            <div className="hero-component__main__text-component--sub-heading">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis alias quibusdam, veniam pariatur
              perspiciatis numquam rem repellendus sit.
            </div>
            <HashLink to="#story" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
              <button className="hero-component__main__text-component--button">Get Started</button>
            </HashLink>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
