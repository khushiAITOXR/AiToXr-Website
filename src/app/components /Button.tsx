'use client';

import React, { useState } from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  variant?: 'default' | 'fill' | 'white'; // 'default' as outline, 'fill' as the solid variant
};

const Button: React.FC<ButtonProps> = ({ label, onClick, style, variant = 'default' }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Base styles applied to all variants
  const baseStyle =
    'relative px-6 py-2 text-base rounded-lg font-medium transition-all duration-300 overflow-hidden';

  // Classes for the default variant (outline with gradient text, border color, and transparent background)
  const defaultClasses = `
    text-transparent 
    bg-clip-text 
    bg-gradient-to-r from-gr-start to-gr-end 
    border-2 border-[#E45D25]
  `.replace(/\s+/g, ' ').trim();

  // Classes for the fill variant (solid gradient background and white text)
  const fillClasses = `
    text-white 
    bg-gradient-to-r from-gr-start to-gr-end
  `.replace(/\s+/g, ' ').trim();

  const whiteClasses = `
  text-white
  border-2 border-white 
  bg-transparent
`.replace(/\s+/g, ' ').trim();

  // Hover effect for default variant
  const inlineHoverStyle =
    variant === 'default'
      ? {
          color: isHovered ? '#FFFFFF' : '',
          backgroundImage: isHovered ? 'none' : 'linear-gradient(to right, #E45D25, #F58E1E)',
          transition: 'all 0.3s ease-in-out',
          borderColor: isHovered ? 'transparent' : '#E45D25',
        }
      : variant === 'white'
        ? {
            color: isHovered ? '#F58E1E' : '#FFFFFF',
            backgroundColor: 'transparent',
            borderColor: isHovered ? '#F58E1E' : 'white',
          }
      : {
          boxShadow: 'none', // No extra shadow for fill variant
        };

  // Determine which classes to apply based on the variant prop
  const variantClasses =
    variant === 'default'
      ? defaultClasses
      : variant === 'fill'
      ? fillClasses
      : whiteClasses;

  // Combine base styles with variant-specific styles
  const classes = `${baseStyle} ${variantClasses}`;

  return (
    <button
      className={classes}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ ...style, ...inlineHoverStyle }}
    >
      <span
        className={`relative z-10 ${
          variant === 'default'
            ? isHovered
              ? 'text-white'
              : 'bg-clip-text text-transparent bg-gradient-to-r from-gr-start to-gr-end' // Gradient text for default variant
            : 'text-white' // Always white for fill variant
        }`}
      >
        {label}
      </span>
      {/* Hover background effect */}
      <span
        className={`absolute inset-0 bg-gradient-to-r from-gr-start to-gr-end transition-opacity duration-300 ${
          isHovered ? 'animate-gradientMove' : 'opacity-0'
        }`}
        style={{
          zIndex: 0,
        }}
      ></span>
    </button>
  );
};

export default Button;
