'use client'; 

import HeroSection from './HeroSection';

const Products: React.FC = () => {



  const heroSectionProps = {
    backgroundImage: '/industry.jpg', 
    heroSectionTextLine1: 'INDUSTRIES ',
    heroSectionTextLine3: 'WE SERVE',
    buttonLabel: 'Schedule a Call',
    logoTitle:'Our experts have been working alongside in-house teams',
    onButtonClick: () => alert('Button clicked!'),
  };


  

  
  return (
    <>
      <HeroSection {...heroSectionProps} />

    </>
  );
};

export default Products;