'use client'; // Ensure this is a Client Component

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type CardProps = {
  imageSrc: string;
  label: string;
  description: string;
  bgImage?: string;
  isActive?: boolean;
  disableHover?: boolean;
};

const Card: React.FC<CardProps> = ({ imageSrc, label, description, bgImage, isActive, disableHover }) => {
  // Define animation variants
  const containerVariants = {
    initial: { y: 0, boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' },
    hover: {
      y: disableHover ? 0 : -10, // Slide up by 10px
      boxShadow: disableHover ? '0px 0px 0px rgba(0, 0, 0, 0)' : '0px 10px 20px rgba(0, 0, 0, 0.2)', // Disable shadow if hover is disabled
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const frontVariants = {
    initial: { opacity: 1 },
    hover: { opacity: 0 },
  };

  const backVariants = {
    initial: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="relative w-[31%] h-[28.125rem] min-w-[340px] rounded-[1.875rem] overflow-hidden cursor-pointer"
      variants={containerVariants}
      initial="initial"
      animate={isActive ? 'hover' : 'initial'}
      whileHover={disableHover ? '' : 'hover'} 
    >
      {/* Front Side */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-gradient-to-b from-[#F58E1E] to-[#E45D25]"
        variants={frontVariants}
      >
        <Image
          src={imageSrc}
          alt={label}
          width={164}
          height={164}
          className="w-[10.25rem] h-[10.25rem] object-cover"
        />
        <h3 className="text-white text-center text-[1.875rem] font-bold mt-4">{label}</h3>
      </motion.div>

      {/* Back Side */}
      <motion.div
        className="absolute inset-0 p-8 flex flex-col justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        variants={backVariants}
      >
        {/* Blur Overlay */}
        <div
          className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-30 z-10"
          style={{
            borderRadius: '1.875rem',
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, #000000 100%)',
          }}
        ></div>

        {/* Content on Back Side */}
        <div className="relative z-20 text-white text-center">
          <h3 className="text-[1.875rem] font-bold">{label}</h3>
          <p className="text-justify text-base font-normal mt-4">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
