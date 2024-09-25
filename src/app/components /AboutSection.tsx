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
    <section ref={ref} className={`py-16`} style={{ backgroundColor }}>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-12">
        {/* Left Column - List of items */}
        <div className="flex flex-col w-full lg:w-[30%] pr-8">
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
        <div className="flex flex-col w-full lg:w-[70%]">
          {/* Fixed Content for the Section */}
          <div className="mb-8">
            <h1 className="text-[#1E1E1E] font-bold text-[3rem] leading-[145%]">
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
