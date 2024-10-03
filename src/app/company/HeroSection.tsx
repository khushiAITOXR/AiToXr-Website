'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../components /Button';
import Awards from './Awards';

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
      className="relative w-full lg:h-screen -mt-[75px] overflow-hidden "
    >
      {/* Background Image with Overlay */}
      <div className="relative w-full h-[280px] lg:h-full overflow-hidden">
        <div className="absolute inset-0 lg:top-0 top-[6%] w-full lg:clip-none clip-ellipse">
          <Image
            src={backgroundImage || '/heroImage.jpg'}
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
          {/* <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#E45D25] to-[#F7931E]">
            {heroSectionTextLine3}
          </div> */}
          </div>
        </h1>

        <p className="lg:hidden text-black  font-normal text-[14px] sm:text-base md:text-lg lg:text-[20px] xl:text-[26px] mb-10 w-[75%] xl:w-[65%] text-center m-auto">
          {paragraphText2}
        </p>

        <div className='bg-[#F3F3F3] lg:hidden flex flex-col  justify-between items-center p-10  xl:p-12 w-full h-[288px]'>
            <div className='text-black text-[14px] text-center sm:text-base md:text-base lg:text-lg xl:text-xl  w-[75%] mb-6 '>{text}</div>
            <Button variant="fill" label={buttonLabel} onClick={onButtonClick} />
        </div>
            
        

      {/* Text Content for larger screens */}
      <div className="hidden lg:flex absolute top-[12rem] flex-col items-center justify-center w-full px-6 sm:px-8 lg:px-20">
        {/* Paragraph 1 - Hidden on <1024px */}

        {/* Heading - Hidden on <1024px */}
        <h1 className="hidden lg:block text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white capitalize lg:w-[100%] mb-6">
          <div className='flex justify-center items-center gap-4'>
          <div>{heroSectionTextLine1}</div>
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#E45D25] to-[#F7931E]">
            {heroSectionTextLine3}
          </div>
          </div>
        </h1>

        {/* Paragraph 2 - Hidden on <1024px */}
        <p className="hidden lg:block text-white font-normal xl:mb-6 2xl:mb-32 text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[26px] w-[75%] xl:w-[65%] text-center">
          {paragraphText2}
        </p>

        <Awards/>
      </div>
    </section>
  );
};

export default HeroSection;
