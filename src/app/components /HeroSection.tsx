// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import Button from './Button'; // Assuming Button component exists
// import { useRouter } from 'next/navigation';
// import Slider from './Slider';

// type HeroSectionProps = {
//   backgroundImage?: string;
//   paragraphText1?: string;
//   heroSectionTextLine1?: string;
//   heroSectionTextLine2?: string;
//   heroSectionTextLine3?: string;
//   paragraphText2?: string;
//   buttonLabel: string;
//   logoTitle?: string;
//   onButtonClick?: () => void;
//   logoImages?: { src: string; alt: string }[]; // Array of logo images for the bottom section
// };

// const HeroSection: React.FC<HeroSectionProps> = ({
//   backgroundImage,
//   paragraphText1,
//   heroSectionTextLine1,
//   heroSectionTextLine2,
//   heroSectionTextLine3,
//   paragraphText2,
//   buttonLabel,
//   logoTitle,
//   onButtonClick,
// }) => {
//   const router = useRouter();
//   const handleClick = (route: string) => {
//     router.push(route); // Navigate programmatically to the route
//   };


//   return (
//     <section
//       className="relative w-full h-screen -mt-[73px] overflow-hidden"
//       style={{ 
//        backgroundImage: `url(${backgroundImage})`,
//        backgroundSize: 'cover',
//        backgroundPosition: 'center',
//        borderBottom: '10px solid',
//        borderImageSource: 'linear-gradient(90deg, #E45D25 0%, #F58E1E 100%)',
//        borderImageSlice: 1,
//        }}
//     >
//       {/* Overlay to darken the background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

//       {/* Text Content */}
//       <div className="relative z-10 flex flex-col items-start justify-center h-[90vh] w-full px-6 sm:px-8 lg:px-20">
//         {/* Paragraph 1 */}
//         <p className="flex items-center text-white font-normal text-[18px] sm:text-[20px] lg:text-[24px] mb-4">
//           {paragraphText1}
//           <Image 
//             src="/upIcon.svg" 
//             alt="growth icon"
//             height={22}
//             width={20}
//             className="ml-2 sm:ml-4 cursor-pointer"
//             sizes="(max-width: 768px) 18px, (max-width: 1200px) 20px, 22px"
//             onClick={() => handleClick('/')}
//           />
//         </p>

//         {/* Heading */}
//         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white capitalize w-[58rem] mb-6">
//           <div>{heroSectionTextLine1}</div>
//           <div>{heroSectionTextLine2}</div>
//           <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#E45D25] to-[#F7931E]">
//             {heroSectionTextLine3}
//           </div>
//         </h1>

//         {/* Paragraph 2 */}
//         <p className="text-white font-normal text-[18px] sm:text-[20px] lg:text-[24px] mb-4 w-[46rem]">
//           {paragraphText2}
//         </p>

//         {/* Button */}
//         <Button variant="default" label={buttonLabel} onClick={onButtonClick} />
//       </div>

//       {/* Logo Section */}
//       <div className='absolute bottom-0 left-0 w-full h-[160px] bg-black bg-opacity-50'>
//         <div className='flex flex-col items-center justify-center h-full w-full gap-[2px]'>
//           <h3 className='text-white text-center mt-4'>{logoTitle}</h3>
//           <Slider />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from './Button'; // Assuming Button component exists
import { useRouter } from 'next/navigation';
import Slider from './Slider';

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

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  paragraphText1,
  heroSectionTextLine1,
  heroSectionTextLine2,
  heroSectionTextLine3,
  paragraphText2,
  buttonLabel,
  onButtonClick,
}) => {
  const router = useRouter();
  const handleClick = (route: string) => {
    router.push(route); // Navigate programmatically to the route
  };


  const [gradientStyle, setGradientStyle] = useState({});

    useEffect(() => {
        const updateGradient = () => {
            if (window.innerWidth >= 1024) {
                setGradientStyle({
                    background: 'linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.7) 51.3%, rgba(0, 0, 0, 0) 100%)',
                });
            } else {
                setGradientStyle({
                    background: 'transparent',
                });
            }
        };

        updateGradient(); // Set gradient on initial render
        window.addEventListener('resize', updateGradient); // Update gradient on resize

        return () => {
            window.removeEventListener('resize', updateGradient); // Cleanup event listener on component unmount
        };
    }, []);
  

  return (
    <section
      className="relative w-full lg:h-screen -mt-[75px] overflow-hidden lg:border-b-[10px]  "
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
          <div className="absolute inset-0 clip-ellipse"
          style={gradientStyle}
          ></div>
        </div>
      </div>

      {/* Text Content for larger screens */}
      <div className="absolute top-0 flex flex-col items-start justify-center w-full px-6 sm:px-8 lg:px-20 lg:h-[90vh]">
        {/* Paragraph 1 - Hidden on <1024px */}
        <p className="hidden lg:flex items-center text-white font-normal text-[18px] sm:text-[20px] lg:text-[24px] mb-4">
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

        {/* Heading - Hidden on <1024px */}
        <h1 className="hidden lg:block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white capitalize lg:w-[59rem] mb-6">
          <div>{heroSectionTextLine1}</div>
          <div>{heroSectionTextLine2}</div>
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#E45D25] to-[#F7931E]">
            {heroSectionTextLine3}
          </div>
        </h1>

        {/* Paragraph 2 - Hidden on <1024px */}
        <p className="hidden lg:block text-white font-normal text-[18px] sm:text-[20px] lg:text-[24px] mb-6 lg:w-[86%] xl:w-[70%]">
          {paragraphText2}
        </p>

        {/* Button - Hidden on <1024px */}
        <div className="hidden lg:block">
          <Button variant="default" label={buttonLabel} onClick={onButtonClick} />
        </div>
      </div>

      {/* Text Content for smaller screens */}
      <div className="flex flex-col items-start justify-start w-full px-6 sm:px-8 lg:mt-0 lg:hidden relative bottom-[10%]">
        {/* Paragraph 1 - Visible on <1024px */}
        <p className="flex items-center text-black font-normal text-[14px] sm:text-[16px] md:text-[18px] mb-4">
          {paragraphText1}
          <Image
            src="/upIcon.svg"
            alt="growth icon"
            height={18}
            width={16}
            className="ml-2 cursor-pointer"
            onClick={() => handleClick('/')}
          />
        </p>

        {/* Heading - Visible on smaller screens */}
        <h1 className="text-black text-lg sm:text-xl md:text-2xl font-bold capitalize mb-4">
          <div>{heroSectionTextLine1}</div>
          <div>{heroSectionTextLine2}</div>
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#E45D25] to-[#F7931E]">
            {heroSectionTextLine3}
          </div>
        </h1>

        {/* Paragraph 2 - Visible on smaller screens */}
        <p className="text-black font-normal text-[14px] sm:text-[16px] md:text-[18px] mb-4 w-[95%]">
          {paragraphText2}
        </p>

        {/* Button - Visible on smaller screens */}
        <div>
          <Button variant="fill" label={buttonLabel} onClick={onButtonClick} />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="lg:absolute mt-4 lg:mt-0 relative py-2 lg:py-2  lg:bottom-0 left-0 w-full h-[85px] sm:h-[85px] md:h-[95px] bg-black bg-opacity-50 flex flex-col items-center justify-center lg:h-[22%] lg:flex lg:flex-col lg:justify-center lg:items-center">
        <h3 className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl">
          {/* {logoTitle} */}
          Our Brand Work for
        </h3>
        <Slider />
      </div>
    </section>
  );
};

export default HeroSection;
