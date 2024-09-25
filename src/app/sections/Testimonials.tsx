import React, { forwardRef, useState } from 'react';
import Image from 'next/image';
import TestimonialCard from '../components /TestimonialCard';

// Array of testimonial data
const testimonials = [
  {
    personName: 'John Doe',
    designation: 'CEO, ExampleCorp',
    location: 'New York, USA',
    rating: 4,
    testimonial: "This service has been amazing! We've worked with many companies, but the attention to detail and quality here have been unmatched. Highly recommend!",
  },
  {
    personName: 'Jane Smith',
    designation: 'CTO, TechCorp',
    location: 'San Francisco, USA',
    rating: 5,
    testimonial: "Absolutely wonderful experience working with this team. They delivered beyond our expectations!",
  },
  {
    personName: 'Carlos Mendez',
    designation: 'Manager, Solutions Inc.',
    location: 'Mexico City, Mexico',
    rating: 3.5,
    testimonial: "The team provided reliable solutions that worked seamlessly for our business.",
  },
  {
    personName: 'Sofia Lee',
    designation: 'COO, Innovations Ltd.',
    location: 'Seoul, South Korea',
    rating: 4.5,
    testimonial: "They were very professional and responsive throughout the project. The final product was exceptional.",
  },
];

const Testimonials = forwardRef<HTMLElement, object>((_, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle prev and next click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section ref={ref} className="p-16 bg-[#F3F3F3] flex flex-col justify-center items-center">
      {/* Section Title */}
      <div className="flex items-center mb-12 gap-14">
        <button onClick={handlePrev} className="mr-4">
          <Image src="/prev-icon.svg" alt="Prev" width={40} height={40} />
        </button>
        <h2 className="text-center text-3xl font-bold text-[#1E1E1E]">
          Client <span className="text-[#E45D25]">Testimonials</span>
        </h2>
        <button onClick={handleNext} className="ml-4">
          <Image src="/next-icon.svg" alt="Next" width={40} height={40} />
        </button>
      </div>

      {/* Testimonial Card */}
      <TestimonialCard
        personName={testimonials[currentIndex].personName}
        designation={testimonials[currentIndex].designation}
        location={testimonials[currentIndex].location}
        rating={testimonials[currentIndex].rating}
        testimonial={testimonials[currentIndex].testimonial}
      />
    </section>
  );
});

Testimonials.displayName = 'Testimonials';



export default Testimonials;
