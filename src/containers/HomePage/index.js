import React from 'react';
import MainSection from './MainSection';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Footer from './Footer';
import SectionContainer from './SectionContainer';

const HomePage = () => (
  <SectionContainer>
    <MainSection />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Footer />
  </SectionContainer>
);

export default HomePage;

