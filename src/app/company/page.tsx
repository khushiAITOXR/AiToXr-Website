'use client'; 

import Contact from '../sections/Contact';
import {AboutCompany, Deliver, WeAreRemote} from './CompanyCard';
import HeroSection from './HeroSection';

const Products: React.FC = () => {



  const heroSectionProps = {
    backgroundImage: '/company.jpg', // Provide the path to the background image
    heroSectionTextLine1: 'OUR',
    heroSectionTextLine3: 'COMPANY',
    paragraphText2: 'We create the best product which this growing industry needs. Look our product and find the best for your business',
    text: 'We customize products for your company. Let’s connect to know what you need and create a better product for your company.',
    buttonLabel: 'Schedule a Call',
    logoTitle:'Our experts have been working alongside in-house teams',
    onButtonClick: () => alert('Button clicked!'),
  };

  

  
  return (
    <>
      <HeroSection {...heroSectionProps} />
      <AboutCompany />
      <WeAreRemote />
      <Deliver />

      <Contact />


    </>
  );
};

export default Products;