'use client'; 

import { useState } from 'react';
import HeroSection from './HeroSection';
import HealthCare from './HealthCare';

const Industries: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);



  const heroSectionProps = {
    backgroundImage: '/industry.jpg', 
    heroSectionTextLine1: 'INDUSTRIES ',
    heroSectionTextLine3: 'WE SERVE',
    buttonLabel: 'Schedule a Call',
    logoTitle:'Our experts have been working alongside in-house teams',
    onButtonClick: () => alert('Button clicked!'),
    onIndustrySelect: (industry: string) => setSelectedIndustry(industry), 
  };

  // Function to render the component based on the selected industry
  const renderSelectedIndustryComponent = () => {
    switch (selectedIndustry) {
      case 'Healthcare':
        return <HealthCare />;
      case 'Education':
        // return <Education />; // Add this when Education component is ready
      case 'Sports and Fitness':
        // return <SportsAndFitness />; // Add this when SportsAndFitness component is ready
      default:
        return null;
    }
  };


  

  
  return (
    <>
      <HeroSection {...heroSectionProps} />
      {renderSelectedIndustryComponent()}

    </>
  );
};

export default Industries;