'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Button from './Button'; // Import the button component
import Dropdown from './Dropdown';
import { useRouter } from 'next/navigation';
import { MdArrowDropDown, MdArrowForwardIos, MdClear } from 'react-icons/md';
import { FaChevronDown } from 'react-icons/fa6';

  const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

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

  const closeMenu = () => {
    setIsMenuOpen(false); // Function to close the menu
  };

  const handleClickRoute = (route: string) => {
    router.push(route); // Navigate programmatically to the route
    closeMenu(); // Close the menu after navigation
  };

  const menuData = [
    {
      title: 'Services',
      gradientText: true,
      submenu: [
        {
          title: 'Engagement Models',
          children: [
            { title: 'Staff Augmentation', route: '/staff-augmentation' },
            { title: 'Dedicated Team', route: '/dedicated-team' },
            { title: 'Software Outsourcing', route: '/software-outsourcing' },
          ],
        },
        {
          title: 'Software Solutions',
          children: [
            { title: 'AI/ML Development', route: '/ai-ml' },
            { title: 'AR/VR Development', route: '/ai-vr' },
            { title: 'Data Science', route: '/data-science' },
            { title: 'Generative AI & LLM', route: '/generative-ai' },
            { title: 'Web Development', route: '/web-development' },
            { title: 'App Development', route: '/app-development' },
            { title: 'E-commerce Development', route: '/ecommerce-development' },
            { title: 'Digital Marketing', route: '/digital-marketing' },
            { title: 'SAAS Products', route: '/saas-products' },
          ],
        },
      ],
    },
    { title: 'Products', gradientText: true, submenu: [], route: '/products' },
    { title: 'Industries', gradientText: true, submenu: [], route: '/industries' },
    { title: 'Company', gradientText: true, submenu: [], route: '/company' },
    { title: 'Insights', gradientText: true, submenu: [], route: '/insights' },
    { title: 'Career', gradientText: true, submenu: [], route: '/career' },
  ];

  const handleSubmenuToggle = (menuTitle: string) => {
    setActiveMenu(menuTitle === activeMenu ? null : menuTitle);
  };

  const handleChildToggle = (submenuTitle: string) => {
    setActiveSubmenu(submenuTitle === activeSubmenu ? null : submenuTitle);
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
      <nav className={`text-white text-center flex justify-between items-center w-[55%] lg:flex ${isMenuOpen ? 'hidden' : 'hidden'} lg:w-auto lg:space-x-8`}>
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

      {/* Overlay Menu */}
{isMenuOpen && (
  <div className="fixed top-0 left-0 z-50 w-full h-full bg-white flex flex-col items-start p-6 lg:w-[60%]">
    {/* Close Icon */}
    <div className=" w-full flex justify-between items-center border-b-[1.5px] border-[#E45D25] pb-4">
      <MdClear className="text-black text-3xl cursor-pointer" onClick={closeMenu} />
      <Image src="/logo.svg" alt="Logo" width={100} height={20} />
    </div>

    {/* Menu Items */}
    {menuData.map((menu) => (
      <div key={menu.title} className="w-full border-b-[1px] border-[#D9D9D9]">
        <div
          className="flex justify-between items-center py-3 cursor-pointer"
          onClick={() => handleSubmenuToggle(menu.title)}
        >
          {/* Icon before the text */}
          <div className="flex items-center">
            {menu.submenu.length > 0 && (
              <>
                {activeMenu === menu.title ? (
                  <FaChevronDown className="text-[#E45D25] mr-2" />
                ) : (
                  <MdArrowForwardIos className="text-[#E45D25] mr-2" />
                )}
              </>
            )}
            <p
              className={`text-[16px] font-bold ${
                menu.gradientText
                  ? 'bg-gradient-to-r from-[#E45D25] to-[#F58E1E] text-transparent bg-clip-text'
                  : 'text-black'
              }`}
            >
              {menu.title}
            </p>
          </div>
        </div>

        {/* Submenu */}
        {activeMenu === menu.title && (
          <div className="pl-6 border-b-[1px] border-[#D9D9D9]">
            {menu.submenu.map((submenu) => (
              <div key={submenu.title} className="w-full">
                <div
                  className="flex justify-between items-center py-2 cursor-pointer"
                  onClick={() => handleChildToggle(submenu.title)}
                >
                  {/* Icon before the submenu text */}
                  <div className="flex items-center">
                    {submenu.children && (
                      <>
                        {activeSubmenu === submenu.title ? (
                          <FaChevronDown className="text-[#E45D25] mr-2" />
                        ) : (
                          <MdArrowForwardIos className="text-[#E45D25] mr-2" />
                        )}
                      </>
                    )}
                    <p
                      className="text-[16px] font-normal bg-gradient-to-r from-[#E45D25] to-[#F58E1E] text-transparent bg-clip-text"
                    >
                      {submenu.title}
                    </p>
                  </div>
                </div>

                {/* Submenu Children */}
                {activeSubmenu === submenu.title && (
                  <div className="pl-6">
                    {submenu.children.map((child) => (
                            <p
                              key={child.title}
                              onClick={() => handleClickRoute(child.route)}
                              className="text-[16px] text-black py-2 cursor-pointer"
                            >
                              {child.title}
                            </p>
                          ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    ))}

    {/* Call to Action Button */}
    <div className='flex justify-center items-center mt-8 mx-auto'>
    <Button variant="fill" label="Schedule a Call" onClick={closeMenu} />
    </div>
  </div>
)}

    </>
  );
};

export default Header;
