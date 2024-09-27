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
    backgroundImage: '/gen-ai-hero.jpg', // Provide the path to the background image
    paragraphText1: 'Create. Collaborate. Develop.', // Primary text
    heroSectionTextLine1: 'Generative AI & LLM',
    // heroSectionTextLine2: 'With Cutting Edge Technology',
    // heroSectionTextLine3: 'Innovate and Grow',
    paragraphText2: 'Join hands with AiToXr to accelerate your digital transformation journey.',
    buttonLabel: 'Schedule a Call',
    logoTitle:'Companies in which we served',
    onButtonClick: () => alert('Button clicked!'),
  };

  // About section data
  const aboutItems = [
    { id: 1, title: 'What is Gen AI & LLM Development?', content: 'Details about our history' },
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
  
  const paragraphContent = `Generative AI and Large Language Models (LLMs) are revolutionizing how businesses approach content creation, problem-solving, and automation. Generative AI uses algorithms to produce new data, such as text, images, and even music, based on patterns found in existing data. LLMs, such as OpenAI's GPT models, can understand and generate human-like text, making them invaluable for applications like customer support, content generation, and language translation.
One of the key advantages of Generative AI is its ability to automate creative processes, significantly reducing the time and effort required for tasks like writing, designing, and coding. In industries such as marketing, entertainment, and software development, generative models can produce high-quality outputs at a scale.
LLM Development is particularly impactful in Natural Language Processing (NLP) tasks.  For example, they can write articles, generate marketing copy, or even participate in conversations with customers.
As Generative AI and LLM technologies continue to evolve, they are composed to redefine business operations.
`; 
      
  const solutionItems = [
    {
      imageSrc: '/analysis.svg',
      imageAlt: 'analysis',
      heading: 'Text Generation Models',
      description:
        'Expertise in developing and fine-tuning large language models (LLMs) like GPT, BERT for text generation and conversational AI.',
    },
    {
      imageSrc: '/monitor.svg',
      imageAlt: 'monitor',
      heading: 'Custom LLM Deployment',
      description:
        'Deploying custom language models for industry-specific tasks, such as legal document generation and healthcare chatbot automation.',
    },
    {
      imageSrc: '/data-modelling.svg',
      imageAlt: 'data',
      heading: 'AI Content Creation',
      description:
        'Leveraging generative AI for creative content generation, including writing, music composition, and image creation.',
    },
    {
      imageSrc: '/technology.svg',
      imageAlt: 'technology',
      heading: 'Data Augmentation for LLMs',
      description:
        'Using data augmentation techniques to enhance LLM performance across various domains and languages.',
    },
    {
      imageSrc: '/artificial-intelligence.svg',
      imageAlt: 'ai',
      heading: 'Ethical AI Development',
      description:
        'Ensuring responsible AI usage with bias detection, model explainability, and ethical content generation.',
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
      question: 'How do you implement large language models (LLMs) for specific enterprise use cases?',
      answer: 'We fine-tune large language models (GPT, BERT) using domain-specific data to tailor them for specific enterprise tasks like customer support, document summarization, and automated content creation. These models can be deployed via cloud APIs for real-time usage.',
    },
    {
      question: 'What industries can benefit from generative AI models?',
      answer: 'Industries like healthcare, finance, and retail can benefit from generative AI models for personalized recommendations, automated reporting, and natural language understanding. Our team adapts models for various industry needs, focusing on domain expertise.',
    },
    {
      question: 'How do you manage the training and inference costs of large AI models?',
      answer: 'We utilize cost-efficient cloud infrastructures, including AWS, Google Cloud, and Microsoft Azure, to handle large-scale training and inference. Model pruning and optimization techniques ensure that inference remains cost-effective without sacrificing performance.',
    },
    {
      question: 'Can generative AI models integrate with existing enterprise software?',
      answer: 'Yes, we build APIs and microservices to integrate generative AI models with existing CRM, ERP, and other enterprise systems. This allows businesses to enhance their existing workflows with AI-driven automation and insights.',
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