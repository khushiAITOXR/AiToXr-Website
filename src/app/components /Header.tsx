'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Button from './Button'; // Import the button component
import Dropdown from './Dropdown';
import { useRouter } from 'next/navigation';

  const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown state
    setActiveLink('services'); // Set 'services' as active when dropdown is toggled
  };


  const closeDropdown = () => {
    setIsDropdownOpen(false); // Function to close the dropdown
    setActiveLink(null);
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
  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle navigation and close dropdown when other links are clicked
  const handleClick = (route: string, linkName: string) => {
    setActiveLink(linkName); // Set the clicked link as active
    closeDropdown(); // Close the dropdown if open
    router.push(route); // Navigate programmatically to the route
  };

  const redirectToHome = () => {
    router.push('/'); // Redirect to home when clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the hamburger menu
  };


  return (
   <> 
    <header 
    className={`sticky top-0 left-0 w-full px-[3%] py-4 flex justify-between items-center z-50 transition-all duration-300 border-b-[1.5px] border-[#E45D25] bg-[#00000080] backdrop-blur-[10px] ${
      isScrolled
        ? 'bg-gradient-to-r from-black via-gray-900 to-black'
        : 'bg-transparent'
    }`}
    >
      {/* Logo */}
      <div className="flex items-center hover:cursor-pointer" onClick={redirectToHome}>
        <div className="relative w-24 sm:w-32 lg:w-40" style={{ height: 'auto' }}>
          <Image
            src='/logo.svg'
            alt="aitoxr-logo"
            width={165}  // Setting intrinsic width
            height={30}  // Setting intrinsic height
            layout="responsive" // Makes the image responsive while maintaining aspect ratio
            objectFit="contain" // Ensures the image fits within the container
          />
        </div>
      </div>

      {/* Hamburger Icon for mobile screens */}
      <div className="lg:hidden flex items-center">
          <Image
            src="/hamburger.svg" // Path to the hamburger icon
            alt="Menu"
            width={30}
            height={30}
            className="cursor-pointer"
            onClick={toggleMenu} // Toggle the menu on click
          />
        </div>

      {/* Navigation */}
      <nav className={`text-white text-center flex justify-between items-center w-[55%] lg:flex ${isMenuOpen ? 'flex' : 'hidden'} lg:w-auto lg:space-x-8`}>
          <a
            onClick={toggleDropdown}
            className={`cursor-pointer ${
              activeLink === 'services' ? 'text-[#E45D25]' : 'hover:text-[#E45D25]'
            }`}
          >
            Services
          </a>
          <a
            href="#products"
            onClick={() => setActiveLink('products')}
            className={`cursor-pointer ${
              activeLink === 'products' ? 'text-[#E45D25]' : 'hover:text-[#E45D25]'
            }`}
          >
            Products
          </a>
          <a
            href="#industries"
            onClick={() => setActiveLink('industries')}
            className={`cursor-pointer ${
              activeLink === 'industries' ? 'text-[#E45D25]' : 'hover:text-[#E45D25]'
            }`}
          >
            Industries
          </a>
          <a
            href="#company"
            onClick={() => setActiveLink('company')}
            className={`cursor-pointer ${
              activeLink === 'company' ? 'text-[#E45D25]' : 'hover:text-[#E45D25]'
            }`}
          >
            Company
          </a>
          <a
            onClick={() => handleClick('/insights', 'insights')}
            className={`cursor-pointer ${
              activeLink === 'insights' ? 'text-[#E45D25]' : 'hover:text-[#E45D25]'
            }`}
          >
            Insights
          </a>
          <a
            href="#career"
            onClick={() => setActiveLink('career')}
            className={`cursor-pointer ${
              activeLink === 'career' ? 'text-[#E45D25]' : 'hover:text-[#E45D25]'
            }`}
          >
            Career
          </a>
        </nav>

      {/* Button */}
      <div className="hidden lg:block">
          <Button variant="fill" label="Schedule a Call" onClick={handleScrollToContact} />
        </div>
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
