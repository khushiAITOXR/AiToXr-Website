// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import Button from '../components /Button'; 

// type ProductCardProps = {
//   imageSrc: string;
//   title: string;
//   description: string;
//   bulletPoints: string[];
//   buttonLabel: string;
//   onButtonClick: () => void;
//   imageOnRight?: boolean; // Prop to switch image position
//   backgroundColor?: string;
// };

// const ProductCard: React.FC<ProductCardProps> = ({
//   imageSrc,
//   title,
//   description,
//   bulletPoints,
//   buttonLabel,
//   onButtonClick,
//   imageOnRight = false, // Default to false
//   backgroundColor = 'white',
// }) => {
//   return (
//     <section className='py-8' style={{ backgroundColor }}>
//     <div className="flex flex-col lg:flex-row md:gap-8 items-center justify-between p-8 w-[82%] m-auto">
//       {/* Conditionally rendering image position */}
//       {!imageOnRight && (
//         <div className="w-full lg:w-[40%] xl:w-1/2  flex justify-center">
//           <Image
//             src={imageSrc}
//             alt="Product Image"
//             width={500}
//             height={300}
//             className="object-cover"
//           />
//         </div>
//       )}

//       <div className={`w-full lg:w-[60%] xl:w-1/2 ${imageOnRight ? 'text-left' : 'text-left'} px-6 `}>
//         <h1 className="text-xl sm:text-xl md:text-2xl font-bold lg:text-3xl xl:text-4xl mb-4 lg:mb-[4%] xl:mb-[10%]">{title}</h1>
//         <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-lg font-normal mb-4 lg:mb-[4%] xl:mb-[10%]">{description}</p>

