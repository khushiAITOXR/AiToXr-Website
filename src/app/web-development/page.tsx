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
    heroSectionTextLine1: 'Web Development',
    // heroSectionTextLine2: 'With Cutting Edge Technology',
    // heroSectionTextLine3: 'Innovate and Grow',
    paragraphText2: 'Join hands with AiToXr to accelerate your digital transformation journey.',
    buttonLabel: 'Schedule a Call',
    logoTitle:'Companies in which we served',
    onButtonClick: () => alert('Button clicked!'),
  };

  // About section data
  const aboutItems = [
    { id: 1, title: 'What is Web Development?', content: 'Details about our history' },
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
  
  const paragraphContent = `Web Application Development involves building interactive web-based applications that provide a seamless user experience across devices. Unlike traditional websites, web applications allow users to perform various tasks online.
A key advantage of web applications is their accessibility; users can access them from any device with an internet connection. Web applications are also scalable and cost-effective, as they can handle high traffic loads and support the growing needs of businesses. 
In terms of technology, web application development typically involves using modern frameworks such as React, Vue.js, or Angular for front-end development, while back-end systems manage the server, databases, and security. 
With security and user experience being top priorities, web application development ensures that companies can offer scalable, robust, and user-centric solutions to meet their needs.
`; 
      
  const solutionItems = [
    {
      imageSrc: '/analysis.svg',
      imageAlt: 'analysis',
      heading: 'Full-Stack Expertise ',
      description:
        'Proficiency in full-stack development using MERN/MEAN stack (MongoDB, Express, React/Angular, Node.js).',
    },
    {
      imageSrc: '/monitor.svg',
      imageAlt: 'monitor',
      heading: 'Scalable Architecture',
      description:
        'Designing scalable web applications using microservices, cloud-native technologies, and serverless architecture (AWS Lambda).',
    },
    {
      imageSrc: '/data-modelling.svg',
      imageAlt: 'data',
      heading: 'Responsive Design',
      description:
        'Expertise in creating responsive, mobile-first web applications with frameworks like Bootstrap and Tailwind CSS.',
    },
    {
      imageSrc: '/technology.svg',
      imageAlt: 'technology',
      heading: 'Progressive Web Apps (PWA)',
      description:
        'Building fast, reliable, and engaging PWAs that offer an app-like experience on the web.',
    },
    {
      imageSrc: '/artificial-intelligence.svg',
      imageAlt: 'ai',
      heading: 'Performance Optimization',
      description:
        'Ensuring fast load times and optimal performance through CDN integration, caching strategies, and code minification.',
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
      question: 'How do you ensure web applications are highly scalable and capable of handling large traffic?',
      answer: 'We design scalable web applications using microservices architecture and load balancers like Nginx or AWS Elastic Load Balancing. Horizontal scaling with Kubernetes and autoscaling on cloud platforms ensures that applications can handle high traffic volumes efficiently.',
    },
    {
      question: 'What’s your approach to web application security, particularly against common threats like XSS and SQL injection?',
      answer: 'We follow OWASP best practices, applying input validation, sanitization, and implementing Content Security Policies (CSP). Our team ensures robust authentication (OAuth 2.0) and regularly conducts penetration testing to mitigate threats like XSS, SQL injection, and CSRF.',
    },
    {
      question: 'Can you implement progressive web applications (PWAs) for enhanced user engagement?',
      answer: 'Yes, we build Progressive Web Apps (PWAs) using service workers and web app manifests. PWAs offer offline capabilities, push notifications, and fast load times, providing a native app-like experience in the browser.',
    },
    {
      question: 'What frameworks do you use to ensure fast and efficient front-end development?',
      answer: 'We use modern front-end frameworks like React.js, Vue.js, and Angular, combined with CSS frameworks like Tailwind and Bootstrap. These ensure efficient development with component-based architecture and reusable UI elements.',
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