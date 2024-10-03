import React from 'react';
import Image from 'next/image'; 

const Slider: React.FC = () => {
  const awards = [
    '/1.png',
    '/2.png',
    '/3.png',
    '/4.png',
    '/5.png',
    '/6.png',
    '/7.png',
  ];

  return (
    <section className="w-full m-auto">
      <div className="w-full mx-auto">
        {/* Awards/Icons Row with Infinite Scrolling */}
        <div className="slider-wrapper mt-10 w-[98%] m-auto overflow-hidden">
          <div className="slider flex items-center gap-14">
            {/* Map through images multiple times to ensure seamless scrolling */}
            {Array(15).fill(awards).flat().map((src, index) => (
              <div
                key={index}
                className="h-[8.125rem] min-w-[100px] min-h-[100px] flex-shrink-0"
              >
                <Image src={src} alt={`Award ${index + 1}`} width={100} height={100} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Slider Wrapper */
        .slider-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden; /* Hide the overflow */
        }

        /* Slider with Infinite Loop */
        .slider {
          display: flex;
          width: max-content; /* Ensure the width of the content can grow dynamically */
          animation: scroll 300s linear infinite; /* Infinite scrolling with longer duration for smoothness */
        }

        /* Keyframes for the infinite loop */
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Slider;
