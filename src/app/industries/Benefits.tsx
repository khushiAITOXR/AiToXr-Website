'use client';

import React from 'react';
import Image from 'next/image';

type BenefitProps = {
  title: string;
  highlight: string;
  items?: {
    imageSrc: string;
    imageAlt: string;
  }[];
};

const Benefit: React.FC<BenefitProps> = ({ title, highlight, items = [] }) => {
  return (
    <section className="w-full mx-auto py-16 min-h-[300px] bg-[#F3F3F3]">
      {/* Title */}
      <h2 className="text-center text-4xl font-bold mb-10">
        {title.split(highlight)[0]}
        <span className="text-[#E45D25]">{highlight}</span>
        {title.split(highlight)[1]}
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 m-auto w-[82%] ">
        {(items.length > 0 ? items : Array(3).fill({ imageSrc: '', imageAlt: '' })).map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center border-[1px] border-[#E45D25] rounded-lg p-8 h-[320px] w-[320px] mx-auto"
          >
            {item.imageSrc ? (
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                width={150}
                height={150}
                className="object-contain"
              />
            ) : (
              <div className="text-[#E45D25] text-lg font-medium">
                Placeholder
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefit;
