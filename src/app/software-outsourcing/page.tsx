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

const SoftwareOutsourcing: React.FC = () => {
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
    paragraphText2: 'Outsource your software development to experienced professionals for quality solutions. Reduce costs and focus on core business activities while we handle the technical side.',
    buttonLabel: 'Schedule a Call',
    logoTitle:'Our experts have been working alongside in-house teams',
    onButtonClick: () => alert('Button clicked!'),
  };

  // About section data
  const aboutItems = [
    { id: 1, title: 'What is Software Outsourcing?', content: 'Details about our history' },
    { id: 2, title: 'Benefits of Software Outsourcing', content: 'Details about our mission' },
    { id: 3, title: 'What we provide?', content: 'Details about our vision' },
    { id: 4, title: 'Why you need Software Outsourcing?', content: 'Details about our team' },
    { id: 5, title: 'Our experts work in...', content: 'Details about our team' },
    { id: 6, title: 'Schedule a call', content: 'Details about our team' },
    { id: 7, title: 'Related Insights', content: 'Details about our team' },
  ];
  
const paragraphContent = `Software outsourcing enables businesses to delegate their software development needs to external specialists, optimizing resources and cutting operational costs. By outsourcing, companies gain access to global talent pools, enabling them to work with experts in various technologies and methodologies without geographic limitations.  
Outsourcing also brings significant cost savings, as businesses can tap into the expertise of established development firms without the overhead costs associated with hiring and training an in-house team. Companies can scale their software needs according to project demands, ensuring flexibility and agility in their operations. 
Another key advantage of software outsourcing is its ability to accelerate time-to-market. Moreover, outsourcing teams often bring fresh perspectives and innovative approaches, which can result in better solutions and improved project outcomes.  
With access to a diverse range of technologies, outsourcing partners provide businesses with comprehensive solutions tailored to their unique needs.
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
        topic: "Custom Software Development",
        description: "End-to-end development solutions tailored to meet your unique business requirements, from ideation to implementation.",
      },
      {
        bgImage: "/web.jpg",
        topic: "Access to Global Talent",
        description: "A team of top-tier experts from around the world, offering specialized skills and innovative solutions across various technologies.",
      },
      {
        bgImage: "/web.jpg",
        topic: "Scalable Services",
        description: "Flexible outsourcing solutions that can easily scale to accommodate changing project demands and business growth.",
      },
      {
        bgImage: "/web.jpg",
        topic: "Cost Efficiency",
        description: "Save on operational costs while accessing high-quality development services without the burden of managing an in-house team.",
      },
      {
        bgImage: "/web.jpg",
        topic: "Accelerated Delivery",
        description: "Fast-tracked project timelines through efficient outsourcing processes, ensuring quicker time-to-market and competitive advantage.",
      },
      {
        bgImage: "/web.jpg",
        topic: "Ongoing Support & Maintenance",
        description: "Continuous post-development support and maintenance to ensure your software stays up-to-date, secure, and optimized for performance.",
      },
    ];

    const faqItems = [
      {
        question: 'What frameworks do you use for building scalable web applications in an outsourcing model?',
        answer: 'We use modern frameworks like React, Next.js, Vue.js, and Django for building scalable and responsive web applications. Our focus is on high-performance, modular architectures that allow for future expansion and integration.',
      },
      {
        question: 'How do you manage security and compliance in outsourced software projects?',
        answer: 'Security is a critical focus, and we follow OWASP guidelines for web security. We also comply with GDPR, HIPAA, and other industry-specific regulations, implementing encryption standards, secure APIs, and regular vulnerability assessments throughout the project lifecycle.',
      },
      {
        question: 'Can software outsourcing support DevOps implementation for large-scale cloud infrastructure?',
        answer: 'Yes, our outsourcing services include DevOps integration, using tools like Jenkins, Docker, Terraform, and Ansible to automate infrastructure management and CI/CD processes. We can set up and manage cloud environments on AWS, Azure, or Google Cloud.',
      },
      {
        question: 'What’s your approach to maintaining code quality and technical debt in outsourced projects?',
        answer: 'We follow rigorous code review processes using tools like SonarQube and automated testing suites (Selenium, Jest). Technical debt is minimized by following clean coding practices and ensuring continuous refactoring as part of our development methodology.',
      },
    ];

    const title = "What we provide?";
  const highlightedTitlePart = "provide?";
  const description = `We offer comprehensive software outsourcing solutions that allow your business to leverage our global expertise, cutting-edge technologies, and streamlined processes. Our outsourcing services cover a wide range of software development needs, ensuring flexibility, speed, and efficiency.`;
    
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
    Benefits of Software <span className="text-[#E45D25]">Outsourcing</span>
  </h2>

  {/* Paragraph */}
  <p className="text-center text-base sm:text-lg md:text-xl lg:text-[1.125rem] w-[82%] m-auto mb-8">
    Software Outsourcing offers businesses the flexibility to scale their workforce according to project demands
    without the long-term commitment of hiring full-time employees. It allows access to specialized skills on-demand,
    reduces operational costs, and ensures faster project delivery by filling skill gaps quickly.
  </p>

  {/* Benefits Icons Grid */}
    <div className="grid grid-cols-2 gap-8 lg:flex lg:justify-center lg:gap-16 w-[82%] m-auto">
    {/* Benefit 1 */}
    <div
      className="min-w-[178px] h-[140px] border-[2px] border-[#E45D25] rounded-[20px] flex flex-col items-center justify-center p-4"
    >
      <Image src="/badge.svg" alt="badge icon" height={69} width={69} />
      <h3 className="text-center text-[14px] font-medium mt-4">Cost Efficiency</h3>
    </div>

    {/* Benefit 2 */}
    <div
      className="min-w-[178px] h-[140px] border-[2px] border-[#E45D25] rounded-[20px] flex flex-col items-center justify-center p-4"
    >
      <Image src="/chatting.svg" alt="chat icon" height={69} width={69} />
      <h3 className="text-center text-[14px] font-medium mt-4">Faster Time-to-Market</h3>
    </div>

    {/* Benefit 3 */}
    <div
      className="min-w-[178px] h-[140px] border-[2px] border-[#E45D25] rounded-[20px] flex flex-col items-center justify-center p-2"
    >
      <Image src="/time-left.svg" alt="watch icon" height={57} width={57} />
      <h3 className="text-center text-[14px] font-medium mt-4">Access to Global Talent</h3>
    </div>

    {/* Benefit 4 */}
    <div
      className="min-w-[178px] h-[140px] border-[2px] border-[#E45D25] rounded-[20px] flex flex-col items-center justify-center p-4"
    >
      <Image src="/heart.svg" alt="heart icon" height={62} width={62} />
      <h3 className="text-center text-[14px] font-medium mt-4">Risk Mitigation</h3>
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

export default SoftwareOutsourcing;