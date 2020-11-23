import React from 'react';

/* Styles */
import './Section.styles.scss';

const Section = ({ children }) => {
  return <section className="farmer-profile__gallery__images">{children}</section>;
};

export default Section;
