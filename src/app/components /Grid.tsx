
// import React, { useState } from 'react';
// import Image from 'next/image'; // Using Next.js Image for optimized loading

// type GridProps = {
//   items: {
//     src: string; // Image source URL
//     alt: string; // Alt text for the image
//     label?: string; // Optional label for the image
//     imageSize?: number; // Optional size for the image
//   }[];
//   defaultOpacity?: number; // New prop to set the default opacity of the images
//   variant?: 'primary' | 'secondary'; // Variant prop to switch between primary and secondary layouts
// };

// const Grid: React.FC<GridProps> = ({ items, defaultOpacity = 0.3, variant = 'primary' }) => {
//   const [hoverIndex, setHoverIndex] = useState<number | null>(null); // State to track which grid item is hovered

//   // Choose the grid column layout based on the variant
//   const gridColumns = variant === 'primary'
//     ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'
//     : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'; // Secondary layout with 6 columns for large screens

//   return (
//     <div className={`grid ${gridColumns} gap-0`}>
//       {items.map((item, index) => (
//         <div
//           key={index}
//           className={`flex flex-col justify-center items-center p-4 border border-gray-400 border-collapse transition-all duration-300 ${
//             variant === 'secondary' && hoverIndex === index ? 'border-none bg-gradient-to-r from-gr-start to-gr-end text-white' : ''
//           }`}
//           onMouseEnter={() => setHoverIndex(index)} // Set the hover index
//           onMouseLeave={() => setHoverIndex(null)} // Reset the hover index
//         >
//           {/* Image Section */}
//           <Image
//             src={item.src}
//             alt={item.alt}
//             width={item.imageSize || 60} // Default size to 60px if not provided
//             height={item.imageSize || 60}
//             className={`mb-6 transition-all duration-300 ${
//               variant === 'primary'
//                 ? 'grayscale hover:grayscale-0' // Primary variant: black-and-white by default, color on hover
//                 : hoverIndex === index
//                 ? 'filter invert' // Secondary variant: invert to white on hover
//                 : ''
//             }`}
//           />

//           {/* Label Section */}
//           {item.label && (
//             <p
//               className={`text-center text-lg font-normal opacity-60 transition-all duration-500 ${
//                 variant === 'secondary' && hoverIndex === index ? 'text-white opacity-100' : ''
//               }`}
//             >
//               {item.label}
//             </p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Grid;

import React, { useState } from 'react';
import Image from 'next/image'; // Using Next.js Image for optimized loading

type GridProps = {
  items: {
    src: string; // Image source URL
    alt: string; // Alt text for the image
    label?: string; // Optional label for the image
    imageSize?: number; // Optional size for the image
  }[];
  defaultOpacity?: number; // New prop to set the default opacity of the images
  variant?: 'primary' | 'secondary'; // Variant prop to switch between primary and secondary layouts
  onClick?: (label: string) => void;
};

const Grid: React.FC<GridProps> = ({ items, variant = 'primary', onClick }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null); // State to track which grid item is hovered

  // Define grid columns to maintain 4 columns on mobile screens
  const gridColumns = variant === 'primary'
    ? 'grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'
    : 'grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6';

  return (
    <div className={`grid ${gridColumns} gap-0`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col justify-center items-center p-2 border border-gray-400 transition-all duration-300
          ${variant === 'secondary' && hoverIndex === index ? 'border-none bg-gradient-to-r from-gr-start to-gr-end text-white' : ''}`}
          style={{
            minWidth: '50px',  // Min width for smaller screens
            minHeight: '50px', // Min height to keep it square
            width: '100%',     // Ensure responsiveness
            height: '100%'     // Ensure square shape
          }}
          onMouseEnter={() => setHoverIndex(index)} // Set the hover index
          onMouseLeave={() => setHoverIndex(null)} // Reset the hover index
          onClick={() => variant === 'secondary' && onClick && item.label && onClick(item.label)} 
        >
          {/* Image Section */}
          <Image
            src={item.src}
            alt={item.alt}
            width={item.imageSize || 50} // Adjust the image size for small screens
            height={item.imageSize || 50}
            className={`mb-2 transition-all duration-300
              ${variant === 'primary'
                ? 'lg:grayscale lg:hover:grayscale-0' // Primary variant: black-and-white by default, color on hover
                : hoverIndex === index
                ? 'filter invert' // Secondary variant: invert to white on hover
                : ''}`}
          />

          {/* Label Section */}
          {item.label && (
            <p
              className={`text-center text-xs sm:text-sm md:text-base font-normal opacity-60 transition-all duration-500
              ${variant === 'secondary' && hoverIndex === index ? 'text-white opacity-100' : ''}`}
            >
              {item.label}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Grid;

