'use client';

import React from 'react';

type ProvideProps = {
  title: string;
  highlight: string;
  items: {
    contentTitle: string;
    description: string;
  }[];
};

const Provide: React.FC<ProvideProps> = ({ title, highlight, items }) => {
  return (
    <section className="w-[82%] m-auto py-12 px-4 lg:px-8">
      {/* Section Title */}
      <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl leading-[30px] mb-12">
        {title.split(' ').map((word, index) =>
          word === highlight ? (
            <span key={index} className="text-[#E45D25]">
              {word}{' '}
            </span>
          ) : (
            `${word} `
          )
        )}
      </h2>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white transition-all"
          >
            {/* Content Title */}
            <h3 className="font-poppins text-[22px] font-medium leading-[30px] text-left mb-2">
              {item.contentTitle}
            </h3>
            {/* Underline Animation */}
            <div className="w-1/2 group-hover:w-full h-[4px] bg-[#E45D25] transition-all duration-300 mb-4"></div>
            {/* Description */}
            <p className="text-left text-base text-gray-700 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Provide;
