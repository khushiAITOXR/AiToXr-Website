'use client'; // You can remove this if the page doesn't require client-side rendering

import React, { useRef } from 'react';
import HeroSection from '../components /HeroSection';
import AboutSection from '../components /AboutSection';
import Industry from '../sections/Industry';
import FaqSection from '../sections/FaqSection';
import Testimonials from '../sections/Testimonials';
import Awards from '../sections/Awards';
import Contact from '../sections/Contact';
import BlogPost from '../sections/BlogPost';
import SolutionsSection from '../components /SolutionsSection';
import WhyChooseUs from '../components /WhyChooseUs';
import ProjectSection from '../components /ProjectSection';
import ExpertWork from '../components /ExpertWork';

const AiML: React.FC = () => {
  const AboutSectionRef = useRef<HTMLElement>(null);
  const CraftedSolutionsSectionRef = useRef<HTMLElement>(null);
  const ProjectSectionRef = useRef<HTMLElement>(null);
  const WhyChooseUsSectionRef = useRef<HTMLElement>(null);
  const ExpertWorkSectionRef = useRef<HTMLElement>(null);
  const ContactSectionRef = useRef<HTMLElement>(null);
  // const IndustrySectionRef = useRef<HTMLElement>(null);

  const heroSectionProps = {
    backgroundImage: '/app-hero.jpg', // Provide the path to the background image
    paragraphText1: 'Create. Collaborate. Develop.', // Primary text
    heroSectionTextLine1: 'App Development',
    // heroSectionTextLine2: 'With Cutting Edge Technology',
    // heroSectionTextLine3: 'Innovate and Grow',
    paragraphText2: 'Join hands with AiToXr to accelerate your digital transformation journey.',
    buttonLabel: 'Schedule a Call',
    logoTitle:'Companies in which we served',
    onButtonClick: () => alert('Button clicked!'),
  };

  // About section data
  const aboutItems = [
    { id: 1, title: 'What is Mobile App Development ?', content: 'Details about our history' },
    { id: 2, title: 'Our Expertly Crafted Solutions', content: 'Details about our mission' },
    { id: 3, title: 'Projects our team done', content: 'Details about our vision' },
    { id: 4, title: 'Why chose AItoXR?', content: 'Details about our team' },
    { id: 5, title: 'Companies we work for', content: 'Details about our team' },
    { id: 6, title: 'Schedule a call', content: 'Details about our team' },
  ];

  const handleSectionChange = (id: number) => {
    if (id === 2 && CraftedSolutionsSectionRef.current) {
      CraftedSolutionsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 3 && ProjectSectionRef.current) {
      ProjectSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 4 && WhyChooseUsSectionRef.current) {
      WhyChooseUsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 5 && ExpertWorkSectionRef.current) {
      ExpertWorkSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    else if (id === 1 && AboutSectionRef.current) {
      AboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    else if (id === 6 && ContactSectionRef.current) {
      ContactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }

  };
  
  const paragraphContent = `Mobile App Development focuses on creating applications that run on mobile devices such as smartphones and tablets. These apps can be native, developed specifically for platforms like Android or iOS, or cross-platform, built to function across multiple operating systems.
A well-designed mobile app can improve customer satisfaction, streamline operations, and boost brand loyalty. Apps are also critical for delivering services such as notifications, location-based services, and secure payment processing.
Mobile app development includes designing user-friendly interfaces, ensuring fast performance, and integrating features that resonate with your target audience. It’s important to focus on user experience (UX) and user interface (UI) to ensure the app is intuitive, responsive, and aligned with the business goals.
As mobile usage continues to soar, businesses that invest in mobile app development will be better positioned to engage their customers, improve service delivery, and maintain a competitive edge. 
`; 
      
  const solutionItems = [
    {
      imageSrc: '/analysis.svg',
      imageAlt: 'analysis',
      heading: 'Native & Cross-Platform Apps',
      description:
        'Expertise in building both native apps (iOS/Android) and cross-platform apps using Flutter and React Native.',
    },
    {
      imageSrc: '/monitor.svg',
      imageAlt: 'monitor',
      heading: 'Performance Optimization',
      description:
        'Specializing in optimizing app performance, reducing load times, and enhancing user experience.',
    },
    {
      imageSrc: '/data-modelling.svg',
      imageAlt: 'data',
      heading: 'API Integration',
      description:
        'Seamless integration of third-party APIs, RESTful services, and GraphQL to expand mobile app functionality.',
    },
    {
      imageSrc: '/technology.svg',
      imageAlt: 'technology',
      heading: 'UX/UI Design Excellence',
      description:
        'Proficient in delivering user-centric designs, ensuring seamless navigation and engagement through wireframing and prototyping.',
    },
    {
      imageSrc: '/artificial-intelligence.svg',
      imageAlt: 'ai',
      heading: 'Security-First Development',
      description:
        'Building apps with robust security features, including OAuth authentication, data encryption, and secure payment gateways.',
    },
  ];

  const whyChooseUsItems = [
    { imageSrc: '/active.svg', label: 'Expert Talent Pool' },
    { imageSrc: '/ai.png', label: 'Customized Solutions' },
    { imageSrc: '/integration.svg', label: 'Agile Methodologies' },
    { imageSrc: '/idea.svg', label: 'Innovative Technologies' },
    { imageSrc: '/ownership.svg', label: 'Scalable & Flexible' },
  ];

  const chooseUsDescription = 'AItoXR stands out for its deep expertise in cutting-edge technologies and its ability to deliver customized solutions that address your specific business needs. Our agile methodologies ensure flexible and transparent project delivery, allowing us to adapt quickly to changing requirements.'

  const projects = [
    {
      bgImage: '/ai-ml-card.jpg',
      topic: 'AI/ML Engineer',
      description: 'A powerful platform to buy and sell products globally.',
      type: 'project',
    },
    {
      bgImage: '/ai-ml-card.jpg',
      topic: 'AI/ML Engineer',
      description: 'A powerful platform to buy and sell products globally.',
      type: 'project',
    },
    {
      bgImage: '/ai-ml-card.jpg',
      topic: 'AI/ML Engineer',
      description: 'A powerful platform to buy and sell products globally.',
      type: 'project',
    },
    {
      bgImage: '/web.jpg',
      topic: 'Web Development',
      description: 'A powerful platform to buy and sell products globally.',
      type: 'project',
    },
    {
      bgImage: '/ai-ml-card.jpg',
      topic: 'AI/ML Engineer',
      description: 'A powerful platform to buy and sell products globally.',
      type: 'project',
    },
    {
      bgImage: '/ai-ml-card.jpg',
      topic: 'Data Science',
      description: 'A powerful platform to buy and sell products globally.',
      type: 'project',
    },
    {
      bgImage: '/web.jpg',
      topic: 'Web Development',
      description: 'A powerful platform to buy and sell products globally.',
      type: 'project',
    },
    {
      bgImage: '/ai-ml-card.jpg',
      topic: 'AI/ML Engineer',
      description: 'A powerful platform to buy and sell products globally.',
      type: 'project',
    },
  ];

  const faqItems = [
    {
      question: 'How do you ensure high performance across both iOS and Android platforms?',
      answer: 'We develop using cross-platform frameworks like React Native and Flutter, ensuring that both platforms achieve optimal performance by customizing native modules where necessary and using tools like Android Profiler and Xcode Instruments for monitoring.',
    },
    {
      question: 'What is your approach to mobile app security, particularly for financial applications?',
      answer: 'We use advanced security practices, such as encryption (AES, RSA), secure API communications via HTTPS/TLS, and mobile-specific protocols like OAuth 2.0. We also implement biometric authentication and regular security audits to protect user data.',
    },
    {
      question: 'How do you handle offline functionality in mobile applications?',
      answer: 'Offline functionality is implemented using local data storage solutions such as SQLite, Realm, or Firebase offline support. We also integrate data synchronization mechanisms to ensure seamless user experiences when transitioning between offline and online modes.',
    },
    {
      question: 'Can mobile apps be integrated with IoT systems or wearables?',
      answer: 'Yes, we specialize in building mobile apps that interact with IoT devices and wearables using Bluetooth Low Energy (BLE) and RESTful APIs. Our apps can communicate with smart devices for real-time data exchange and control.',
    },
  ];


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

      <SolutionsSection
        sectionTitle="Our Expertly Crafted Solutions"
        highlightedTitlePart="Solutions"
        items={solutionItems}
        sectionStyle={{paddingLeft: "15%", paddingRight:"15%"}}
        ref={CraftedSolutionsSectionRef}
      />

      <ProjectSection
        title="Projects our team done"
        highlightedTitlePart="done"
        projects={projects}
        ref={ProjectSectionRef}

      />

      <WhyChooseUs
        title="Why choose AItoXR?"
        highlightedTitlePart="choose"
        description={chooseUsDescription}
        items={whyChooseUsItems}
        ref={WhyChooseUsSectionRef}
      />

      <ExpertWork ref={ExpertWorkSectionRef}/>

       {/* Industries we serve */}
       <Industry/>

       {/* Client Testimonials */}
       <Testimonials/>

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

export default AiML;