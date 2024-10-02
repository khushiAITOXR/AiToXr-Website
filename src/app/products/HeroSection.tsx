'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../components /Button';

type HeroSectionProps = {
  backgroundImage?: string;
  heroSectionTextLine1?: string;
  heroSectionTextLine3?: string;
  paragraphText2?: string;
  text?: string;
  buttonLabel: string;
  logoTitle?: string;
  onButtonClick?: () => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  heroSectionTextLine1,
  heroSectionTextLine3,
  text,
  paragraphText2,
  buttonLabel,
  onButtonClick,
}) => {
  const router = useRouter();
  const handleClick = (route: string) => {
    router.push(route); // Navigate programmatically to the route
  };

  return (
    <section
      className="relative w-full h-screen -mt-[75px] overflow-hidden "
    >
      {/* Background Image with Overlay */}
      <div className="relative w-full h-[48vh] lg:h-full overflow-hidden">
        <div className="absolute inset-0 lg:top-0 top-[6%] w-full h-full lg:clip-none clip-ellipse">
          <Image
            src={backgroundImage || '/heroImage.jpg'}
            alt="Hero Background"
            fill
            className="object-cover object-center w-full h-full"
            priority
            sizes="100vw"
          />
          {/* <div className="absolute inset-0 lg:gradient-l-r gradient-t-b clip-ellipse"></div> */}
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent backdrop-blur-[10px]"></div>
          
        </div>
      </div>

      {/* Text Content for larger screens */}
      <div className="absolute top-0 flex flex-col items-center justify-center w-full px-6 sm:px-8 lg:px-20 lg:h-[100vh]">
        {/* Paragraph 1 - Hidden on <1024px */}

        {/* Heading - Hidden on <1024px */}
        <h1 className="hidden lg:block text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold text-white capitalize lg:w-[100%] mb-6">
          <div className='flex justify-center items-center gap-4'>
          <div>{heroSectionTextLine1}</div>
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#E45D25] to-[#F7931E]">
            {heroSectionTextLine3}
          </div>
          </div>
        </h1>

        {/* Paragraph 2 - Hidden on <1024px */}
        <p className="hidden lg:block text-white font-normal text-[18px] sm:text-[20px] lg:text-[26px] mb-6 lg:w-[65%] text-center">
          {paragraphText2}
        </p>

        {/* Button - Hidden on <1024px */}
        <div className='bg-[#00000099] hidden lg:flex  justify-between items-center border-2 border-[#E45D25] rounded-[20px] p-8 w-[75%]'>
            <div className='text-white text-[20px] w-[75%]'>{text}</div>
            <div className="hidden lg:block">
            <Button variant="default" label={buttonLabel} onClick={onButtonClick} />
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
