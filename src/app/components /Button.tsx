// 'use client'; // This marks the component as a Client Component

// import React from 'react';

// type ButtonProps = {
//   label: string;
//   onClick?: () => void;
//   style?: React.CSSProperties;
//   variant?: 'default' | 'outline'; // 'default' as outline, 'outline' as alternative style
// };

// const Button: React.FC<ButtonProps> = ({ label, onClick, style, variant = 'default' }) => {
//   // Base styles applied to all variants
//   const baseStyle = "px-6 py-2 text-base rounded-lg font-medium transition-all duration-300 border-2";

//   // Classes for the default variant (outline with gradient text)
//   const defaultClasses = `
//     border-[#E45D25] 
//     text-transparent 
//     bg-clip-text 
//     bg-gradient-to-r from-gr-start to-gr-end 
//     bg-transparent 
//     hover:bg-gradient-to-r 
//     hover:from-gr-start 
//     hover:to-gr-end 
//     hover:text-white
//   `.replace(/\s+/g, ' ').trim();

//   // Classes for the outline variant (solid text color with gradient background on hover)
//   const outlineClasses = `
//     border-[#E45D25] 
//     text-[#171717] 
//     bg-transparent 
//     hover:bg-gradient-to-r 
//     hover:from-gr-start 
//     hover:to-gr-end 
//     hover:text-white
//   `.replace(/\s+/g, ' ').trim();

//   // Determine which classes to apply based on the variant prop
//   const variantClasses = variant === 'default' ? defaultClasses : outlineClasses;

//   // Combine base styles with variant-specific styles
//   const classes = `${baseStyle} ${variantClasses}`;

//   return (
//     <button
//       className={classes}
//       onClick={onClick}
//       style={style}
//     >
//       {label}
//     </button>
//   );
// };

// export default Button;


'use client'; // This marks the component as a Client Component

import React from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  variant?: 'default' | 'fill'; // 'default' as outline, 'fill' as the solid variant
};

const Button: React.FC<ButtonProps> = ({ label, onClick, style, variant = 'default' }) => {
  // Base styles applied to all variants
  const baseStyle = "px-6 py-2 text-base rounded-lg font-medium transition-all duration-300 border-2 overflow-hidden";

  // Classes for the default variant (outline with gradient text, border color, and transparent background)
  const defaultClasses = `
    border-[#E45D25] 
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

  // Determine which classes to apply based on the variant prop
  const variantClasses = variant === 'default' ? defaultClasses : fillClasses;

  // Combine base styles with variant-specific styles
  const classes = `${baseStyle} ${variantClasses}`;

  return (
    <button
      className={classes}
      onClick={onClick}
      style={style}
    >
      {label}
    </button>
  );
};

export default Button;
