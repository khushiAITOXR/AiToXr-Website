'use client';

import React, { forwardRef, useEffect, useState } from 'react';
import Image from 'next/image';

type WhyChooseUsItem = {
  imageSrc: string;
  label: string;
};

type WhyChooseUsProps = {
  title: string;
  highlightedTitlePart: string;
  description: string;
  items: WhyChooseUsItem[];
};

const WhyChooseUs = forwardRef<HTMLElement, WhyChooseUsProps>(
  ({ title, highlightedTitlePart, description, items }, ref) => {

    const [imageSize, setImageSize] = useState({ width: 116, height: 116 });

    const updateImageSize = () => {
      const screenWidth = window.innerWidth;

      // If screen width is less than 1024px, set image size to 75x75px
      if (screenWidth < 1024) {
        setImageSize({ width: 64, height: 64 });
      } else {
        setImageSize({ width: 116, height: 116 });
      }
    };

    // Effect to update size on screen resize
    useEffect(() => {
      updateImageSize(); // Set size on initial load
      window.addEventListener('resize', updateImageSize); // Update size on resize

      // Cleanup listener on unmount
      return () => window.removeEventListener('resize', updateImageSize);
    }, []);
  return (
    <section ref={ref} className="py-8 lg:py-16 bg-[#F3F3F3] w-full">
      {/* Title */}
      <h2 className="text-center font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        {title.split(highlightedTitlePart)[0]}
        <span className="text-[#E45D25]"> {highlightedTitlePart} </span>
        {title.split(highlightedTitlePart)[1]}
      </h2>

      {/* Description */}
      <p className="text-center text-base sm:text-lg md:text-xl lg:text-[1.125rem] font-normal mx-auto w-[82%] mb-12">
        {description}
      </p>

      {/* Icons with labels */}
      <div className="flex flex-wrap lg:flex-nowrap  justify-center gap-y-8 gap-[5%] w-[90%] lg:w-[82%] m-auto">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Circle with gradient and image */}
            <div
              className="flex items-center justify-center bg-gradient-to-b from-[#E45D25] to-[#F58E1E] rounded-full p-4"
            >
              <Image src={item.imageSrc} alt={item.label} width={imageSize.width}
                height={imageSize.height}/>
            </div>
            {/* Label */}
            <h3 className="text-center text-[14px] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-medium mt-4">
              {item.label}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
});

WhyChooseUs.displayName = 'WhyChooseUs';

export default WhyChooseUs;
