import React from 'react';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';
import IosMailOutline from 'react-ionicons/lib/IosMailOutline';

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
              <LogoFacebook fontSize="30px" color="#f75d37" />
              Facebook
            </p>
            <p>
              <IosMailOutline fontSize="30px" color="#f75d37" />
              Mail Us
            </p>
          </div>
          <div className="footer__box__container__placeholder">
            <p>FreshVeggies Str, no.20, Brandenburg, Germany </p>
            <p>+49 01522 3044584 </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
