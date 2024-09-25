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

  const heroSectionProps = {
    backgroundImage: '/vr-hero.jpg', // Provide the path to the background image
    paragraphText1: 'Create. Collaborate. Develop.', // Primary text
    heroSectionTextLine1: 'AI/VR Development',
    // heroSectionTextLine2: 'With Cutting Edge Technology',
    // heroSectionTextLine3: 'Innovate and Grow',
    paragraphText2: 'Join hands with AiToXr to accelerate your digital transformation journey.',
    buttonLabel: 'Schedule a Call',
    logoTitle:'Companies in which we served',
    onButtonClick: () => alert('Button clicked!'),
  };

  // About section data
  const aboutItems = [
    { id: 1, title: 'What is AI/ML Development ?', content: 'Details about our history' },
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
  
  const paragraphContent = `Augmented Reality (AR) and Virtual Reality (VR) are revolutionizing the way we interact with digital content. At AItoXR,
   we combine creativity with trending technology to deliver immersive AR and VR experiences that enhance engagement and open new business opportunities. From virtual training environments to interactive marketing campaigns, our AR and VR services transform the way businesses interact with their customers.
   With our AR/VR development services, businesses can create unforgettable experiences that captivate users and differentiate their brand in competitive markets.
`; 
      
  const solutionItems = [
    {
      imageSrc: '/analysis.svg',
      imageAlt: 'analysis',
      heading: 'Immersive Experiences',
      description:
        'Developing augmented and virtual reality solutions that provide immersive user experiences for gaming, education, and training.',
    },
    {
      imageSrc: '/monitor.svg',
      imageAlt: 'monitor',
      heading: '3D Modeling & Simulation',
      description:
        'Expertise in creating 3D models, environments, and interactive simulations using Unity and Unreal Engine.',
    },
    {
      imageSrc: '/data-modelling.svg',
      imageAlt: 'data',
      heading: 'Cross-Platform Development',
      description:
        'Proficient in building AR/VR apps for platforms like Oculus, HTC Vive, and mobile devices (iOS/Android).',
    },
    {
      imageSrc: '/technology.svg',
      imageAlt: 'technology',
      heading: 'Marker-Based & Markerless AR',
      description:
        'Implementing both marker-based and markerless augmented reality using ARKit, ARCore, and Vuforia.',
    },
    {
      imageSrc: '/artificial-intelligence.svg',
      imageAlt: 'ai',
      heading: 'AI Integration in AR/VR',
      description:
        'Merging AI-driven features like gesture recognition, object detection, and real-time analytics within AR/VR applications.',
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

  //FAQs items

  const faqItems = [
    {
      question: 'How do you ensure smooth performance for VR applications on different hardware platforms?',
      answer: 'We optimize VR applications using performance profiling tools such as Unity Profiler and Unreal Insights. Our development process ensures compatibility across devices (Oculus, HTC Vive) by adjusting graphical settings and leveraging techniques like dynamic resolution scaling.',
    },
    {
      question: 'What role does machine learning play in enhancing AR experiences?',
      answer: 'Machine learning models are used in AR to enhance object recognition, gesture tracking, and spatial mapping. We implement solutions using libraries like ARKit, ARCore, and TensorFlow to make AR interactions more intuitive and immersive.',
    },
    {
      question: 'How do you handle real-time rendering in AR/VR environments?',
      answer: 'Real-time rendering is achieved through optimization techniques such as level-of-detail (LOD) models, occlusion culling, and GPU instancing. Our team ensures that performance is maintained without compromising the visual quality of 3D assets.',
    },
    {
      question: 'Can AR/VR applications be integrated with AI-driven analytics for enhanced user insights?',
      answer: 'Yes, we integrate AI analytics tools to track user interactions, motion data, and behavioral patterns in AR/VR environments, providing valuable insights for improving the user experience and tailoring personalized content.',
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