import React, { forwardRef } from 'react';
import Grid from '../components /Grid';

const Industry = forwardRef<HTMLElement, object>((_, ref) => {
  const items = [
    {
      src: '/pizza.png',
      alt: 'Image 1',
      label: 'Food & Restaurants',
    },
    {
      src: '/health.png',
      alt: 'Image 2',
      label: 'Sports & Fitness',
    },
    {
      src: '/banking.png',
      alt: 'Image 3',
      label: 'Finance & Banking',
    },
    {
      src: '/estate.png',
      alt: 'Image 4',
      label: 'Real Estate',
    },
    {
      src: '/mobility.png',
      alt: 'Image 5',
      label: 'Enterprise Mobility',
    },
    {
      src: '/travel.png',
      alt: 'Image 6',
      label: 'Travel & Tourism',
    },
    {
      src: '/transport.png',
      alt: 'Image 7',
      label: 'Transport & Logistic',
    },
    {
      src: '/retail.png',
      alt: 'Image 8',
      label: 'E-commerce & Retail',
    },
    {
      src: '/healthcare.png',
      alt: 'Image 9',
      label: 'Healthcare',
    },
    {
      src: '/appdev.png',
      alt: 'Image 10',
      label: 'App Development',
    },
    {
      src: '/education.png',
      alt: 'Image 11',
      label: 'Education Service',
    },
    {
      src: '/media.png',
      alt: 'Image 12',
      label: 'Media & Entertainment',
    },
  ];

  const handleItemClick = (label: string) => {
    const route = `/industries?industry=${encodeURIComponent(label)}`;
    window.open(route, '_blank');
  };

  return (
    <section ref={ref} className="py-8 lg:py-16 w-[100%]">
      {/* Section Title */}
      <h2 className="text-center text-[#1E1E1E] font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        Industries We <span className="text-[#E45D25]">Serve</span>
      </h2>

      {/* Grid Section */}
      <div className="mx-auto w-[82%]">
        <Grid variant={'secondary'} items={items} onClick={handleItemClick} defaultOpacity={1}/>
      </div>
    </section>
  );
});

Industry.displayName = 'Industry';


export default Industry;
