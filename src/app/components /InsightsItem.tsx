import React from 'react';
import Image from 'next/image';

type InsightsItemsProps = {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
};

const InsightsItems: React.FC<InsightsItemsProps> = ({
  image,
  title,
  description,
  onClick,
}) => {
  return (
    <div
      className="flex items-start px-2 py-5 border-b border-[#9A9A9A] cursor-pointer"
      onClick={onClick}
    >
      {/* Image Section */}
      <div
        className="w-[16.46144rem] h-[8.1875rem] rounded-[0.63rem] overflow-hidden flex-shrink-0"
      >
        <Image
          src={image}
          alt={title}
          width={263}
          height={131}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="ml-6">
        {/* Title */}
        <h2 className="text-[#1E1E1E] text-[1.875rem] font-medium leading-[2.5rem] capitalize w-[47.47819rem] text-left">
          {title}
        </h2>

        {/* Description */}
        <p className="text-[#1E1E1E] text-[1.125rem] font-normal leading-[1.5rem] w-[47.47819rem] h-[5.6875rem] text-left mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InsightsItems;
