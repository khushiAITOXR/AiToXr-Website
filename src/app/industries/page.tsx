'use client'; 

import { useState } from 'react';
import HeroSection from './HeroSection';
import HealthCare from './HealthCare';
import Education from './Education';
import Enterprise from './Enterprise';
import Estate from './Estate';
import Finance from './Finance';
import Food from './Food';
import Media from './Media';
import Retail from './Retail';
import Sports from './Sports';
import Transport from './Transport';
import Travel from './Travel';
// import { useSearchParams } from 'next/navigation';
// import { useRouter } from 'next/router';

const Industries: React.FC = () => {
  // const router = useRouter();
  // const { industry } = router.query;
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

  const renderSelectedIndustryComponent = () => {
    switch (selectedIndustry) {
      case 'Healthcare':
        return <HealthCare />;
      case 'Education':
        return <Education />;
      case 'Sports and Fitness':
        return <Sports />;
      case 'Finance and Banking':
        return <Finance />;
      case 'Real Estate':
        return <Estate />;
      case 'E-commerce and Retail':
        return <Retail />;
      case 'Travel and Tourism':
        return <Travel />;
      case 'Transport and Logistics':
        return <Transport />;
      case 'Food and Restaurants':
        return <Food />;
      case 'Enterprise Mobility':
        return <Enterprise />;
      case 'Media and Entertainment':
        return <Media />;
      default:
        return null;
    }
  };

  // useEffect(() => {
  //   if (selectedIndustryParam) {
  //     setSelectedIndustry(selectedIndustryParam);
  //   }
  // }, [selectedIndustryParam]);


  

  
  return (
    <>
      <HeroSection {...heroSectionProps} />
      {renderSelectedIndustryComponent()}

    </>
  );
};

export default Industries;