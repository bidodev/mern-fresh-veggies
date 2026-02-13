import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

/* Styles */
import './footer.styles.scss';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__box">
        <p className="footer__box__title">Contact Us</p>
        <div className="footer__box__container">
          <div className="footer__box__container__social-media">
            <p>
              <Icon icon={faFacebook} className="footer__icon" style={{ color: '#3b5998' }} />
              Facebook
            </p>
            <p>
              <Icon icon={['fas', 'envelope']} className="footer__icon" style={{ color: '#1e5b45' }} />
              Mail Us
            </p>
          </div>
          <div className="footer__box__container__placeholder">
            <p>FreshVeggies Str, no.20, Brandenburg, Germany </p>
            <p>+49 01522 3044584 </p>
          </div>
        </div>
        <p className="credits">Made with ❤️ in Berlin by Bido, Simona and Kevin.</p>
      </div>
    </footer>
  );
};

export default Footer;
