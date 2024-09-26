'use client';

import React, { useEffect, useRef } from 'react';
import SubItemList from './SubItemList';
import { useRouter } from 'next/navigation';

type DropdownProps = {
  leftHeading: string;
  leftDescription: string;
  rightHeading: string;
  rightDescription: string;
  isOpen: boolean;
  closeDropdown: () => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  leftHeading,
  leftDescription,
  rightHeading,
  rightDescription,
  isOpen,
  closeDropdown
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const handleClick = (route: string) => {
    router.push(route); // Navigate programmatically to the route
    closeDropdown();
  };

  // Handle click outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown(); // Close dropdown if clicked outside
      }
    };

    // Add the event listener when the dropdown is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // Remove the event listener when the dropdown is closed
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeDropdown]);


  return (
    <div
    ref={dropdownRef}
    className={`absolute w-[90%] left-[5%] h-auto py-8 rounded-b-[1.25rem] border border-white/50 bg-black/60 backdrop-blur-[20px] z-50 flex transition-all duration-[3s] ease-in-out ${
       isOpen ? 'animate-slideDown' : 'animate-slideUp'
    }`}
    style={{ top: isOpen ? "4.5rem" : "-100%", borderRadius: '0rem 0rem 1.25rem 1.25rem', position:'fixed'}}
    >
      <div className="w-[35%] flex-col items-center justify-center">
        <div className="text-center mb-6 flex flex-col items-center">
          <h3
            className="text-[1.25rem] font-bold"
            style={{
              background: 'linear-gradient(270deg, #F58E1E 33.76%, #E45D25 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {leftHeading}
          </h3>
          <p className="text-center text-[1rem] w-[21rem] font-normal leading-[1.5625rem] text-white/60">
            {leftDescription}
          </p>
        </div>
        <div className='flex flex-col items-center gap-5'>
        <SubItemList
        onClick={() => handleClick('/staff-augmentation')}
        heading="Staff Augmentation"
        description="Our software developers in your team."
      />
        <SubItemList
        heading="Dedicated Teams"
        description="Our software developers in your team."
      />
      <SubItemList
        // onClick={handleClick}
        heading="Software Outsourcing"
        description="Our software developers in your team."
      />
        </div>
      </div>

      {/* Right Section - 65% */}
      <div className="w-[65%] flex flex-col items-center justify-center">
        <div className="text-center flex-col items-center justify-center mb-6">
          <h3
            className="text-[1.25rem] font-bold"
            style={{
              background: 'linear-gradient(270deg, #F58E1E 33.76%, #E45D25 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {rightHeading}
          </h3>
          <p className="text-center text-[1rem] w-[40rem] font-normal leading-[1.5625rem] text-white/60">
            {rightDescription}
          </p>
        </div>
        <div className='flex gap-6'>
          <div className='flex flex-col items-center gap-5'>
            <SubItemList
            onClick={() => handleClick('/ai-ml')}
            heading="AI/ML Development"
            description="Our software developers in your team."
            />
            <SubItemList
            onClick={() => handleClick('/ai-vr')}
            heading="AR/VR"
            description="Our software developers in your team."
            />
            <SubItemList
            onClick={() => handleClick('/data-science')}
            heading="Data Science"
            description="Our software developers in your team."
            />
            <SubItemList
            onClick={() => handleClick('/web-development')}
            heading="Web Development"
            description="Our software developers in your team."
            />
            <SubItemList
            onClick={() => handleClick('/generative-ai')}
            heading="Generative AI/LLM Development"
            description="Our software developers in your team."
            />
          </div>
          <div className='flex flex-col items-center gap-5'>
            <SubItemList
            onClick={() => handleClick('/app-devevelopment')}
            heading="App Development"
            description="Our software developers in your team."
            />
            <SubItemList
            // onClick={handleClick}
            heading="Digital Marketing"
            description="Our software developers in your team."
            />
            <SubItemList
            // onClick={handleClick}
            heading="SAAS Products"
            description="Our software developers in your team."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
