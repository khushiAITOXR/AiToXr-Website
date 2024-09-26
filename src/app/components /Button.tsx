'use client'; // This marks the component as a Client Component

import React, { useState } from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  variant?: 'default' | 'fill'; // 'default' as outline, 'fill' as the solid variant
};

const Button: React.FC<ButtonProps> = ({ label, onClick, style, variant = 'default' }) => {
  const [isHovered, setIsHovered] = useState(false);
  // Base styles applied to all variants
  const baseStyle =
    'px-6 py-2 text-base rounded-lg font-medium transition-all duration-300 relative overflow-hidden';

  // Classes for the default variant (outline with gradient text, border color, and transparent background)
  const defaultClasses = `
    text-transparent 
    bg-clip-text 
    bg-gradient-to-r from-gr-start to-gr-end 
    bg-transparent
  `.replace(/\s+/g, ' ').trim();

  // Classes for the fill variant (solid gradient background and white text)
  const fillClasses = `
    border-none 
    text-white 
    bg-gradient-to-r from-gr-start to-gr-end 
  `.replace(/\s+/g, ' ').trim();

  // Inline styles for hover effect (applied only in the default variant)
  const inlineHoverStyle = isHovered && variant === 'default'
    ? {
        background: 'linear-gradient(to right, #E45D25, #F58E1E)', // Full gradient background when hovered
        color: '#FFFFFF',
        boxShadow: 'inset 0 0 0 2px transparent', // Remove the "border" effect on hover
        transition: 'all 0.3s ease-in-out', // Smooth transition
      }
    : {
        boxShadow: 'inset 0 0 0 2px #E45D25', // Simulate the border using inset box-shadow
        transition: 'all 0.3s ease-in-out', // Smooth transition
      };

  // Determine which classes to apply based on the variant prop
  const variantClasses = variant === 'default' ? defaultClasses : fillClasses;

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
      {label}
    </button>
  );
};

export default Button;
