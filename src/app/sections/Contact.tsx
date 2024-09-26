'use client';

import React, { forwardRef } from 'react';
import Button from '../components /Button';
import ContactCard from '../components /ContactCard';

const Office1 = 'INDIA'
const mainAddress1 = '624 New Dahsmesh Nagar Tehsil';
const additionalAddress1 ='Road, Zirakpur, SAS Nagar,';
const phoneNumber1 = 'Mohali, Punjab';

const Office2 = 'CANADA'
const mainAddress2 = '26 Matthews Gate,  Mississauga';
const additionalAddress2 ='ON L5B 3C4, Canada';
const phoneNumber2 = '+91 9876-082332';

const Office3 = 'USA'
const mainAddress3 = 'B-24, Sector - 123, Near School, ';
const additionalAddress3 ='Noida, Delhi - 103342';
const phoneNumber3 = '+91 9876-082332';

const Contact = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="w-full py-16 h-[880px] flex justify-center items-start bg-white">
      <div className="max-w-7xl w-full px-6">
        {/* Section Title */}
        <h2 className="text-center text-[#1E1E1E] font-bold text-3xl">
          Contact <span className="text-[#E45D25]">Us</span>
        </h2>

        {/* Description */}
        <p className="text-center text-[#1E1E1E] text-lg mt-2 font-normal">
          We&apos;re enthusiastic about collaborating with you to bring your vision to life.
        </p>

        {/* Form and Right Column */}
        <div className="flex flex-col lg:flex-row mt-10 gap-8 h-[80%]">
          {/* Form Section */}
          <div className="flex-1">
            <form className="space-y-6">
              {/* First Name and Last Name */}
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-lg border border-black p-3 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-lg border border-black p-3 focus:outline-none"
                />
              </div>

              {/* Mobile Number */}
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full rounded-lg border border-black p-3 focus:outline-none"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-black p-3 focus:outline-none"
              />

              {/* Message */}
              <textarea
                placeholder="Message"
                className="w-full rounded-lg border border-black p-3 h-56 focus:outline-none resize-none"
              ></textarea>

              {/* Button */}
              <Button variant="default" label="Let's Connect" onClick={() => alert('Message sent!')} />
            </form>
          </div>

          {/* Right Section Placeholder */}
          <div className="flex-1">
            {/* Placeholder for right side content */}
            <div className="w-full h-full flex-col justify-between items-center space-y-4">
              <ContactCard
                image="/india.svg" // Use a valid path from your public folder
                hoverImage='/india_white.svg'
                heading={Office1}
                hoverEffect
                contactDetail={{
                  mainAddress: mainAddress1,
                  additional: additionalAddress1,
                  phoneNumber: phoneNumber1
                }}
              />

                <ContactCard
                image="/canada.svg" // Use a valid path from your public folder
                hoverImage='/canada_white.svg'
                heading={Office2}
                hoverEffect
                contactDetail={{
                  mainAddress: mainAddress2,
                  additional: additionalAddress2,
                  phoneNumber: phoneNumber2
                }}
              />
               <ContactCard
                image="/us.svg" // Use a valid path from your public folder
                hoverImage='/usa_white.svg'
                heading={Office3}
                hoverEffect
                contactDetail={{
                  mainAddress: mainAddress3,
                  additional: additionalAddress3,
                  phoneNumber: phoneNumber3
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
