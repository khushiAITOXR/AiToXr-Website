'use client';

import React from 'react';
import Image from 'next/image';

export const AboutCompany: React.FC = () => {
  const imageSrc = '/company-1.png';
//   const title = "About Company";
  const description = `Our mission is to deliver creative and innovative solutions that help businesses succeed in the fast-paced digital world. With over 10 years of experience, we have designed and developed award-winning platforms that have generated billions in revenue and have been trusted by millions of users, both startups and enterprises alike. Our mission is to deliver creative and innovative solutions that help businesses succeed in the fast-paced digital world. With over 10 years of experience, we have designed and developed award-winning platforms that have generated billions in revenue and have been trusted by millions of users, both startups and enterprises alike. With over 10 years of experience, we have designed and developed award-winning platforms that have generated billions in revenue.`;

  return (
    <section className="py-20 flex flex-col items-center justify-center">
      <div className="flex flex-col xl:flex-row items-center justify-between w-[70%] mx-auto gap-16 m-auto">
        {/* Image Section */}
        <div className="w-full xl:w-[40%] flex justify-center">
          <Image
            src={imageSrc}
            alt="Company Image"
            width={500}
            height={300}
            className=" object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full xl:w-[60%] flex flex-col justify-center items-center">
          <h1 className="text-[28px] sm:text-[28px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[48px] font-bold mb-6 text-center xl:text-left">
            About <span className="text-[#E45D25]">Company</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-[18px] 2xl:text-[18px] font-normal text-justify">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};


export const WeAreRemote: React.FC = () => {
    // Image path and text variables
    // const title = "We are fully remote";
    const description = `Our team works in a remote environment. Our mission is to deliver creative and innovative solutions that help businesses succeed in the fast-paced digital world.`;
    const imageSrc1 = '/company-2.png';
    const starIcon = '/star-icon.svg';
  
    return (
      <section className="py-20 flex flex-col items-center justify-center">
        <div className="w-[70%] mx-auto">
          {/* Title Section */}
          <h1 className="text-[28px] sm:text-[28px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[48px]  font-bold mb-4 text-left">
            We are fully&nbsp;<span className="text-[#E45D25]">remote</span>
            <span className=" relative bottom-4">
              <Image
                src={starIcon}
                alt="Star Icon"
                width={24}
                height={24}
                className="inline-block"
              />
            </span>
          </h1>
  
          {/* Description */}
          <p className="w-[59%] text-sm sm:text-base md:text-lg lg:text-lg xl:text-[18px] 2xl:text-[18px] font-normal text-left">
            {description}
          </p>
  
          {/* Image Section */}
          <div className="flex justify-end">
            <Image
              src={imageSrc1}
              alt="Remote Team Image"
              width={700}
              height={400}
              className=" object-cover relative bottom-20"
            />
          </div>
        </div>
      </section>
    );
  };

  export const Deliver: React.FC = () => {
    // Image path and text variables
    // const title = "We are fully remote";
    const description = `Our team works in a remote environment. Our mission is to deliver creative and innovative solutions that help businesses succeed in the fast-paced digital world.`;
    const imageSrc1 = '/company-3.png';
  
    return (
      <section className="py-20 w-[82%] m-auto">
        <div className="mx-auto">

          <h1 className="text-[28px] sm:text-[28px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[48px]  font-bold mb-4 text-right ml-auto">
          Delivering Projects On-time&nbsp; <br></br>
          <span className="text-[#E45D25]">Everytime</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-[18px] 2xl:text-[18px] font-normal text-right ml-auto w-[55%]">
            {description}
          </p>


            {/* Image Section */}
            <Image
              src={imageSrc1}
              alt="Remote Team Image"
              width={700}
              height={400}
              className=" object-cover relative bottom-32"
            />
        </div>
      </section>
    );
  };