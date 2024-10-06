'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Dropdown from './Dropdown';
import Banner from './Banner';
// import { useRouter } from 'next/navigation';

type HeroSectionProps = {
  backgroundImage?: string;
  heroSectionTextLine1?: string;
  heroSectionTextLine3?: string;
  paragraphText2?: string;
  text?: string;
  buttonLabel: string;
  logoTitle?: string;
  onButtonClick?: () => void;
  onIndustrySelect: (industry: string) => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  heroSectionTextLine1,
  heroSectionTextLine3,
  onIndustrySelect
}) => {
  // const router = useRouter();
  // const handleClick = (route: string) => {
  //   router.push(route); // Navigate programmatically to the route
  // };
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const backgroundImages: { [key: string]: string } = {
    Healthcare: '/healthcare-hero.jpg',
    Education: '/education-hero.jpg',
    'Sports and Fitness': '/sports-hero.jpg',
    'Finance and Banking': '/finance-hero.jpg',
    // Add more background images for different industries
    default: backgroundImage || '/heroImage.jpg',
  };

  const items = [
    'Healthcare',
    'Education',
    'Sports and Fitness',
    'Finance and Banking',
    'Real Estate',
    'E-commerce and Retail',
    'Travel and Tourism',
    'Transport and Logistics',
    'Food and Restaurants',
    'Enterprise Mobility',
    'Media and Entertainment',
    'Didn’t find your industry',
  ];

  const handleSelect = (item: string) => {
    setSelectedIndustry(item);
    onIndustrySelect(item); // Pass selected industry to parent component
  };

  const handleCloseBanner = () => {
    setIsBannerVisible(false); // Hide the banner when the dropdown opens
  };

  return (
    <section
      className="relative w-full lg:h-screen -mt-[75px] overflow-hidden "
    >
      {/* Background Image with Overlay */}
      <div className="relative w-full h-[280px] lg:h-full overflow-hidden">
        <div className="absolute inset-0 lg:top-0 top-[6%] w-full lg:clip-none clip-ellipse">
          <Image
            src={backgroundImages[selectedIndustry || 'default']}
            alt="Hero Background"
            fill
            className="object-cover object-center w-full"
            priority
            sizes="100vw"
          />
          {/* <div className="absolute inset-0 lg:gradient-l-r gradient-t-b clip-ellipse"></div> */}
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent backdrop-blur-[3px]"></div>
          
        </div>
      </div>

      <h1 className="lg:hidden relative bottom-[150px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white capitalize lg:w-[100%]">
          <div className='flex justify-center items-center gap-4'>
          <div>{heroSectionTextLine1} {heroSectionTextLine3}</div>
          </div>
        </h1>
        <div className='lg:hidden relative bottom-[70px]'>
        <p className=" text-black  font-bold text-[24px] md:text-[28px] mb-4 w-[75%] xl:w-[65%] text-center m-auto">
        Choose Your <span className='text-[#E45D25]'>Industry</span>
        </p>

        <Dropdown items={items} onSelect={handleSelect} onOpenDropdown={handleCloseBanner} />
        </div>

      {/* Text Content for larger screens */}
      <div className="hidden lg:flex absolute top-[8rem] flex-col items-center justify-center w-full">
        {/* Paragraph 1 - Hidden on <1024px */}

        {/* Heading - Hidden on <1024px */}
        <h1 className="hidden lg:block text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white capitalize lg:w-[100%]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E45D25] to-[#F7931E]">
            {heroSectionTextLine1}
          </span>
          <span>{heroSectionTextLine3}</span>
        </h1>
        <p className='text-white 2xl:text-3xl xl:text-3xl lg:text-2xl font-bold mt-5 xl:mt-8 2xl:mt-10 mb-6 2xl:mb-10 xl:mb-8'>Choose Your Industry</p>
        <Dropdown items={items} onSelect={handleSelect} onOpenDropdown={handleCloseBanner} />
       
      </div>
      {isBannerVisible && <Banner onClose={handleCloseBanner} />}
    </section>
  );
};

export default HeroSection;
