'use client'; 

import React from 'react';
import Image from 'next/image';
import Button from '@/app/components /Button';

const heroSectionTextLine1 = "Accelerate Your Roadmap";
const heroSectionTextLine2 = "With Our Vetted";
const heroSectionTextLine3 = "Nearshore Tech Talent.";
const paragraphText1 = "Create. Collaborate. Develop.";
const paragraphText2 = "Access 4,000+ timezone aligned software engineers with experience in 100+ technologies.";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen -mt-[72px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/heroImage.jpg" 
          alt="Hero Background" 
          fill 
          className="object-cover object-center w-full h-full"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      {/* Text Content */}
      <div className="relative flex flex-col items-start justify-center h-[90vh] w-full px-6 sm:px-8 lg:px-20">
        
        {/* Paragraph 1 */}
        <p className="flex items-center text-white font-normal text-[18px] sm:text-[20px] lg:text-[24px] mb-4">
          {paragraphText1}
          <Image 
          src="/upIcon.svg" 
          alt="growth icon"
          height={22}
          width={20}
          className="ml-2 sm:ml-4"
          sizes="(max-width: 768px) 18px, (max-width: 1200px) 20px, 22px"
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
        <Button variant="default" label="Schedule a Call" onClick={() => alert('Button clicked!')} />
        {/* Background Wrapper */}
        </div>
        <div className='absolute bottom-0 left-0 w-full h-[130px] bg-black bg-opacity-50'>
        {/* Section Content */}
        <div className='flex flex-col items-center justify-center h-full w-full'>
          <h3 className='text-white text-center'>Our Brand Work for</h3>
          <div className='flex justify-around items-center mt-[15px] w-[80%]'>
            <Image src='/logo.svg' alt="aitoxr-logo" width={165} height={30} />
            <Image src='/logo.svg' alt="aitoxr-logo" width={165} height={30} />
            <Image src='/logo.svg' alt="aitoxr-logo" width={165} height={30} />
            <Image src='/logo.svg' alt="aitoxr-logo" width={165} height={30} />
            <Image src='/logo.svg' alt="aitoxr-logo" width={165} height={30} />
            <Image src='/logo.svg' alt="aitoxr-logo" width={165} height={30} />
          </div>
        </div>
      </div>
      
    </section>

  );
};

export default HeroSection;