//         {/* Bullet Points */}
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           {bulletPoints.map((point, index) => (
//             <div key={index} className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg font-medium">
//               • {point}
//             </div>
//           ))}
//         </div>

//         {/* Button */}
//         <div className={`mb-4 lg:mb-[4%] xl:mb-[10%] ${imageOnRight ? 'text-left' : 'text-left'}`}>
//           <Button variant="default" label={buttonLabel} onClick={onButtonClick} />
//         </div>
//       </div>

//       {/* Conditionally rendering image on the right side */}
//       {imageOnRight && (
//         <div className="w-full  lg:w-1/2 flex justify-center">
//           <Image
//             src={imageSrc}
//             alt="Product Image"
//             width={500}
//             height={300}
//             className="object-cover"
//           />
//         </div>
//       )}
//     </div>
//     </section>
//   );
// };

// export default ProductCard;


// 'use client';

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Button from '../components /Button'; // Adjusted the path for Button component

// type ProductCardProps = {
//   imageSrc: string;
//   title: string;
//   description: string;
//   bulletPoints: string[];
//   buttonLabel: string;
//   onButtonClick: () => void;
//   imageOnRight?: boolean; // Prop to switch image position for screens >= 1024px
//   backgroundColor?: string;
// };

// const ProductCard: React.FC<ProductCardProps> = ({
//   imageSrc,
//   title,
//   description,
//   bulletPoints,
//   buttonLabel,
//   onButtonClick,
//   imageOnRight = false, // Default to false
//   backgroundColor = 'white',
// }) => {
//   const [isMobile, setIsMobile] = useState(false);

//   // Effect to check screen width on initial render and window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };

//     // Set initial value
//     handleResize();

//     // Add event listener to resize
//     window.addEventListener('resize', handleResize);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);
//   return (
//     <section className='py-8' style={{ backgroundColor }}>
//       <div className="flex flex-col lg:flex-row md:gap-8 items-center justify-between p-8 w-[82%] m-auto">
//       <h1 className="block lg:hidden text-xl sm:text-2xl md:text-3xl font-bold lg:text-3xl text-center lg:text-left xl:text-4xl mb-4 lg:mb-[4%] xl:mb-[10%] 2xl:mb-[7%]">
//             {title}
//           </h1>
//         {/* Always rendering image first for <1024px screens */}
//         <div className="w-full lg:w-[40%] xl:w-1/2 flex justify-center mb-4 lg:mb-0">
//           <Image
//             src={imageSrc}
//             alt="Product Image"
//             width={500}
//             height={300}
//             className="object-cover"
//           />
//         </div>

//         {/* Content Section */}
//         <div className={`w-full lg:w-[60%] xl:w-1/2 text-left px-0 md:px-6 lg:px-6 xl:px-6`}>
//           <h1 className="hidden lg:block text-xl sm:text-2xl md:text-3xl font-bold lg:text-3xl text-center lg:text-left xl:text-4xl mb-4 lg:mb-[4%] xl:mb-[10%] 2xl:mb-[7%]">
//             {title}
//           </h1>
//           <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-lg font-normal mb-4 lg:mb-[4%] xl:mb-[10%] 2xl:mb-[7%]">
//             {description}
//           </p>

//           {/* Bullet Points */}
//           <div className="grid grid-cols-1  sm:grid-cols-2  gap-4 mb-6">
//             {bulletPoints.map((point, index) => (
//               <div key={index} className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg font-medium">
//                 • {point}
//               </div>
//             ))}
//           </div>

//           {/* Button */}
//           <div className="mb-4 lg:mb-[4%] xl:mb-[10%] 2xl:mb-[7%] text-left">
//             <Button
//              variant={isMobile ? 'fill' : 'default'}
//              label={buttonLabel}
//              onClick={onButtonClick} />
//           </div>
//         </div>
//       </div>
      
//     </section>
//   );
// };

// export default ProductCard;


'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '../components /Button'; // Adjusted the path for Button component

type ProductCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  bulletPoints: string[];
  buttonLabel: string;
  onButtonClick: () => void;
  imageOnRight?: boolean; // Prop to switch image position for screens >= 1024px
  backgroundColor?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  description,
  bulletPoints,
  buttonLabel,
  onButtonClick,
  imageOnRight = false, // Default to false
  backgroundColor = 'white',
}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Effect to check screen width on initial render and window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Set initial value
    handleResize();

    // Add event listener to resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="py-8" style={{ backgroundColor }}>
      <div className={`flex flex-col lg:flex-row ${imageOnRight && !isMobile ? 'lg:flex-row-reverse' : ''} md:gap-8 items-center justify-between p-8 w-[82%] m-auto`}>
        {/* Title for mobile screens */}
        <h1 className="block lg:hidden text-xl sm:text-2xl md:text-3xl font-bold lg:text-3xl text-center lg:text-left xl:text-4xl mb-4 lg:mb-[4%] xl:mb-[10%] 2xl:mb-[7%]">
          {title}
        </h1>

        {/* Image - Always on top for mobile (<1024px), conditionally on left or right for larger screens */}
        <div className="w-full lg:w-[40%] xl:w-1/2 flex justify-center mb-4 lg:mb-0">
          <Image
            src={imageSrc}
            alt="Product Image"
            width={500}
            height={300}
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-[60%] xl:w-1/2 text-left px-0 md:px-6 lg:px-6 xl:px-6">
          {/* Title for large screens */}
          <h1 className="hidden lg:block text-xl sm:text-2xl md:text-3xl font-bold lg:text-3xl text-center lg:text-left xl:text-4xl mb-4 lg:mb-[4%] xl:mb-[10%] 2xl:mb-[7%]">
            {title}
          </h1>
          <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-lg font-normal mb-4 lg:mb-[4%] xl:mb-[10%] 2xl:mb-[7%]">
            {description}
          </p>

          {/* Bullet Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {bulletPoints.map((point, index) => (
              <div key={index} className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg font-medium">
                • {point}
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mb-4 lg:mb-[4%] xl:mb-[10%] 2xl:mb-[7%] text-left">
            <Button
              variant={isMobile ? 'fill' : 'default'}
              label={buttonLabel}
              onClick={onButtonClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
