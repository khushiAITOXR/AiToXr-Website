'use client'; // You can remove this if the page doesn't require client-side rendering

import BlogPost from '../sections/BlogPost';
import Contact from '../sections/Contact';
import HeroSection from './HeroSection';
import ProductCard from './ProductCard';

const Products: React.FC = () => {



  const heroSectionProps = {
    backgroundImage: '/products-hero-image.jpg', // Provide the path to the background image
    heroSectionTextLine1: 'OUR',
    heroSectionTextLine3: 'PRODUCTS',
    paragraphText2: 'We create the best product which this growing industry needs. Look our product and find the best for your business',
    text: 'We customize products for your company. Let’s connect to know what you need and create a better product for your company.',
    buttonLabel: 'Schedule a Call',
    logoTitle:'Our experts have been working alongside in-house teams',
    onButtonClick: () => alert('Button clicked!'),
  };

  const productCardProps1 = {
    imageSrc: '/ai-to-insights.svg',
    title: 'AltoInsights',
    description: 'Staff augmentation is the process of adding talent to your existing team through a third party.',
    bulletPoints: [
      'AI Stock Analysis',
      'AI Chatbot',
      'Report for Investment',
      'Stock Dashboard',
      'Complete Insights',
      'AI Suggestion',
    ],
    buttonLabel: 'View Product',
    onButtonClick: () => {
      console.log('Button clicked');
    },
    imageOnRight: false, // or true, depending on where you want the image to be
  };

  const productCardProps2 = {
    imageSrc: '/insighthread.svg',
    title: 'InsighThread',
    description: 'Staff augmentation is the process of adding talent to your existing team through a third party.',
    bulletPoints: [
      'AI Stock Analysis',
      'AI Chatbot',
      'Report for Investment',
      'Stock Dashboard',
      'Complete Insights',
      'AI Suggestion',
    ],
    buttonLabel: 'View Product',
    onButtonClick: () => {
      console.log('Button clicked');
    },
    imageOnRight: true,
    backgroundColor: '#F3F3F3',
  };
  

  
  return (
    <>
      <HeroSection {...heroSectionProps} />

      <ProductCard {...productCardProps1} />
      <ProductCard {...productCardProps2} />
      <ProductCard {...productCardProps1} />
      

      <Contact />


    </>
  );
};

export default Products;