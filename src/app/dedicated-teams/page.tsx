'use client'; // You can remove this if the page doesn't require client-side rendering

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import HeroSection from '../components /HeroSection';
import AboutSection from '../components /AboutSection';
import Industry from '../sections/Industry';
import FaqSection from '../sections/FaqSection';
// import Testimonials from '../sections/Testimonials';
import Awards from '../sections/Awards';
import Contact from '../sections/Contact';
import BlogPost from '../sections/BlogPost';
import WhyAugment from '../components /WhyAugment';
import BlogPostCard from '../components /BlogPostCard';
import ExpertWork from '../components /ExpertWork';
import { AnimatePresence, motion } from 'framer-motion';

const DedicatedTeams: React.FC = () => {
  const AboutSectionRef = useRef<HTMLElement>(null);
  const benefitsSectionRef = useRef<HTMLElement>(null);
  const WhatWeProvideSectionRef =  useRef<HTMLElement>(null);
  const whyAugmentSectionRef = useRef<HTMLElement>(null);
  const ExpertWorkSectionRef = useRef<HTMLElement>(null);
  // const TestimonialsSectionRef = useRef<HTMLElement>(null);
  const IndustrySectionRef = useRef<HTMLElement>(null);
  const ContactSectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);



  const heroSectionProps = {
    backgroundImage: '/staff-hero.jpg', // Provide the path to the background image
    paragraphText1: 'Create. Collaborate. Develop.', // Primary text
    heroSectionTextLine1: 'Transform Your Business',
    heroSectionTextLine2: 'With Cutting Edge Technology',
    heroSectionTextLine3: 'Innovate and Grow',
    paragraphText2: 'Achieve consistency with dedicated teams focused entirely on your project for better results. Get specialized expertise and full control over development without overhead.',
    buttonLabel: 'Schedule a Call',
    logoTitle:'Our experts have been working alongside in-house teams',
    onButtonClick: () => alert('Button clicked!'),
  };

  // About section data
  const aboutItems = [
    { id: 1, title: 'What is Dedicated Teams?', content: 'Details about our history' },
    { id: 2, title: 'Benefits of Dedicated Teams', content: 'Details about our mission' },
    { id: 3, title: 'What we provide?', content: 'Details about our vision' },
    { id: 4, title: 'Why you need Dedicated Teams?', content: 'Details about our team' },
    { id: 5, title: 'Our experts work in...', content: 'Details about our team' },
    { id: 6, title: 'Schedule a call', content: 'Details about our team' },
    { id: 7, title: 'Related Insights', content: 'Details about our team' },
  ];
  
