import React from 'react';
import Image from 'next/image'; // Import next/image to handle SVGs efficiently

type TestimonialCardProps = {
  personName: string;
  designation: string;
  location: string;
  rating: number; // Rating is between 0 and 5
  testimonial: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  personName,
  designation,
  location,
  rating,
  testimonial,
}) => {
  // Render stars based on the rating (no empty stars)
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <Image
          key={i}
          src="/star1.svg" // Use your custom star SVG
          alt="star"
          width={20}
          height={20}
          className="text-yellow-500"
        />
      );
    }
    return stars;
  };

  return (
    <div className="relative bg-white shadow-lg rounded-[40px] p-8 w-[86%] h-[20.11975rem] m-auto">
      <div className="flex justify-between h-full items-start px-14">
        {/* Left Section */}
        <div className="flex-1 pr-8">
          <div>
            <h3 className="text-[#000] text-left text-[1.875rem] font-bold">{personName}</h3>
            <p className="text-[#000] text-left text-[1.25rem] font-normal">{designation}</p>
            <div className="flex items-center mt-2">
              {/* Use custom location SVG */}
              <Image
                src="/location.svg"
                alt="Location icon"
                width={18}
                height={18}
                className="mr-2"
              />
              <p className="text-[#000] text-left text-[1.25rem] font-normal">{location}</p>
            </div>
          </div>

          {/* Rating Section */}
          <div className="flex-col mt-6">
            <div className="flex-col justify-between items-center">
              <div className="text-[#000] font-bold text-[1.25rem]">Rating: ({rating}/5.0)</div>
            </div>
            <div className="flex mt-2">{renderStars()}</div> {/* Stars positioned below rating */}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 pl-8">
          <p className="text-[#000] text-justify text-[1.25rem] font-normal">
            {testimonial}
          </p>
        </div>
      </div>

      {/* Bottom Triangle */}
      {/* <div className="absolute bottom-[-10px] left-[50%] translate-x-[-50%] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div> */}
    </div>
  );
};

export default TestimonialCard;
