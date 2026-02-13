import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

/* Styles */
import './footer.styles.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer__shell">
        <div className="footer__brand">
          <p className="footer__brand-kicker">Fresh • Local • Seasonal</p>
          <h2 className="footer__brand-name">Veggies</h2>
          <p className="footer__brand-copy">
            Small farms, transparent sourcing, and weekly baskets delivered with care.
          </p>
        </div>

        <div className="footer__grid">
          <section className="footer__panel" aria-label="Contact details">
            <h3 className="footer__panel-title">Contact</h3>
            <p className="footer__line">
              <Icon icon={['fas', 'location-dot']} className="footer__icon" />
              FreshVeggies Str, no.20, Brandenburg, Germany
            </p>
            <a className="footer__line footer__line--link" href="tel:+49015223044584">
              <Icon icon={['fas', 'phone']} className="footer__icon" />
              +49 01522 3044584
            </a>
            <p className="footer__line">
              <Icon icon={['fas', 'envelope']} className="footer__icon" />
              Mail us for wholesale and weekly box requests.
            </p>
          </section>

          <section className="footer__panel" aria-label="Quick links">
            <h3 className="footer__panel-title">Quick links</h3>
            <nav className="footer__links" aria-label="Footer navigation">
              <Link to="/shop">Shop</Link>
              <a href="/shop#how-we-work">How it works</a>
              <Link to="/farmer/admin">Farmer access</Link>
            </nav>
          </section>

          <section className="footer__panel" aria-label="Community links">
            <h3 className="footer__panel-title">Community</h3>
            <div className="footer__socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Icon icon={faFacebook} />
                Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Icon icon={faInstagram} />
                Instagram
              </a>
            </div>
            <p className="footer__note">Follow harvest drops, new farmers, and seasonal recipes.</p>
          </section>
        </div>

        <div className="footer__bottom">
          <p>Made in Berlin by Bido, Simona and Kevin.</p>
          <p>&copy; {currentYear} Veggies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
