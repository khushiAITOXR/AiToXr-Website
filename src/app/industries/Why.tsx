// 'use client';

// import React, { forwardRef, useEffect, useState } from 'react';
// import Image from 'next/image';

// type WhyChooseUsItem = {
//   imageSrc: string;
//   label: string;
// };

// type WhyChooseUsProps = {
//   items: WhyChooseUsItem[];
// };

// const WhyChooseUs = forwardRef<HTMLElement, WhyChooseUsProps>(
//   ({ items }) => {

//     const [imageSize, setImageSize] = useState({ width: 116, height: 116 });

//     const updateImageSize = () => {
//       const screenWidth = window.innerWidth;

//       // If screen width is less than 1024px, set image size to 75x75px
//       if (screenWidth < 1024) {
//         setImageSize({ width: 64, height: 64 });
//       } else {
//         setImageSize({ width: 116, height: 116 });
//       }
//     };

//     // Effect to update size on screen resize
//     useEffect(() => {
//       updateImageSize(); // Set size on initial load
//       window.addEventListener('resize', updateImageSize); // Update size on resize

//       // Cleanup listener on unmount
//       return () => window.removeEventListener('resize', updateImageSize);
//     }, []);
//   return (
//     <section className="py-8 lg:py-20 bg-[#F3F3F3] w-full">

//       {/* Icons with labels */}
//       <div className="flex flex-wrap lg:flex-nowrap  justify-center gap-y-8 gap-[5%] w-[90%] lg:w-[82%] m-auto">
//         {items.map((item, index) => (
//           <div key={index} className="flex flex-col items-center">
//             {/* Circle with gradient and image */}
//             <div
//               className="flex items-center justify-center bg-gradient-to-b from-[#E45D25] to-[#F58E1E] rounded-full p-4"
//             >
//               <Image src={item.imageSrc} alt={item.label} width={imageSize.width}
//                 height={imageSize.height}/>
//             </div>
//             {/* Label */}
//             <h3 className="text-center text-[14px] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-medium mt-4">
//               {item.label}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// });

// export default WhyChooseUs;


'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type WhyChooseUsItem = {
  imageSrc: string;
  label: string;
};

type WhyChooseUsProps = {
  items: WhyChooseUsItem[];
};

const Why: React.FC<WhyChooseUsProps> = ({ items }) => {
  const [imageSize, setImageSize] = useState({ width: 116, height: 116 });

  const updateImageSize = () => {
    const screenWidth = window.innerWidth;

    // If screen width is less than 1024px, set image size to 64x64px
    if (screenWidth < 1024) {
      setImageSize({ width: 64, height: 64 });
    } else {
      setImageSize({ width: 116, height: 116 });
    }
  };

  // Effect to update size on screen resize
  useEffect(() => {
    updateImageSize(); // Set size on initial load
    window.addEventListener('resize', updateImageSize); // Update size on resize

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', updateImageSize);
  }, []);

  return (
    <section className="py-8 lg:py-20 bg-[#F3F3F3] w-full">
      {/* Icons with labels */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-y-8 gap-[5%] w-[90%] lg:w-[82%] m-auto">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Circle with gradient and image */}
            <div className="flex items-center justify-center bg-gradient-to-b from-[#E45D25] to-[#F58E1E] rounded-full p-4">
              <Image
                src={item.imageSrc}
                alt={item.label}
                width={imageSize.width}
                height={imageSize.height}
              />
            </div>
            {/* Label */}
            <h3 className="text-center text-[14px] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-medium mt-4">
              {item.label}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

Why.displayName = 'Why';

export default Why;
