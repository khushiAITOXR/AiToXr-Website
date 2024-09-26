'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Button from './Button'; // Import the button component
import Dropdown from './Dropdown';
import { useRouter } from 'next/navigation';

  const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const contactRef = useRef<HTMLElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown state
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false); // Function to close the dropdown
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const router = useRouter();
  const handleClick = (route: string) => {
    router.push(route); // Navigate programmatically to the route
  };
  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const redirectToHome = () => {
    router.push('/'); // Redirect to home when clicked
  };

  return (
   <> 
    <header 
    className={`sticky top-0 left-0 w-full px-20 py-4 flex justify-between items-center z-50 transition-all duration-300 border-b-[1.5px] border-[#E45D25] bg-[#00000033] backdrop-blur-[10px] ${
      isScrolled
        ? 'bg-gradient-to-r from-black via-gray-900 to-black'
        : 'bg-transparent'
    }`}
    >
      {/* Logo */}
      <div className="flex items-center hover:cursor-pointer" onClick={redirectToHome}>
        <Image src='/logo.svg' alt="aitoxr-logo" width={165} height={30} />
      </div>

      {/* Navigation */}
      <nav className="text-white gap-16 flex">
        <a onClick={toggleDropdown} className="hover:text-[#E45D25] active:text-[#E45D25] cursor-pointer">Services</a>
        <a href="#products" className="hover:text-[#E45D25] cursor-pointer">Products</a>
        <a href="#industries" className="hover:text-[#E45D25] cursor-pointer">Industries</a>
        <a href="#company" className="hover:text-[#E45D25] cursor-pointer">Company</a>
        <a onClick={() => handleClick('/insights')} className="hover:text-[#E45D25] cursor-pointer">Insights</a>
        <a href="#career" className="hover:text-[#E45D25] cursor-pointer">Career</a>
      </nav>

      {/* Button */}
      <Button variant="fill" label="Schedule a Call" onClick={handleScrollToContact} />
    </header>
    {isDropdownOpen && (
        <Dropdown
        isOpen={isDropdownOpen}
          leftHeading="Engagement Models"
          leftDescription="You can hire our software developers in different ways."
          rightHeading="Software Solutions"
          rightDescription="You can hire our software developers in different ways. You can hire our software developers in different ways."
          closeDropdown={closeDropdown}
        />
      )}
    </>
  );
};

export default Header;
