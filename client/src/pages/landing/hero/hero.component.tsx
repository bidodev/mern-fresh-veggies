import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faLeaf, faSeedling, faTruckFast } from '@fortawesome/free-solid-svg-icons';

/* Component Imports */
import CustomButton from 'components/UI/custom-button/custom-button.component';

/* Styles */
import './hero.styles.scss';

const Hero = () => {
  const highlights = [
    {
      icon: faSeedling,
      text: 'Organic produce from trusted local growers',
    },
    {
      icon: faTruckFast,
      text: 'Easy weekly delivery straight to your doorstep',
    },
    {
      icon: faLeaf,
      text: 'Seasonal picks with transparent farm sourcing',
    },
  ];

  return (
    <>
      <div className="hero-class">
        <div className="hero-component">
          <header>
            <nav className="hero-component__header" aria-label="Hero navigation">
              <Link to="/farmer/admin" className="hero-component__header__button">
                Farmer
              </Link>
              <Link to="/shop" className="hero-component__header__button">
                Shop
              </Link>
              <HashLink
                to="#footer"
                className="hero-component__header__button"
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                Contact
              </HashLink>
            </nav>
          </header>

          <div className="hero-component__main">
            <div className="hero-component__main__text-component">
              <p className="hero-component__main__text-component--title">
                Happiest Bio <span>veggies</span>
              </p>
              <div className="hero-component__main__text-component--sub-heading">
                Locally sourced food is fresh and delicious! We encourage reasoned consumption with seasonal and organic
                food.
              </div>

              <ul className="hero-component__main__text-component__highlights">
                {highlights.map(({ icon, text }) => (
                  <li key={text}>
                    <Icon icon={icon} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="hero-component__main__text-component__actions">
                <HashLink to="#story" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                  <CustomButton style={{ width: '14rem' }}>Get Started</CustomButton>
                </HashLink>
                <Link to="/shop" className="hero-component__main__text-component__shop-link">
                  Browse Shop
                </Link>
              </div>
            </div>

            <aside className="hero-component__main__spotlight" aria-label="Weekly produce spotlight">
              <p className="hero-component__main__spotlight-kicker">This Week</p>
              <h2 className="hero-component__main__spotlight-title">Berlin Harvest Box</h2>
              <p className="hero-component__main__spotlight-copy">
                Root vegetables, leafy greens, and orchard fruit curated for a full week of seasonal cooking.
              </p>
              <Link to="/shop" className="hero-component__main__spotlight-link">
                View in shop
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
