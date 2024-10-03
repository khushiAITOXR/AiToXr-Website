// import React from 'react';
// import Card from '../components /Card';

// const WhoWeHelp: React.FC = () => {
//   return (
//     <section className="w-[100%] p-16 bg-white m-auto">
//       <h2 className="text-center text-[#1E1E1E] font-bold text-5xl mb-12">
//         Who Can We <span className="text-[#E45D25]">Help</span>
//       </h2>

//       <div className="w-[86%] flex flex-wrap justify-center gap-[2%] m-auto">
//         <Card
//           imageSrc="/rocket.png"
//           label="STARTUPS"
//           description="We provide agile and specialized IT talent, allowing startups to scale quickly and innovate without the overhead of full-time hires. Our customized solutions help you accelerate your growth with the right expertise."
//           bgImage="/intel.jpg" // Background image when hovered
//         />
//         <Card
//           imageSrc="/shop.png"
//           label="SMALL BUSINESS"
//           description="For small businesses looking to enhance their IT capabilities, we offer flexible manpower and tailored support to meet evolving needs. Our solutions drive efficiency, helping you compete effectively in the digital space."
//           bgImage="/street.jpg"
//         />
//         <Card
//           imageSrc="/building.png"
//           label="LARGE BUSINESS"
//           description="Large businesses can benefit from our strategic staffing and IT solutions, which are designed to manage complex, large-scale projects. We deliver long-term value and innovation to keep you ahead in today’s competitive landscape."
//           bgImage="/street.jpg"
//         />
//       </div>
//     </section>
//   );
// };

// export default WhoWeHelp;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components /Card';

const WhoWeHelp: React.FC = () => {
  const cards = [
    {
      imageSrc: '/rocket.png',
      label: 'STARTUPS',
      description:
        'We provide agile and specialized IT talent, allowing startups to scale quickly and innovate without the overhead of full-time hires. Our customized solutions help you accelerate your growth with the right expertise.',
      bgImage: '/intel.jpg',
    },
    {
      imageSrc: '/shop.png',
      label: 'SMALL BUSINESS',
      description:
        'For small businesses looking to enhance their IT capabilities, we offer flexible manpower and tailored support to meet evolving needs. Our solutions drive efficiency, helping you compete effectively in the digital space.',
      bgImage: '/street.jpg',
    },
    {
      imageSrc: '/building.png',
      label: 'LARGE BUSINESS',
      description:
        'Large businesses can benefit from our strategic staffing and IT solutions, which are designed to manage complex, large-scale projects. We deliver long-term value and innovation to keep you ahead in today’s competitive landscape.',
      bgImage: '/street.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Track active card index

  // Auto-slide logic for every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 4000); // 4 seconds interval
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [cards.length]);

  return (
    <section className="w-[100%] py-16 bg-white m-auto">
      <h2 className="text-center text-[#1E1E1E] font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        Who Can We <span className="text-[#E45D25]">Help</span>
      </h2>

      {/* Cards layout for screens >= 768px */}
      <div className="hidden md:flex w-[90%] flex-wrap justify-center gap-[2%] m-auto ">
        {cards.map((card, index) => (
          <div key={index} className="flex justify-center w-[48%] lg:w-[32%] mb-6"> {/* Added mb-6 for vertical gap */}
            <Card
              imageSrc={card.imageSrc}
              label={card.label}
              description={card.description}
              bgImage={card.bgImage}
            />
          </div>
        ))}
      </div>

      {/* Carousel layout for screens < 768px */}
      <div className="md:hidden relative flex flex-col justify-center items-center w-full h-[480px] overflow-visible"> {/* Added overflow-visible */}
        <div className="relative w-full h-[480px] flex">
          <AnimatePresence>
            {/* Only show one card at a time */}
            {cards.map(
              (card, index) =>
                index === currentIndex && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute w-full h-full flex justify-center items-center rounded-[1.875rem]`} // Add rounded corners
                  >
                    <Card
                      imageSrc={card.imageSrc}
                      label={card.label}
                      description={card.description}
                      bgImage={card.bgImage}
                      isActive
                      disableHover
                    />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Dots for carousel */}
        <div className="flex justify-center mt-6">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-[15px] h-[15px] mx-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-[#E45D25]' : 'bg-[#D9D9D9]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;

