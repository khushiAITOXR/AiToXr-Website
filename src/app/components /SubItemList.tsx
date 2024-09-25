'use client';

import React from 'react';
import { FiChevronRight } from 'react-icons/fi'; // Use this for the side angle icon

type SubItemListProps = {
  onClick?: () => void;
  heading: string;
  description: string;
};

const SubItemList: React.FC<SubItemListProps> = ({ onClick, heading, description }) => {
  return (
    <div
      className="w-[23.625rem] h-[5rem] border-[1.5px] border-[#E45D25] rounded-[0.625rem] p-2 px-4 flex justify-between items-center cursor-pointer"
      onClick={onClick}
    >
      <div className="text-left">
        {/* Heading with gradient */}
        <h3
          className="text-[1.25rem] font-bold mb-1"
          style={{
            background: 'linear-gradient(270deg, #F58E1E 33.76%, #E45D25 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {heading}
        </h3>
        {/* Description */}
        <p className="text-white text-[1rem] font-normal leading-[0.875rem]">
          {description}
        </p>
      </div>
      
      {/* Side Angle Icon */}
      <div className="text-[#E45D25]">
        <FiChevronRight size={24} />
      </div>
    </div>
  );
};

export default SubItemList;
