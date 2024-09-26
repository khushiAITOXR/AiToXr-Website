'use client'; // You can remove this if the page doesn't require client-side rendering

import React, { useRef } from 'react';
import Image from 'next/image';
import HeroSection from '../components /HeroSection';
import AboutSection from '../components /AboutSection';
import Industry from '../sections/Industry';
import FaqSection from '../sections/FaqSection';
import Testimonials from '../sections/Testimonials';
import Awards from '../sections/Awards';
import Contact from '../sections/Contact';
import BlogPost from '../sections/BlogPost';
import WhyAugment from '../components /WhyAugment';
import BlogPostCard from '../components /BlogPostCard';
import ExpertWork from '../components /ExpertWork';

const StaffAugmentation: React.FC = () => {
  const AboutSectionRef = useRef<HTMLElement>(null);
  const benefitsSectionRef = useRef<HTMLElement>(null);
  const WhatWeProvideSectionRef =  useRef<HTMLElement>(null);
  const whyAugmentSectionRef = useRef<HTMLElement>(null);
  const ExpertWorkSectionRef = useRef<HTMLElement>(null);
  const TestimonialsSectionRef = useRef<HTMLElement>(null);
  const IndustrySectionRef = useRef<HTMLElement>(null);
  const ContactSectionRef = useRef<HTMLElement>(null);



  const heroSectionProps = {
    backgroundImage: '/staff-hero.jpg', // Provide the path to the background image
    paragraphText1: 'Create. Collaborate. Develop.', // Primary text
    heroSectionTextLine1: 'Transform Your Business',
    heroSectionTextLine2: 'With Cutting Edge Technology',
    heroSectionTextLine3: 'Innovate and Grow',
    paragraphText2: 'Join hands with AiToXr to accelerate your digital transformation journey.',
    buttonLabel: 'Schedule a Call',
    logoTitle:'Our experts have been working alongside in-house teams',
    onButtonClick: () => alert('Button clicked!'),
  };

  // About section data
  const aboutItems = [
    { id: 1, title: 'What is Staff Augmentation?', content: 'Details about our history' },
    { id: 2, title: 'Benefits of Staff Augmentation', content: 'Details about our mission' },
    { id: 3, title: 'What we provide?', content: 'Details about our vision' },
    { id: 4, title: 'Why you need staff augmentation?', content: 'Details about our team' },
    { id: 5, title: 'Our experts work in...', content: 'Details about our team' },
    { id: 6, title: 'Schedule a call', content: 'Details about our team' },
    { id: 7, title: 'Related Insights', content: 'Details about our team' },
  ];
  
const paragraphContent = `Staff Augmentation is a flexible staffing solution that allows businesses to bring in external talent to fill specific roles or skill gaps in their teams. This approach is ideal for companies that need specialized expertise on a temporary basis, such as software development, design, or marketing.
One of the key benefits of staff augmentation is the ability to maintain control over projects while accessing a diverse pool of talent. Companies can handpick professionals with the skills required for their projects, ensuring that they get the right expertise for the job.
Staff augmentation also provides flexibility in managing workforce size, allowing companies to scale up or down as needed. It’s a cost-effective solution, as businesses only pay for the specific talent they need, without the long-term financial commitment associated with full-time hires.
For businesses looking to remain agile and competitive, staff augmentation offers a strategic way to manage talent acquisition. 
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
        topic: "AI/ML Engineer",
        description: "Staff augmentation is the process of adding talent to your existing team through a third party.",
      },
      {
        bgImage: "/web.jpg",
        topic: "Data Science",
        description: "Staff augmentation is the process of adding talent to your existing team through a third party.",
      },
      {
        bgImage: "/web.jpg",
        topic: "Web Development",
        description: "Staff augmentation is the process of adding talent to your existing team through a third party.",
      },
      {
        bgImage: "/web.jpg",
        topic: "AI/ML Engineer",
        description: "Staff augmentation is the process of adding talent to your existing team through a third party.",
      },
      {
        bgImage: "/web.jpg",
        topic: "Data Science",
        description: "Staff augmentation is the process of adding talent to your existing team through a third party.",
      },
      {
        bgImage: "/web.jpg",
        topic: "Web Development",
        description: "Staff augmentation is the process of adding talent to your existing team through a third party.",
      },
    ];

    const faqItems = [
      {
        question: 'How does staff augmentation integrate with our existing DevOps pipeline?',
        answer: 'Staff augmentation provides professionals who are experienced in integrating seamlessly with your existing CI/CD pipelines. They can adapt quickly to your development environment and implement automation tools like Jenkins, Docker, or Kubernetes to ensure smooth workflows.',
      },
      {
        question: 'Can augmented staff handle niche AI/ML development tasks within ongoing projects?',
        answer: 'Absolutely, we have specialists skilled in AI/ML, including model deployment and algorithm tuning. Our augmented teams can join at any phase, contributing to AI/ML tasks such as neural network design, data pipeline optimization, and advanced analytics.',
      },
      {
        question: 'What is the typical onboarding process for a senior developer through staff augmentation?',
        answer: 'The onboarding process includes an in-depth understanding of your project architecture, coding standards, and toolsets. We ensure the developer is familiar with your version control (Git), agile methodologies, and participates in sprint planning meetings from day one.',
      },
      {
        question: 'How does staff augmentation handle IP protection and data confidentiality?',
        answer: 'We adhere to stringent NDA agreements and industry-standard practices, ensuring all IP rights and sensitive data are fully protected. Secure data handling is a top priority, and we align with your internal compliance protocols.',
      },
    ];

    const title = "What we provide?";
  const highlightedTitlePart = "provide?";
  const description = `AItoXR’s staff augmentation services offer businesses the opportunity to quickly access top-tier technical talent without the overhead of full-time employment.
   We deliver highly skilled professionals who seamlessly integrate into your existing teams, bringing expertise in cutting-edge technologies and methodologies to support your project goals.`;
    
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
      <section  ref={benefitsSectionRef} className='bg-[#F3F3F3] py-20'>
        <h2 className='text-center font-bold text-[3rem] mb-4'>Benefits of Staff <span className='text-[#E45D25;]'>Augmentation</span></h2>
        <p className='text-center text-[1.125rem] w-[72%] m-auto mb-8'>Staff augmentation offers businesses the flexibility to scale their workforce according to project demands without the long-term commitment of hiring full-time employees. It allows access to specialized skills on-demand, reduces operational costs, and ensures faster project delivery by filling skill gaps quickly</p>
        <div className='flex justify-center gap-32'>
          <div className='w-[140px] h-[140px] border-[2px] border-[#E45D25] rounded-[20px] flex flex-col items-center justify-center p-4'>
          <Image 
            src="/badge.svg" 
            alt="badge icon"
            height={69}
            width={69}
            />
            <h3 className='text-center text-[14px] font-medium  mt-4'>TOP Experts</h3>
          </div>
          <div className='w-[140px] h-[140px] border-[2px] border-[#E45D25] rounded-[20px] flex flex-col items-center justify-center p-4'>
            <Image 
            src="/chatting.svg" 
            alt="chat icon"
            height={69}
            width={69}
            />
            <h3 className='text-center text-[14px] font-medium mt-4'>Streamline Communication</h3>
          </div>
          <div className='w-[140px] h-[140px] border-[2px] border-[#E45D25] rounded-[20px] flex flex-col items-center justify-center p-2'>
            <Image 
            src="/time-left.svg" 
            alt="watch icon"
            height={57}
            width={57}
            />
            <h3 className='text-center text-[14px] font-medium  mt-4'>Saves Recruitment Time</h3>
          </div>
          <div className='w-[140px] h-[140px]  border-[2px] border-[#E45D25] rounded-[20px] flex flex-col items-center justify-center p-4'>
            <Image 
            src="/heart.svg" 
            alt="heart icon"
            height={62}
            width={62}
            />
            <h3 className='text-center text-[14px] font-medium  mt-4'>Healthy
            Team</h3>
            
          </div>
        </div>
      </section>


      <section ref={WhatWeProvideSectionRef} className="py-16">
          <h2 className="text-center text-5xl font-bold leading-[145%] mb-8">
            {title.split(highlightedTitlePart)[0]}
            <span className="text-[#E45D25]"> {highlightedTitlePart} </span>
            {title.split(highlightedTitlePart)[1]}
          </h2>

          {/* Description */}
          <p className="text-center text-[1.125rem] font-normal leading-[167%] mx-auto w-[70%] mb-12">
            {description}
          </p>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 mx-auto w-full lg:w-[90%] justify-items-center">
            {visibleProjects.map((project, index) => (
              <BlogPostCard
                key={index}
                bgImage={project.bgImage}
                topic={project.topic}
                description={project.description}
                type="project" // Set to 'project'
              />
            ))}
          </div>

        </section>

        <WhyAugment ref={whyAugmentSectionRef} />

        <ExpertWork ref={ExpertWorkSectionRef}/>

       {/* Industries we serve */}
       <Industry ref={IndustrySectionRef}/>

       {/* Client Testimonials */}
       <Testimonials ref={TestimonialsSectionRef}/>

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

export default StaffAugmentation;