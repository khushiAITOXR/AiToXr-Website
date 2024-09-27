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
      className={`${className} flex flex-col justify-between items-end px-4 py-4 rounded-md border border-[#E45D25] transition-all duration-300 relative overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...style,
        backgroundColor: '#ffffff', // Always white unless hovered
        backgroundImage: 'linear-gradient(to right, #E45D25, #F58E1E)', // Gradient for the hover effect
        backgroundSize: isHovered ? '100% 100%' : '0% 100%', // Start with no gradient and expand on hover
        backgroundPosition: 'left center', // Start from the left
        backgroundRepeat: 'no-repeat', // Prevent background repetition
        transition: 'background-size 0.5s ease-out', // Smooth transition for background size
      }}
    >
      {/* Image and Contact Details Section */}
      <div className="w-full flex justify-between items-end">
        {/* Image */}
        <div className="h-full flex items-end">
          <Image
            src={isHovered && hoverEffect && hoverImage ? hoverImage : image}
            alt="Contact"
            width={imageWidth}
            height={imageHeight}
            className="object-contain transition-all duration-100"
          />
        </div>
        {/* Heading and Contact Details */}
        <div className={`flex flex-col items-end transition-all duration-100 ${hoverEffect && isHovered ? 'text-white' : 'text-[#1E1E1E]'}`} 
        style={{
          transitionDelay: isHovered ? '0.2s' : '0s', // Delay the text color change slightly
        }}
        >
          {/* Heading */}
          <h3
            className={`text-right text-[2.25rem] font-[700] ${
              isHovered
                ? 'text-white' // On hover, transition to white
                : 'bg-gradient-to-r from-[#E45D25] to-[#F58E1E] text-transparent bg-clip-text' // Gradient text before hover
            } transition-all duration-300`}
            style={{
              transitionDelay: isHovered ? '0.05s' : '0s', // Delay the white color change on hover
            }}
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
