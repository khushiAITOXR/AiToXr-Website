import React from 'react';
import Image from 'next/image'; // Using Next.js Image component for responsive images

const HowWeWork: React.FC = () => {
  return (
    <section className="p-8 bg-[rgba(243,243,243,1)] w-[100%]">
      {/* Section Title */}
      <h2 className="text-center text-[#1E1E1E] font-bold text-5xl mb-16">
        How we <span className="text-[rgba(228,93,37,1)]">Work?</span>
      </h2>

      {/* Responsive Image */}
      <div className="flex justify-center mb-8 w-[100%] m-auto">
        <Image
          src="/flow.svg" // Make sure the image path is correct
          alt="Work Flow"
          width={800} // You can set a default width for large screens
          height={600} // Set a default height, keeping aspect ratio
          className="w-full h-auto max-w-[82%]" // Ensures responsiveness
        />
      </div>
    </section>
  );
};

export default HowWeWork;
