import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { StyledWrapper } from './Hero.styles';

/* Component Imports */
import CustomButton from 'src/components/UI/custom-button/custom-button.component';

/* Styles */
import './hero.styles.scss';

const Hero: React.FC = () => {
  return (
    <>
      <StyledWrapper className="hero-class">
        <div className="hero-component">
          <header>
            <nav className="hero-component__header">
              <Link to="/farmer/admin">
                <p className="hero-component__header__button">Farmer</p>
              </Link>
              <Link to="/shop">
                <p className="hero-component__header__button">Shop</p>
              </Link>
              <HashLink to="#footer" scroll={(el: any) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                <p className="hero-component__header__button">Contact</p>
              </HashLink>
            </nav>
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
                <HashLink to="#story" scroll={(el: any) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                  <CustomButton>Get Started</CustomButton>
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </StyledWrapper>
    </>
  );
};

export default Hero;
