import React, { useState } from 'react';
import Image from 'next/image';

type ContactCardProps = {
  style?: React.CSSProperties;
  className?: string;
  image: string; // Path to the normal image
  hoverImage?: string; // Path to the white-filled image (optional)
  heading: string;
  contactDetail: {
    mainAddress: string;
    additional: string;
    phoneNumber: string;
  };
  hoverEffect?: boolean; // Optional hover effect prop
  imageWidth?: number; // Optional image width prop
  imageHeight?: number; // Optional image height prop
};

const ContactCard: React.FC<ContactCardProps> = ({
  style,
  className,
  image,
  hoverImage, // Optional prop for white-filled image
  heading,
  contactDetail,
  hoverEffect = false, // Default to false if not provided
  imageWidth = 240, // Default image width
  imageHeight = 80, // Default image height
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${className} flex flex-col justify-between items-end p-4 bg-white rounded-md border border-[#E45D25] transition-all duration-300 ${
        hoverEffect && isHovered ? 'bg-gradient-to-r from-[#E45D25] to-[#F58E1E]' : ''
      }`}
      style={{ ...style }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image and Contact Details Section */}
      <div className="w-full flex justify-between items-end">
        {/* Image */}
        <div className="h-full flex items-end">
          <Image
            src={isHovered && hoverEffect && hoverImage ? hoverImage : image} // Use fallback to "image" if hoverImage is undefined
            alt="Contact"
            width={imageWidth} // Use imageWidth prop
            height={imageHeight} // Use imageHeight prop
            className="object-contain transition-all duration-100"
          />
        </div>
        {/* Heading and Contact Details */}
        <div
          className={`flex flex-col items-end transition-all duration-100 ${
            hoverEffect && isHovered ? 'text-white' : 'text-[#1E1E1E]'
          }`}
        >
          {/* Heading */}
          <h3
            className={`text-right text-[2.25rem] font-[700] bg-clip-text ${
              hoverEffect && isHovered
                ? 'bg-transparent text-white'
                : 'text-transparent bg-gradient-to-r from-[#E45D25] to-[#F58E1E]'
            } transition-all duration-100`}
          >
            {heading}
          </h3>
          {/* Contact Details */}
          <div className="text-lg font-normal text-right">
            <p>{contactDetail.mainAddress}</p>
            <p>{contactDetail.additional}</p>
            <p>{contactDetail.phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
