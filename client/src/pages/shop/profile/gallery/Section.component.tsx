import React from 'react';
import type { ReactNode } from 'react';

/* Styles */
import './Section.styles.scss';

const Section = ({ children }: { children: ReactNode }) => {
  return <section className="farmer-profile__gallery__images">{children}</section>;
};

export default Section;