const paragraphContent = `Dedicated teams provide businesses with a customized, full-time workforce committed exclusively to their projects. This approach allows companies to scale resources according to their requirements, giving them access to top-tier professionals who understand the project intricately. 
A dedicated team becomes an extension of your company, deeply integrating into your processes and aligning with your vision. This model is particularly advantageous for long-term projects where continuous development and close collaboration are necessary.
Additionally, dedicated teams often provide a cost-effective solution, offering a balance between quality and affordability. The result is enhanced productivity and sustained project momentum.
Ultimately, leveraging a dedicated team allows businesses to focus on core competencies while ensuring that their development efforts are being handled by skilled professionals. This partnership promotes innovation and drives success by maintaining a strong focus on achieving the project’s goals with expert-level support.
`;  


    const handleSectionChange = (id: number) => {
      if (id === 2 && benefitsSectionRef.current) {
        benefitsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (id === 4 && whyAugmentSectionRef.current) {
        whyAugmentSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (id === 3 && WhatWeProvideSectionRef.current) {
        WhatWeProvideSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (id === 6 && ContactSectionRef.current) {
        ContactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      else if (id === 1 && AboutSectionRef.current) {
        AboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      else if (id === 5 && ExpertWorkSectionRef.current) {
        ExpertWorkSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }


    };

    const visibleProjects = [
      {
        bgImage: "/web.jpg",
        topic: "Tailored Expertise",
        description: "Teams handpicked and customized based on your project's specific requirements, providing the right skills for the job.",
      },
      {
        bgImage: "/web.jpg",
        topic: "Full-time Commitment",
        description: "Dedicated professionals focused solely on your project, ensuring continuous progress and attention to detail.",
      },
      {
        bgImage: "/web.jpg",
        topic: "Flexible Scaling",
        description: "Easily scale your team up or down based on your project needs, maintaining agility and responsiveness.",
      },
      {
        bgImage: "/web.jpg",
        topic: "Seamless Integration",
        description: "Teams that integrate into your existing workflows and collaborate closely with your in-house teams for smooth operations.",
      },
      {
        bgImage: "/web.jpg",
        topic: "Cost-effective Solutions",
        description: "Benefit from a cost-efficient structure that avoids the overhead of maintaining an in-house team while ensuring quality output.",
      },
      {
        bgImage: "/web.jpg",
        topic: "Long-term Partnership",
        description: "Foster strong, long-term relationships with dedicated teams that grow alongside your project and business needs.",
      },
    ];

    const faqItems = [
        {
          question: 'How do dedicated teams maintain high productivity in long-term projects?',
          answer: 'Dedicated teams adopt agile development methodologies, ensuring continuous integration, frequent communication, and adaptability to evolving project needs. Tools like Jira and Confluence are employed for transparency and efficiency, maintaining consistent delivery cycles.',
        },
        {
          question: 'What technological expertise can a dedicated team bring to complex software architecture design?',
          answer: 'Our dedicated teams have expertise in microservices, cloud architecture (AWS, Azure), and serverless computing. They can also assist with container orchestration using Kubernetes and optimize for high-performance computing environments.',
        },
        {
          question: 'Can the dedicated team handle end-to-end AI-driven solutions from development to deployment?',
          answer: 'Yes, our teams specialize in building AI-driven solutions, including data pipeline construction, model training (TensorFlow, PyTorch), and deployment in cloud environments (AWS SageMaker). We manage end-to-end delivery of AI projects.',
        },
        {
          question: 'How do dedicated teams handle version control and documentation for enterprise-level projects?',
          answer: 'We implement industry-standard version control practices using Git, with detailed commit histories and branch strategies. For documentation, we use tools like Confluence, ensuring all technical processes, API documentation, and architecture diagrams are up-to-date.',
        },
      ];
      

    const title = "What we provide?";
  const highlightedTitlePart = "provide?";
  const description = `AItoXR’s Dedicated Teams services offer businesses the opportunity to quickly access top-tier technical talent without the overhead of full-time employment.
   We deliver highly skilled professionals who seamlessly integrate into your existing teams, bringing expertise in cutting-edge technologies and methodologies to support your project goals.`;
    
   // Ensure the first card is rendered initially and auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % visibleProjects.length);
    }, 4000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [visibleProjects.length]);
  
  return (
    <>
      <HeroSection {...heroSectionProps} />
      <AboutSection
        listItems={aboutItems}
        paragraphText={paragraphContent}
        backgroundColor="#FFFFFF"
        onSectionChange={handleSectionChange}
        ref={AboutSectionRef}
      />

<section ref={benefitsSectionRef} className="bg-[#F3F3F3] py-8 lg:py-16 m-auto w-full">
  {/* Title */}
  <h2 className="text-center font-bold text-3xl sm:text-3xl md:text-4xl lg:text-[3rem] mb-4">
    Benefits of Staff <span className="text-[#E45D25]">Augmentation</span>
  </h2>

  {/* Paragraph */}
  <p className="text-center text-base sm:text-lg md:text-xl lg:text-[1.125rem] w-[82%] m-auto mb-8">
  Dedicated teams consist of professionals who are exclusively aligned with your project, ensuring deep understanding and expertise tailored to your specific business needs.
  </p>

  {/* Benefits Icons Grid */}
    <div className="grid grid-cols-2 gap-8 lg:flex lg:justify-center lg:gap-16 w-[82%] m-auto">
    {/* Benefit 1 */}
    <div
      className="min-w-[178px] h-[140px] border-[2px] border-[#E45D25] rounded-[20px] flex flex-col items-center justify-center p-4"
    >
      <Image src="/badge.svg" alt="badge icon" height={69} width={69} />
      <h3 className="text-center text-[14px] font-medium mt-4">Focused Expertise</h3>
    </div>

    {/* Benefit 2 */}
    <div
      className="min-w-[178px] h-[140px] border-[2px] border-[#E45D25] rounded-[20px] flex flex-col items-center justify-center p-4"
    >
      <Image src="/chatting.svg" alt="chat icon" height={69} width={69} />
      <h3 className="text-center text-[14px] font-medium mt-4">Scalability and Flexibility</h3>
    </div>

    {/* Benefit 3 */}
    <div
      className="min-w-[178px] h-[140px] border-[2px] border-[#E45D25] rounded-[20px] flex flex-col items-center justify-center p-2"
    >
      <Image src="/time-left.svg" alt="watch icon" height={57} width={57} />
      <h3 className="text-center text-[14px] font-medium mt-4">Seamless Collaboration</h3>
    </div>

    {/* Benefit 4 */}
    <div
      className="min-w-[178px] h-[140px] border-[2px] border-[#E45D25] rounded-[20px] flex flex-col items-center justify-center p-4"
    >
      <Image src="/heart.svg" alt="heart icon" height={62} width={62} />
      <h3 className="text-center text-[14px] font-medium mt-4">Long-term Commitment</h3>
    </div>
  </div>
</section>


<section ref={WhatWeProvideSectionRef} className="py-8 lg:py-16 w-full m-auto">
      {/* Heading */}
      <h2 className="text-center font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl leading-[145%] mb-8">
        {title.split(highlightedTitlePart)[0]}
        <span className="text-[#E45D25]"> {highlightedTitlePart} </span>
        {title.split(highlightedTitlePart)[1]}
      </h2>

      {/* Description */}
      <p className="text-center text-base sm:text-lg md:text-xl lg:text-[1.125rem] font-normal leading-[167%] mx-auto w-[82%] mb-12">
        {description}
      </p>

      {/* Project Cards - Grid for larger screens */}
      <div className="grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 mx-auto w-[82%] justify-items-center hidden md:grid">
        {visibleProjects.map((project, index) => (
          <BlogPostCard
            key={index}
            bgImage={project.bgImage}
            topic={project.topic}
            description={project.description}
            type="project"
          />
        ))}
      </div>

      {/* Slider for smaller screens <= 768px */}
      <div className="md:hidden w-full overflow-auto px-6 mx-auto">
        <div className="w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {visibleProjects[activeIndex] && (
              <BlogPostCard
                bgImage={visibleProjects[activeIndex]?.bgImage || visibleProjects[0]?.bgImage}
                topic={visibleProjects[activeIndex]?.topic || visibleProjects[0]?.topic}
                description={visibleProjects[activeIndex]?.description || visibleProjects[0]?.description}
                type="project"
              />
            )}

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>


        <WhyAugment ref={whyAugmentSectionRef} />

        <ExpertWork ref={ExpertWorkSectionRef}/>

       {/* Industries we serve */}
       <Industry ref={IndustrySectionRef}/>

       {/* Client Testimonials */}
       {/* <Testimonials ref={TestimonialsSectionRef}/> */}

       {/* FAQs */}
       <FaqSection faqItems={faqItems} />


       {/* Awards and recognition */}
        <Awards/>

        {/* Contant Us */}
        <Contact ref={ContactSectionRef}/>

         {/* Blog Post */}
        <BlogPost/>


    </>
  );
};

export default DedicatedTeams;