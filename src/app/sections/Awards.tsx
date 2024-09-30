// import React from 'react';
// import Image from 'next/image'; // Assuming you are using Next.js for image optimization

// const Awards: React.FC = () => {
//   return (
//     <section className="w-full py-16 bg-[rgba(243,243,243,1)] m-auto">
//       <div className="w-full px-6 mx-auto">
//         {/* Section Title */}
//         <h2 className="text-center text-[#1E1E1E] font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-10 md:mb-12 lg:mb-16">
//           Our <span className="text-[#E45D25]">Awards</span> and Recognitions
//         </h2>

//         {/* Description */}
//         <p className="text-center text-[#1E1E1E] mt-4 mx-auto font-normal text-[14px] sm:text-base md:text-lg lg:text-lg" style={{ width: '82%', lineHeight: '2.125rem' }}>
//         At AItoXR, we are proud to be recognized for our commitment to excellence and innovation in IT services. Over the years, we have received multiple industry awards for our groundbreaking solutions in AI, machine learning, and IT outsourcing. Our dedication to delivering high-impact results has earned us accolades from leading organizations, solidifying our reputation as a trusted partner for businesses of all sizes. 
//         </p>

//         {/* Awards/Icons Row */}
//         {/* <div className="mt-10 flex justify-center items-center gap-14 w-[98%] m-auto">
//           <div className="h-[8.125rem]">
//             <Image src="/1.png" alt="Award 1" width={130} height={130} />
//           </div>
//           <div className="h-[8.125rem]">
//             <Image src="/2.png" alt="Award 2" width={130} height={130} />
//           </div>
//           <div className="h-[8.125rem]">
//             <Image src="/3.png" alt="Award 3" width={130} height={130} />
//           </div>
//           <div className="h-[8.125rem]">
//             <Image src="/4.png" alt="Award 4" width={130} height={130} />
//           </div>
//           <div className="h-[8.125rem]">
//             <Image src="/5.png" alt="Award 5" width={130} height={130} />
//           </div>
//           <div className="h-[8.125rem]">
//             <Image src="/6.png" alt="Award 5" width={130} height={130} />
//           </div>
//           <div className="h-[8.125rem]">
//             <Image src="/7.png" alt="Award 5" width={130} height={130} />
//           </div>
//         </div> */}
//         <div className="mt-10 flex justify-center items-center gap-14 w-[98%] m-auto">
//           <div className="h-[8.125rem] min-w-[100px] min-h-[100px]">
//             <Image src="/1.png" alt="Award 1" width={130} height={130} />
//           </div>
//           <div className="h-[8.125rem] min-w-[100px] min-h-[100px]">
//             <Image src="/2.png" alt="Award 2" width={130} height={130} />
//           </div>
//           <div className="h-[8.125rem] min-w-[100px] min-h-[100px]">
//             <Image src="/3.png" alt="Award 3" width={130} height={130} />
//           </div>
//           <div className="h-[8.125rem] min-w-[100px] min-h-[100px]">
//             <Image src="/4.png" alt="Award 4" width={130} height={130} />
//           </div>
//           <div className="h-[8.125rem] min-w-[100px] min-h-[100px]">
//             <Image src="/5.png" alt="Award 5" width={130} height={130} />
//           </div>
//           <div className="h-[8.125rem] min-w-[100px] min-h-[100px]">
//             <Image src="/6.png" alt="Award 5" width={130} height={130} />
//           </div>
//           <div className="h-[8.125rem] min-w-[100px] min-h-[100px]">
//             <Image src="/7.png" alt="Award 5" width={130} height={130} />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Awards;


import React from 'react';
import Image from 'next/image'; // Assuming you are using Next.js for image optimization

const Awards: React.FC = () => {
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
    <section className="w-full py-16 bg-[rgba(243,243,243,1)] m-auto">
      <div className="w-full px-6 mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-[#1E1E1E] font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          Our <span className="text-[#E45D25]">Awards</span> and Recognitions
        </h2>

        {/* Description */}
        <p className="text-center text-[#1E1E1E] mt-1 mx-auto font-normal text-[14px] sm:text-base md:text-lg lg:text-lg" style={{ width: '82%' }}>
          At AItoXR, we are proud to be recognized for our commitment to excellence and innovation in IT services. Over the years, we have received multiple industry awards for our groundbreaking solutions in AI, machine learning, and IT outsourcing. Our dedication to delivering high-impact results has earned us accolades from leading organizations, solidifying our reputation as a trusted partner for businesses of all sizes.
        </p>

        {/* Awards/Icons Row with Infinite Scrolling */}
        <div className="slider-wrapper mt-10 w-[98%] m-auto overflow-hidden">
          <div className="slider flex items-center gap-14">
            {/* Map through images multiple times to ensure seamless scrolling */}
            {Array(15).fill(awards).flat().map((src, index) => (
              <div
                key={index}
                className="h-[8.125rem] min-w-[100px] min-h-[100px] flex-shrink-0"
              >
                <Image src={src} alt={`Award ${index + 1}`} width={130} height={130} />
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
          animation: scroll 120s linear infinite; /* Infinite scrolling with longer duration for smoothness */
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

export default Awards;
