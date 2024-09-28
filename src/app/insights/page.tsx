'use client';
import React from 'react';
import InsightsMenu from '../components /InsightsMenu';
import InsightsList from './InsightsList';
import SearchBar from '../components /SearchBar';
import Image from 'next/image';

const menuItems = [
  { id: 1, title: 'All' },
  { id: 2, title: 'Data Science' },
  { id: 3, title: 'AI/ML' },
  { id: 4, title: 'Web Development' },
  { id: 5, title: 'Digital Marketing' },
  { id: 6, title: 'AR/VR' },
  { id: 7, title: 'E-Commerce' },
  { id: 8, title: 'New Technology' },
];

const InsightsPage = () => {
  const handleMenuClick = (id: number) => {
    console.log('Menu item clicked:', id);
  };

  return (
    <>
        {/* <!-- Image Background --> */}
        <Image src="/insights-hero.jpg" alt="Background Image" fill className="object-cover relative top[-40%]" />

        {/* <!-- Text Overlay --> */}
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-8">
          {/* <!-- Main Heading --> */}
          <h1 className="text-white text-[7.5rem] font-bold uppercase leading-[0.875rem] text-center relative bottom-[35%]">
            INSIGHTS
          </h1>
          
          {/* <!-- Subtext --> */}
          <p className="text-white text-[1.75rem] italic font-light leading-[0.875rem] text-center relative bottom-[26%]">
            Which updates your tech knowledge
          </p>
        </div>

    <SearchBar placeholder="Search Insights..." />

    <h2 className='text-[2.25rem] mt-[40rem] text-center font-bold'>LATEST <span className='text-[#E45D25]'>INSIGHTS</span></h2>
    <h3 className='text-left text-[1.5rem] font-bold mb-2 ml-12'>Discover Insights:</h3>
    <div className="container mx-auto flex justify-center relative">
      <InsightsMenu items={menuItems} defaultSelectedId={1} onClick={handleMenuClick} />
      <div>
       <InsightsList/>
      </div>
    </div>
    </>
  );
};

export default InsightsPage;
