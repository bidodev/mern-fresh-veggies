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
              Happiest Bio <span>veggies</span>
            </p>
            <div className="hero-component__main__text-component--sub-heading">
              Locally sourced food is fresh and delicious! We encourage reasoned consumption with seasonal and organic
              food.
            </div>
            <div className="hero-component__main__text-component--button">
              <HashLink to="#story" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                <CustomButton style={{ width: '11rem' }}>Get Started</CustomButton>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
