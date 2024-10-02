'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../components /Button'; // Assuming you already have your custom Button component

const Banner: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <section className='bg-gradient-to-r from-orange-400 to-orange-600 '>
        <div className="w-[82%] flex flex-col lg:flex-row items-center justify-between  py-16 m-auto">
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
        <div className="w-full lg:w-[50%] text-left mb-8 lg:mb-0">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-4">
            Didn’t find your product? <br />
            Want something new...
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-white mb-6">
            Don’t worry! We are here to help you. Let’s connect to create and
            customize the product for you.
            </p>

            {/* Button */}
            <div className="text-left">
            <Button variant={'white'} label="Let's Connect" onClick={handleButtonClick} style={{color:'white', borderColor:'white'}}/>
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
