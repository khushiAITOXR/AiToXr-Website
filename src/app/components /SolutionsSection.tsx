'use client';

import React, { forwardRef } from 'react';
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
};

const SolutionsSection = forwardRef<HTMLElement, SolutionsSectionProps>(
  ({ sectionTitle, highlightedTitlePart, items, sectionStyle = {} }, ref) => {
  return (
    <section ref={ref} style={sectionStyle} className="py-16 m-auto bg-[#F3F3F3] w-full">
      {/* Section Heading */}
      <h2 className="text-5xl font-bold text-center mb-12">
        {sectionTitle.split(highlightedTitlePart)[0]}
        <span className="text-[#E45D25]"> {highlightedTitlePart} </span>
        {sectionTitle.split(highlightedTitlePart)[1]}
      </h2>

      {/* Solutions List */}
      <div className="space-y-10 m-auto w-full">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-start gap-[5%]">
            {/* Image */}
            <div>
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                width={100}
                height={100}
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-[#E45D25] text-[1.6875rem] font-medium leading-[167%]">
                {item.heading}
              </h3>
              <p className="text-[#1E1E1E] text-[1.125rem] font-normal leading-[1.87875rem]">
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
