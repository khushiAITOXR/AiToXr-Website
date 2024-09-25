'use client';

import React from 'react';
import Image from 'next/image';
import Button from './Button'; // Assuming Button component exists
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

type HeroSectionProps = {
  backgroundImage?: string;
  paragraphText1?: string;
  heroSectionTextLine1?: string;
  heroSectionTextLine2?: string;
  heroSectionTextLine3?: string;
  paragraphText2?: string;
  buttonLabel: string;
  logoTitle?: string;
  onButtonClick?: () => void;
  logoImages?: { src: string; alt: string }[]; // Array of logo images for the bottom section
};

const defaultLogos = [
  { src: '/logos/wave-movers.png', alt: 'wave-movers' },
  { src: '/logos/first-cry.png', alt: 'Logo 2' },
  { src: '/logos/ai-invento.png', alt: 'Logo 3' },
  { src: '/logos/techbiz.png', alt: 'Logo 4' },
  { src: '/logos/global.png', alt: 'Logo 5' },
  { src: '/logos/macro-world.png', alt: 'Logo 6' },
  { src: '/logos/gateway.png', alt: 'Logo 7' },
  { src: '/logos/excel.png', alt: 'Logo 8' },
];

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  paragraphText1,
  heroSectionTextLine1,
  heroSectionTextLine2,
  heroSectionTextLine3,
  paragraphText2,
  buttonLabel,
  logoTitle,
  onButtonClick,
  logoImages = defaultLogos,
}) => {
  const router = useRouter();
  const handleClick = (route: string) => {
    router.push(route); // Navigate programmatically to the route
  };

  const scrollingVariants = {
    animate: {
      x: ['0%', '-100%'], // Start outside the right and end outside the left
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20, // Duration for one full scroll cycle
          ease: 'linear',
        },
      },
    },
  };

  const duplicatedLogos = [...logoImages, ...logoImages];

  return (
    <section
      className="relative w-full h-screen -mt-[73px] overflow-hidden"
      style={{ 
       backgroundImage: `url(${backgroundImage})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       borderBottom: '10px solid',
       borderImageSource: 'linear-gradient(90deg, #E45D25 0%, #F58E1E 100%)',
       borderImageSlice: 1,
       }}
    >
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-[90vh] w-full px-6 sm:px-8 lg:px-20">
        {/* Paragraph 1 */}
        <p className="flex items-center text-white font-normal text-[18px] sm:text-[20px] lg:text-[24px] mb-4">
          {paragraphText1}
          <Image 
            src="/upIcon.svg" 
            alt="growth icon"
            height={22}
            width={20}
            className="ml-2 sm:ml-4 cursor-pointer"
            sizes="(max-width: 768px) 18px, (max-width: 1200px) 20px, 22px"
            onClick={() => handleClick('/')}
          />
        </p>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white capitalize w-[58rem] mb-6">
          <div>{heroSectionTextLine1}</div>
          <div>{heroSectionTextLine2}</div>
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#E45D25] to-[#F7931E]">
            {heroSectionTextLine3}
          </div>
        </h1>

        {/* Paragraph 2 */}
        <p className="text-white font-normal text-[18px] sm:text-[20px] lg:text-[24px] mb-6 w-[46rem]">
          {paragraphText2}
        </p>

        {/* Button */}
        <Button variant="default" label={buttonLabel} onClick={onButtonClick} />
      </div>

      {/* Logo Section */}
      <div className='absolute bottom-0 left-0 w-full h-[150px] bg-black bg-opacity-50'>
        <div className='flex flex-col items-center justify-center h-full w-full gap-[10px]'>
          <h3 className='text-white text-center'>{logoTitle}</h3>
          <motion.div 
            className='flex justify-start items-center w-[150%] gap-6' 
            variants={scrollingVariants} 
            animate="animate"
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={`${logo.src}-${index}`} className='bg-white w-[150px] h-[70px] px-4 py-0 flex items-center justify-center mb-6 rounded-[10px]'>
                <Image src={logo.src} alt={logo.alt} width={165} height={30} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
