import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from 'components/modal/modal.component';
import ClientSignIn from 'components/client-authentication/client-login/client-login.component';
import ClientSignUp from 'components/client-authentication/client-signup/client-signup.component';

/* Styles */
import './hero.styles.scss';

const Hero = () => {
  const [signInModalStatus, toogleSignInModal] = useState(false);
  const switchLogInSignIn = useSelector((state) => state.switch.show);
  const toogleModal = (modal) => {
    switch (modal) {
      case 'SIGN_IN': {
        return toogleSignInModal(!signInModalStatus);
      }
      default:
    }
  };
  return (
    <>
      <div className="hero-component">
        <header>
          <HashLink to="#story" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <p className="hero-component__button">Our Story</p>
          </HashLink>
          <HashLink to="#footer" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <p className="hero-component__button">Contact Us</p>
          </HashLink>
        </header>
        <div className="hero-component__main">
          <div className="hero-component__main__text-component">
            <p>
              Happiest bio <span>veggies</span>
            </p>
            {/* <div className="hero-component__main__text-component__button-box"> */}
            <p>This can be a paragraph explaining the idea</p>
            <button
              className="hero-component__main__text-component--link-farmer"
              onClick={() => toogleModal('SIGN_IN')}
            >
              I am a Farmer
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
      <Modal
        modalStatus={signInModalStatus}
        closeModal={() => toogleModal('SIGN_IN')}
        className="sign-in-modal"
        overlayClassName="sign-in-overlay"
      >
        {switchLogInSignIn ? <ClientSignUp toogleModal={toogleModal} /> : <ClientSignIn toogleModal={toogleModal} />}
      </Modal>
    </>
  );
};

export default Hero;
