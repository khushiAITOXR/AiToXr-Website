// 'use client'; // This marks the component as a Client Component

// import React, { useState } from 'react';

// type ButtonProps = {
//   label: string;
//   onClick?: () => void;
//   style?: React.CSSProperties;
//   variant?: 'default' | 'fill'; // 'default' as outline, 'fill' as the solid variant
// };

// const Button: React.FC<ButtonProps> = ({ label, onClick, style, variant = 'default' }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   // Base styles applied to all variants
//   const baseStyle =
//     'px-6 py-2 text-base rounded-lg font-medium transition-all duration-300 relative overflow-hidden';

//   // Classes for the default variant (outline with gradient text, border color, and transparent background)
//   const defaultClasses = `
//     text-transparent 
//     bg-clip-text 
//     bg-gradient-to-r from-gr-start to-gr-end 
//     bg-transparent
//   `.replace(/\s+/g, ' ').trim();

//   // Classes for the fill variant (solid gradient background and white text)
//   const fillClasses = `
//     border-none 
//     text-white 
//     bg-gradient-to-r from-gr-start to-gr-end 
//   `.replace(/\s+/g, ' ').trim();

//   const inlineHoverStyle =
//     variant === 'default'
//       ? isHovered
//         ? {
//             background: 'linear-gradient(to right, #E45D25, #F58E1E)', // Full gradient background when hovered
//             color: '#FFFFFF',
//             boxShadow: 'inset 0 0 0 2px transparent',
//             transition: 'all 0.3s ease-in-out',
//           }
//         : {
//             boxShadow: 'inset 0 0 0 2px #E45D25', 
//             transition: 'all 0.3s ease-in-out', 
//           }
//       : {
//           boxShadow: 'none', // Remove box-shadow if the variant is "fill"
//         };

//   // Determine which classes to apply based on the variant prop
//   const variantClasses = variant === 'default' ? defaultClasses : fillClasses;

//   // Combine base styles with variant-specific styles
//   const classes = `${baseStyle} ${variantClasses}`;

//   return (
//     <button
//       className={classes}
//       onClick={onClick}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{ ...style, ...inlineHoverStyle }}
//     >
//       {label}
//     </button>
//   );
// };

// export default Button;

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

  // Hover effect for default variant
  const inlineHoverStyle =
    variant === 'default'
      ? {
          color: isHovered ? '#FFFFFF' : '',
          backgroundImage: isHovered ? 'none' : 'linear-gradient(to right, #E45D25, #F58E1E)',
          transition: 'all 0.3s ease-in-out',
          borderColor: isHovered ? 'transparent' : '#E45D25',
        }
      : {
          boxShadow: 'none', // No extra shadow for fill variant
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
