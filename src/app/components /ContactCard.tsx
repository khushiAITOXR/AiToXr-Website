import React from 'react';
import Image from 'next/image';

type ContactCardProps = {
  style?: React.CSSProperties;
  className?: string;
  image: string; // Path to the image (optimized using next/image)
  heading: string;
  contactDetail: {
    mainAddress: string;
    additional: string;
    phoneNumber: string;
  };
};

const ContactCard: React.FC<ContactCardProps> = ({
  style,
  className,
  image,
  heading,
  contactDetail
}) => {
  return (
    <div
      className={`${className} flex flex-col justify-between items-end p-4 bg-white rounded-md border border-[#E45D25]`}
      style={{ width: '38.8125rem', height: '10.25rem', ...style }}
    >
      {/* Image and Contact Details Section */}
      <div className="w-full flex justify-between items-end">
        {/* Image */}
        <div className="h-full w-2/4 flex items-end">
        <Image src={image} alt="Contact" width={240} height={80} className="object-contain" />
      </div>
        {/* Heading and Contact Details */}
        <div className="flex flex-col items-end">
          {/* Heading */}
          <h3 className="text-right text-transparent text-[2.25rem] font-[700] bg-clip-text bg-gradient-to-r from-[#E45D25] to-[#F58E1E]">
            {heading}
          </h3>
          {/* Contact Details */}
          <div className="text-right text-[#1E1E1E] text-lg font-normal">
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
