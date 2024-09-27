import React from 'react';
import Image from 'next/image'; // Assuming you are using Next.js for image optimization

const Awards: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[rgba(243,243,243,1)]">
      <div className="max-w-7xl w-full px-6 mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-[#1E1E1E] font-bold text-5xl">
          Our <span className="text-[#E45D25]">Awards</span> and Recognitions
        </h2>

        {/* Description */}
        <p className="text-center text-[#1E1E1E] text-lg font-normal mt-4 mx-auto" style={{ width: '60.25rem', lineHeight: '2.125rem' }}>
        At AItoXR, we are proud to be recognized for our commitment to excellence and innovation in IT services. Over the years, we have received multiple industry awards for our groundbreaking solutions in AI, machine learning, and IT outsourcing. Our dedication to delivering high-impact results has earned us accolades from leading organizations, solidifying our reputation as a trusted partner for businesses of all sizes. 
        </p>

        {/* Awards/Icons Row */}
        <div className="mt-10 flex justify-center items-center gap-14 w-[98%] m-auto">
          <div className="h-[8.125rem]">
            <Image src="/1.png" alt="Award 1" width={130} height={130} />
          </div>
          <div className="h-[8.125rem]">
            <Image src="/2.png" alt="Award 2" width={130} height={130} />
          </div>
          <div className="h-[8.125rem]">
            <Image src="/3.png" alt="Award 3" width={130} height={130} />
          </div>
          <div className="h-[8.125rem]">
            <Image src="/4.png" alt="Award 4" width={130} height={130} />
          </div>
          <div className="h-[8.125rem]">
            <Image src="/5.png" alt="Award 5" width={130} height={130} />
          </div>
          <div className="h-[8.125rem]">
            <Image src="/6.png" alt="Award 5" width={130} height={130} />
          </div>
          <div className="h-[8.125rem]">
            <Image src="/7.png" alt="Award 5" width={130} height={130} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
