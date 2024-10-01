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
  const whyAugmentSectionRef = useRef<HTMLElement>(null);
  const TestimonialsSectionRef = useRef<HTMLElement>(null);
  const ExpertWorkSectionRef = useRef<HTMLElement>(null);
  const IndustrySectionRef = useRef<HTMLElement>(null);

  const heroSectionProps = {
    backgroundImage: '/ai-hero.jpg', // Provide the path to the background image
    paragraphText1: 'Create. Collaborate. Develop.', // Primary text
    heroSectionTextLine1: 'AI/ML Development',
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
    } else if (id === 3 && whyAugmentSectionRef.current) {
      whyAugmentSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 4 && TestimonialsSectionRef.current) {
      TestimonialsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 5 && ExpertWorkSectionRef.current) {
      ExpertWorkSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    else if (id === 1 && AboutSectionRef.current) {
      AboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    else if (id === 6 && IndustrySectionRef.current) {
      IndustrySectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }

  };
  
  const paragraphContent = `Artificial Intelligence (AI) and Machine Learning (ML) are revolutionizing industries by enabling systems to learn from data, identify patterns, and make decisions with minimal human intervention.
   AI/ML helps businesses streamline processes, make smarter decisions, and predict future trends based on vast datasets. In a world where data is abundant, AI and ML capabilities are becoming indispensable for businesses seeking a competitive edge.
    From improving operational efficiency to personalizing customer interactions, these technologies allow businesses to harness the full potential of their data. `; 
      
  const solutionItems = [
    {
      imageSrc: '/analysis.svg',
      imageAlt: 'analysis',
      heading: 'Advanced Model Development ',
      description:
        'Expertise in developing machine learning models for predictive analytics, recommendation systems, and deep learning architectures (CNNs, RNNs).',
    },
    {
      imageSrc: '/monitor.svg',
      imageAlt: 'monitor',
      heading: 'Data Pipeline Optimization',
      description:
        'Skilled in building and managing large-scale data pipelines using Apache Spark, Kafka, and Hadoop for real-time data processing.',
    },
    {
      imageSrc: '/data-modelling.svg',
      imageAlt: 'data',
      heading: 'Natural Language Processing',
      description:
        'Proficiency in NLP techniques, including sentiment analysis, entity recognition, and chatbot development using frameworks like NLTK and SpaCy.',
    },
    {
      imageSrc: '/technology.svg',
      imageAlt: 'technology',
      heading: 'Automated ML',
      description:
        'Leveraging AutoML tools to streamline the process of hyperparameter tuning and model selection for faster deployment.',
    },
    {
      imageSrc: '/artificial-intelligence.svg',
      imageAlt: 'ai',
      heading: 'Cloud AI Integration ',
      description:
        'Experience in deploying AI/ML solutions on cloud platforms like AWS SageMaker, Google AI, and Azure Machine Learning.',
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
      question: 'How do you handle real-time data processing in AI/ML applications?',
      answer: 'We leverage frameworks like Apache Kafka and Spark Streaming to process real-time data streams. For model predictions, we integrate AI/ML models into microservices architecture using TensorFlow Serving or Flask for scalable, real-time inference.',
    },
    {
      question: 'How can Data Science improve my business operations?',
      answer: 'Data Science provides actionable insights from raw data, helping optimize processes, predict trends, and enhance customer experiences.',
    },
    {
      question: 'How do you manage the deployment of machine learning models in cloud environments?',
      answer: 'We deploy models on cloud platforms like AWS SageMaker, Google AI Platform, and Azure ML, using Docker containers for portability and Kubernetes for scalability. This ensures that models are continuously monitored and optimized in production.',
    },
    {
      question: 'Can your AI/ML solutions handle unsupervised learning tasks such as anomaly detection?',
      answer: 'Yes, we specialize in unsupervised learning techniques like clustering (K-Means, DBSCAN) and autoencoders for anomaly detection, applied to domains such as fraud detection, predictive maintenance, and network security.',
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
         className="lg:px-[15%] px-[10%]"
        ref={CraftedSolutionsSectionRef}
      />

      <ProjectSection
        title="Projects our team done"
        highlightedTitlePart="done"
        projects={projects}
      />

      <WhyChooseUs
        title="Why choose AItoXR?"
        highlightedTitlePart="choose"
        description={chooseUsDescription}
        items={whyChooseUsItems}
      />

      <ExpertWork ref={ExpertWorkSectionRef}/>

       {/* Industries we serve */}
       <Industry/>

       {/* Client Testimonials */}
       {/* <Testimonials/> */}

       {/* FAQs */}
       <FaqSection faqItems={faqItems} />


       {/* Awards and recognition */}
        <Awards/>

        {/* Contant Us */}
        <Contact/>

         {/* Blog Post */}
        <BlogPost/>


    </>
  );
};

export default AiML;