/* eslint-disable react/jsx-no-undef */

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterLocations from './LocationGrid';

const Footer: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <footer className="bg-black py-16 px-8 w-full">
      <div className="flex justify-between w-[82%] mx-auto">
        {/* Left Section - 3 Columns */}
        <div className="w-[70%] border-r border-white pr-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Column 1 - QUICK LINKS */}
            <div>
              <h3 className="text-white font-bold mb-4">QUICK <span className='text-[#E45D25]'>LINKS</span></h3>
              <ul className="space-y-6">
                <li><Link href="/" className="text-white text-base font-normal">Home</Link></li>
                <li><Link href="/careers" className="text-white text-base font-normal">Careers</Link></li>
                <li><Link href="/blogs" className="text-white text-base font-normal">Blogs</Link></li>
                <li><Link href="/insights" className="text-white text-base font-normal">Insights</Link></li>
                <li><Link href="/case-studies" className="text-white text-base font-normal">Case Studies</Link></li>
                <li><Link href="/terms" className="text-white text-base font-normal">Terms & Conditions</Link></li>
                <li><Link href="/privacy-policy" className="text-white text-base font-normal">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Column 2 - SERVICES */}
            <div>
              <h3 className="text-[#E45D25] font-bold mb-4">SERVICES</h3>
              <ul className="space-y-6">
                <li><Link href="/staff-augmentation" className="text-white text-base font-normal">Staff Augmentation</Link></li>
                <li><Link href="/dedicated-teams" className="text-white text-base font-normal">Dedicated Teams</Link></li>
                <li><Link href="/ai-ml-development" className="text-white text-base font-normal">AI/ML Development</Link></li>
                <li><Link href="/ar-vr" className="text-white text-base font-normal">AR/VR</Link></li>
                <li><Link href="/data-science" className="text-white text-base font-normal">Data Science</Link></li>
                <li><Link href="/web-development" className="text-white text-base font-normal">Web Development</Link></li>
                <li><Link href="/e-commerce" className="text-white text-base font-normal">E-Commerce</Link></li>
                <li><Link href="/app-development" className="text-white text-base font-normal">App Development</Link></li>
                <li><Link href="/digital-marketing" className="text-white text-base font-normal">Digital Marketing</Link></li>
              </ul>
            </div>

            {/* Column 3 - PRODUCTS */}
            <div>
              <h3 className="text-[#E45D25] font-bold mb-4">PRODUCTS</h3>
              <ul className="space-y-6">
                <li><Link href="/saas-products" className="text-white text-base font-normal">SAAS Products</Link></li>
                <li><Link href="/employee-management" className="text-white text-base font-normal">Employee Management</Link></li>
                <li><Link href="/blogs" className="text-white text-base font-normal">Blogs</Link></li>
                <li><Link href="/insights" className="text-white text-base font-normal">Insights</Link></li>
                <li><Link href="/case-studies" className="text-white text-base font-normal">Case Studies</Link></li>
                <li><Link href="/terms" className="text-white text-base font-normal">Terms & Conditions</Link></li>
                <li><Link href="/privacy-policy" className="text-white text-base font-normal">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Text */}
          <p className="text-white text-sm font-normal mt-12">
            © 2023-24 AiToXr. All Rights Reserved. | Do not sell my personal data.
          </p>
        </div>

        {/* Right Section */}
        {/* Right Section */}
        <div className="w-[40%] pl-8">
          {/* Title */}
          <h3 className="text-white text-xl font-bold mb-4">
            GET IN <span className="text-[#E45D25]">TOUCH</span>
          </h3>

          {/* Input for Subscribe */}
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-white bg-transparent text-white mr-2 focus:outline-none"
            />
            <button
              className={`p-3 bg-[#E45D25] text-white rounded-lg ${isChecked ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
              disabled={!isChecked}
            >
              Subscribe
            </button>
          </div>

          {/* Checkbox for terms */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <p className="text-white text-sm">
              By subscribing I accept <Link href="/terms"><span className="underline">terms & conditions</span></Link>.
            </p>
          </div>

          {/* Grid Section */}
          {/* <div className="grid grid-cols-1 gap-4 mb-8"> */}
            {/* <div className="bg-gray-700 p-4 text-center">Item 1</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 text-center">Item 2</div>
              <div className="bg-gray-700 p-4 text-center">Item 3</div>
            </div> */}
            <FooterLocations />
          {/* </div> */}

          {/* Social Media Icons */}
          <div className="flex items-center">
            <p className="text-white text-lg mr-4">FOLLOW US <span className='text-[#E45D25]'>ON:</span></p>
            <Link href="https://www.instagram.com" target="_blank">
              <div className="mr-4">
                <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
              </div>
            </Link>
            <Link href="https://www.facebook.com" target="_blank">
              <div className="mr-4">
                <Image src="/fb.svg" alt="Facebook" width={24} height={24} />
              </div>
            </Link>
            <Link href="https://www.linkedin.com" target="_blank">
              <div className="mr-4">
                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </div>
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <div>
                <Image src="/x.svg" alt="X" width={24} height={24} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
