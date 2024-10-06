// 'use client';

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Button from '../components /Button'; // Assuming you already have your custom Button component
// import { AiOutlineClose } from 'react-icons/ai';

// const Banner: React.FC<{ onClose: () => void }> = ({onClose}) => {
//   const [isVisible, setIsVisible] = useState(true);
//   const handleButtonClick = () => {
//     console.log('Button clicked');
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true); // Show banner after 1 second
//     }, 1000);
//     return () => clearTimeout(timer); // Clear timeout on component unmount
//   }, []);

//   const handleCloseBanner = () => {
//     setIsVisible(false); // Hide the banner
//     onClose(); // Trigger the callback to inform parent component
//   };

//   if (!isVisible) return null; // If banner is not visible, return null

//   return (
//     <section
//       className={`hidden lg:fixed left-0 right-0 bottom-0 bg-gradient-to-r from-gr-start to-gr-end transition-transform duration-700 ease-in-out ${
//         isVisible ? 'translate-y-0' : 'translate-y-full'
//       }`}
//       style={{ zIndex: 1000 }}
//     >
//       {/* Close Icon */}
//       <div
//         className="absolute right-[15px] mt-[15px] cursor-pointer text-white"
//         onClick={handleCloseBanner}
//       >
//         <AiOutlineClose size={24} style={{alignItems:'flex-end'}}/>
//       </div>
//         <div className="w-[82%] flex flex-col lg:flex-row items-center justify-between py-4 m-auto">
//         {/* Image */}
//         <div className="w-full mb-8 lg:mb-0 lg:hidden lg:w-[50%] flex justify-center">
//             <Image
//             src="/product.png"
//             alt="Banner Image"
//             width={400}
//             height={300}
//             className="object-contain"
//             />
//         </div>
//         {/* Text Content */}
//         <div className="w-full lg:w-[50%] text-left mb-8 lg:mb-0">
//             {/* Heading */}
//             <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-4">
//             Didn’t find your product? <br />
//             Want something new...
//             </h1>

//             {/* Description */}
//             <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-white mb-6">
//             Don’t worry! We are here to help you. Let’s connect to create and
//             customize the product for you.
//             </p>

//             {/* Button */}
//             <div className="text-left">
//             <Button variant={'white'} label="Let's Connect" onClick={handleButtonClick} style={{color:'white', borderColor:'white'}}/>
//             </div>
//         </div>

//         {/* Image */}
//         <div className="w-full hidden lg:flex lg:w-[50%] justify-center">
//             <Image
//             src="/product.png"
//             alt="Banner Image"
//             width={400}
//             height={300}
//             className="object-contain"
//             />
//         </div>
//         </div>
//     </section>
//   );
// };

// export default Banner;


'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '../components /Button'; // Assuming you already have your custom Button component
import { AiOutlineClose } from 'react-icons/ai';

const Banner: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true); // Set the initial state to true

  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Show banner after 1 second
    }, 1000);
    return () => clearTimeout(timer); // Clear timeout on component unmount
  }, []);

  const handleCloseBanner = () => {
    setIsVisible(false); // Hide the banner
    onClose(); // Trigger the callback to inform parent component
  };

  if (!isVisible) return null; // If banner is not visible, return null

  return (
    <section
      className=' lg:fixed left-0 lg:h-[48vh] py-4 right-0 bottom-0 bg-gradient-to-r from-gr-start to-gr-end transition-transform duration-700 ease-in-out mb-48 lg:mb-0'
      style={{ zIndex: 1000 }}
    >
      {/* Close Icon */}
      <div
        className="absolute right-[15px] mt-[15px] cursor-pointer text-white"
        onClick={handleCloseBanner}
      >
        <AiOutlineClose size={24} style={{ alignItems: 'flex-end' }} />
      </div>
      <div className="w-[82%] flex flex-col lg:flex-row items-center justify-between m-auto">
        {/* Image */}
        <div className="w-full mb-8 lg:mb-0 lg:hidden lg:w-[50%] flex justify-center">
          <Image
            src="/product.png"
            alt="Banner Image"
            width={400}
            height={300}
            className="object-contain"
          />
        </div>
        {/* Text Content */}
        <div className="w-full lg:w-[50%] text-left mb-1 lg:mb-0">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">
            Didn’t find your product? <br />
            Want something new...
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-white mb-2">
            Don’t worry! We are here to help you. Let’s connect to create and
            customize the product for you.
          </p>

          {/* Button */}
          <div className="text-left">
            <Button
              variant={'white'}
              label="Let's Connect"
              onClick={handleButtonClick}
              style={{ color: 'white', borderColor: 'white' }}
            />
          </div>
        </div>

        {/* Image */}
        <div className="w-full hidden lg:flex lg:w-[50%] justify-center">
          <Image
            src="/product.png"
            alt="Banner Image"
            width={400}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
