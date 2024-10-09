'use client'; 

import React, { useRef } from 'react';
import Image from 'next/image';
import Button from '@/app/components /Button';
import Contact from './sections/Contact';
import BlogPost from './sections/BlogPost';
import Awards from './sections/Awards';
import FaqSection from './sections/FaqSection';
import Industry from './sections/Industry';
import HowWeWork from './sections/HowWeWork';
import WhoWeHelp from './sections/WhoWeHelp';
import WeUse from './sections/WeUse';
import ServiceCard from './sections/WhatWedo';
// import Testimonials from './sections/Testimonials';
import { useRouter } from 'next/navigation';
import Slider from './components /Slider';

const heroSectionTextLine1 = "Accelerate Your Roadmap";
const heroSectionTextLine2 = "With Our Vetted";
const heroSectionTextLine3 = "Nearshore Tech Talent.";
const paragraphText1 = "Create. Collaborate. Develop.";
const paragraphText2 = `Unlocking Business Potential with Data-Driven Insights.
 Empowering Businesses to Innovate and Scale with Comprehensive AI-Driven Solutions`;

export default function HomePage() {

const router = useRouter();
const handleClick = (route: string) => {
    router.push(route); // Navigate programmatically to the route
  };
  const contactRef = useRef<HTMLElement | null>(null);
  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqItems = [
    {
      question: 'Can AItoXR customize solutions to fit specific business needs?',
      answer: 'Yes, we specialize in tailoring AI-driven and digital solutions to meet the unique requirements of each client, ensuring a perfect fit for their business goals.',
    },
    {
      question: 'What services does AItoXR provide?',
      answer: 'AItoXR offers a wide range of services including AI/ML development, AR/VR solutions, mobile and web app development, blockchain integration, digital marketing, and staff augmentation, among others.',
    },
    {
      question: 'How does AItoXR handle project timelines and deadlines?',
      answer: 'We prioritize transparency and effective project management, ensuring timely delivery of solutions while maintaining open communication and flexibility to adapt to any changes.',
    },
    {
      question: 'Why should businesses choose AItoXR over other providers?',
      answer: 'AItoXR offers a blend of cutting-edge technologies, deep industry expertise, and a customer-first approach, ensuring innovative, scalable, and results-driven solutions tailored to each client’s needs.',
    },
  ];



  return (
    <>
     <section className="relative w-full lg:h-screen  -mt-[75px] overflow-hidden lg:border-b-[10px]"
  style={{
    borderImageSource: 'linear-gradient(90deg, #E45D25 0%, #F58E1E 100%)',
    borderImageSlice: 1,
  }}
>
  {/* Background Image */}
  <div className="relative w-full h-[48vh] lg:h-full overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 lg:top-0 top-[6%] w-full h-full lg:clip-none clip-ellipse">
        <Image 
          src="/heroImage.jpg" 
          alt="Hero Background" 
          fill 
          className="object-cover object-center w-full h-full"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 lg:gradient-l-r gradient-t-b clip-ellipse"
        ></div>
    </div>
</div>




  {/* Text Content for larger screens */}
  <div className="absolute top-0 flex flex-col items-start justify-center w-full px-6 sm:px-8 lg:px-20 lg:h-[90vh]">
    
    {/* Paragraph 1 - Hidden on <1024px */}
    <p className="hidden lg:flex items-center text-white font-normal text-[18px] sm:text-[20px] lg:text-[24px] mb-4">
      {paragraphText1}
      <Image 
        src="/upIcon.svg" 
        alt="growth icon"
        height={22}
        width={20}
        className="ml-2 sm:ml-4 cursor-pointer"
        sizes="(max-width: 768px) 18px, (max-width: 1200px) 20px, 22px"
        onClick={() => handleClick('/')}
      />
    </p>

    {/* Heading - Hidden on <1024px */}
    <h1 className="hidden lg:block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white capitalize lg:w-[58rem] mb-6">
      <div>{heroSectionTextLine1}</div>
      <div>{heroSectionTextLine2}</div>
      <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#E45D25] to-[#F7931E]">
        {heroSectionTextLine3}
      </div>
    </h1>

    {/* Paragraph 2 - Hidden on <1024px */}
    <p className="hidden lg:block text-white font-normal text-[18px] sm:text-[20px] lg:text-[24px] mb-6 lg:w-[56rem]">
      {paragraphText2}
    </p>

    {/* Button - Hidden on <1024px */}
    <div className="hidden lg:block">
      <Button variant="default" label="Schedule a Call" onClick={handleScrollToContact} />
    </div>

  </div>

  {/* Text Content for all screens smaller than 1024px */}
  <div className="flex flex-col items-start justify-start w-full px-6 sm:px-8 lg:mt-0 lg:hidden mt-[8vh] relative bottom-[50px]">
    
    {/* Paragraph 1 - Visible on <1024px */}
    <p className="flex items-center text-black font-normal text-[14px] sm:text-[16px] md:text-[18px] mb-4">
      {paragraphText1}
      <Image 
        src="/upIcon.svg" 
        alt="growth icon"
        height={18}
        width={16}
        className="ml-2 cursor-pointer"
        onClick={() => handleClick('/')}
      />
    </p>

    {/* Heading - Visible on all smaller screens */}
    <h1 className="text-black text-lg sm:text-xl md:text-2xl font-bold capitalize mb-4">
      <div>{heroSectionTextLine1}</div>
      <div>{heroSectionTextLine2}</div>
      <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#E45D25] to-[#F7931E]">
        {heroSectionTextLine3}
      </div>
    </h1>

    {/* Paragraph 2 - Visible on all smaller screens */}
    <p className="text-black font-normal text-[14px] sm:text-[16px] md:text-[18px] mb-4 w-[95%]">
      {paragraphText2}
    </p>

    {/* Button - Visible on all smaller screens */}
    <div>
      <Button variant={'fill'} label="Schedule a Call" onClick={handleScrollToContact} />
    </div>
  </div>

  {/* Bottom Section */}
  <div className="lg:absolute relative py-2 lg:py-2 mt-4 lg:mt-0  lg:bottom-0 left-0 w-full h-[100px] bg-black bg-opacity-50 flex flex-col items-center justify-center lg:h-[22%] lg:flex lg:flex-col lg:justify-center lg:items-center">
    <h3 className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl">
      Our Brand Work for
    </h3>
    <Slider />
  </div>


</section>







    {/* what we do */}
    <ServiceCard/>

    {/* Technology we use */}
    <WeUse/>

    {/* who we can help */}
    <WhoWeHelp/>

    {/* How we work */}
    <HowWeWork/>

    {/* Industries we serve */}
    <Industry/>

    {/* Client Testimonials */}
    {/* <Testimonials/> */}

    {/* FAQs */}
    <FaqSection faqItems={faqItems} />

    {/* Awards and recognition */}
    <Awards/>

    {/* Contant Us */}

    <Contact ref={contactRef}/>



    {/* Blog Post */}
    <BlogPost/>

    </>
  );
}
