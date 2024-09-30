'use client';

import React, { forwardRef } from 'react';

type ListItem = {
  id: number;
  title: string;
  content: string;
};

type AboutSectionProps = {
  listItems: ListItem[];
  paragraphText: string;
  backgroundColor?: string;
  onSectionChange: (id: number) => void;
};

const AboutSection = forwardRef<HTMLElement, AboutSectionProps>(
  ({ listItems, paragraphText, backgroundColor = '#FFFFFF', onSectionChange }, ref) => {
    const handleItemClick = (item: ListItem) => {
      onSectionChange(item.id); // Trigger section change without updating right-side content
    };

  return (
    <section ref={ref} className={`py-8 lg:py-16 w-full`} style={{ backgroundColor }}>
      <div className="flex flex-col lg:flex-row mx-auto gap-12 w-[82%]">
        {/* Left Column - List of items */}
        <div className="hidden lg:flex  flex-col w-[35%]">
          {listItems.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer text-lg font-medium opacity-60 py-4 px-4 hover:bg-[#EDEDED]"
              onClick={() => handleItemClick(item)}
              style={{
                height: '54px',
                paddingLeft: '1.35rem',
                borderBottom: '1px solid rgba(154, 154, 154, 1)',
                width: '24.375rem',
              }}
            >
              {item.title}
            </div>
          ))}
        </div>

        {/* Right Column - Content - Constant content for this section */}
        <div className="flex flex-col lg:w-[65%] w-full items-center lg:items-start">
          {/* Fixed Content for the Section */}
          <div className="mb-4 lg:mb-8 mx-auto">
            <h1 className="text-[#1E1E1E] text-center font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              {listItems[0].title.split(' ').map((word, index, array) => (
                <span key={index} style={{ color: index === array.length - 1 ? '#E45D25' : '#1E1E1E' }}>
                  {word}{' '}
                </span>
              ))}
            </h1>
          </div>

          {/* Paragraph - Constant content */}
          <div>
            <p className="text-justify text-[#1E1E1E] text-[1.125rem] font-normal leading-[145%]">
              {paragraphText.split('\n').map((text, index) => (
                <React.Fragment key={index}>
                  {text}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
