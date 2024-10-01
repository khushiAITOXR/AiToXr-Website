'use client';

import React, { forwardRef, useEffect, useState } from 'react';
import Image from 'next/image';

type SolutionItem = {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  description: string;
};

type SolutionsSectionProps = {
  sectionTitle: string;
  highlightedTitlePart: string; // Part of title to be highlighted
  items: SolutionItem[]; // Array of solution items
  sectionStyle?: React.CSSProperties; // Optional styles for the section
  className?: string;
};

const SolutionsSection = forwardRef<HTMLElement, SolutionsSectionProps>(
  ({ sectionTitle, highlightedTitlePart, items, sectionStyle = {}, className }, ref) => {

    const [imageSize, setImageSize] = useState({ width: 100, height: 100 });

    const updateImageSize = () => {
      const screenWidth = window.innerWidth;

      // If screen width is less than 1024px, set image size to 75x75px
      if (screenWidth < 1024) {
        setImageSize({ width: 75, height: 75 });
      } else {
        setImageSize({ width: 100, height: 100 });
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
    <section ref={ref} style={sectionStyle}  className={`lg:py-16 py-8 m-auto bg-[#F3F3F3] w-full ${className}`}>
      {/* Section Heading */}
      <h2 className="text-center font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        {sectionTitle.split(highlightedTitlePart)[0]}
        <span className="text-[#E45D25]"> {highlightedTitlePart} </span>
        {sectionTitle.split(highlightedTitlePart)[1]}
      </h2>

      {/* Solutions List */}
      <div className="space-y-10 m-auto w-full">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center lg:items-start gap-[15%] lg:gap-[5%]">
            {/* Image */}
            <div>
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                width={imageSize.width}
                height={imageSize.height}
                className="object-cover"
                style={{ minWidth: '75px', minHeight: '75px' }}
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-[#E45D25] text-[20px] sm:text-[20px] md:text-[20px] lg:text-[26px] font-normal">
                {item.heading}
              </h3>
              <p className="text-[#1E1E1E] text-[1.125rem] font-normal leading-[1.87875rem] hidden lg:block">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

SolutionsSection.displayName = 'SolutionsSection';


export default SolutionsSection;
