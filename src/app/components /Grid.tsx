import React from 'react';
import Image from 'next/image'; // Using Next.js Image for optimized loading

type GridProps = {
  rows: number;
  columns: number;
  items: {
    src: string; // Image source URL
    alt: string; // Alt text for the image
    label?: string; // Optional label for the image
    imageSize?: number; // Optional size for the image
  }[];
};

const Grid: React.FC<GridProps> = ({ rows, columns, items }) => {
  // Create grid styles dynamically
  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    border: '1px solid #9A9A9A', // Outer border of the entire grid
    gap: '0', // Ensure no space between grid items
  };

  return (
    <div className="grid gap-4" style={gridStyle}>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center p-4 border border-[#9A9A9A]"
        >
          {/* Image Section */}
          <Image
            src={item.src}
            alt={item.alt}
            width={item.imageSize || 60} // Default size to 100px if not provided
            height={item.imageSize || 60}
            className="mb-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />

          {/* Label Section */}
          {item.label && (
            <p className="text-[#000] text-center text-[1.125rem] font-normal opacity-60">
              {item.label}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Grid;
