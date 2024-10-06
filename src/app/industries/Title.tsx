'use client';

import React from 'react';
import Image from 'next/image';

type IndustrySectionProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};

const Title: React.FC<IndustrySectionProps> = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <section className="m-0 p-0 w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full bg-[#E45D25]">
        {/* Image Section */}
        <div className="w-full lg:w-[40%]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[60%] p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-lg lg:text-xl text-white font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Title;
