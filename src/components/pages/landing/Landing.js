import React from 'react';
import Hero from './Hero';
import NavbarStandard from './NavbarStandard';
import Services from './Services';
import Cta from './Cta';
import FooterStandard from './FooterStandard';

const Landing = () => {
  return (
    <>
      <NavbarStandard />
      <Hero />
      <Services />
      <Cta />
      <FooterStandard />
    </>
  );
};

export default Landing;
