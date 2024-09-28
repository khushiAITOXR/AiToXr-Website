'use client';

import React, { forwardRef } from 'react';
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
  return (
    <section ref={ref} className="py-16 bg-[#F3F3F3] w-full">
      {/* Title */}
      <h2 className="text-center text-5xl font-bold leading-[145%] mb-8">
        {title.split(highlightedTitlePart)[0]}
        <span className="text-[#E45D25]"> {highlightedTitlePart} </span>
        {title.split(highlightedTitlePart)[1]}
      </h2>

      {/* Description */}
      <p className="text-center text-[1.125rem] font-normal leading-[167%] mx-auto w-[82%] mb-24">
        {description}
      </p>

      {/* Icons with labels */}
      <div className="flex justify-center gap-[5%] w-[82%] m-auto">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Circle with gradient and image */}
            <div
              className="flex items-center justify-center bg-gradient-to-b from-[#E45D25] to-[#F58E1E] rounded-full"
              style={{ width: '12rem', height: '12rem' }}
            >
              <Image src={item.imageSrc} alt={item.label} width={116} height={116} />
            </div>
            {/* Label */}
            <h3 className="text-center text-[1.5rem] font-medium leading-[167%] mt-4" style={{ width: '12.5rem' }}>
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
