import React from 'react';
import InsightsItems from '../components /InsightsItem';

// Array of random titles and descriptions
const insightsData = [
  {
    title: 'Apple Launches New AI Features for iPhone',
    description:
      'Apple recently introduced AI-based features that enhance photo editing and improve battery efficiency using machine learning.',
  },
  {
    title: 'Tesla Sets Record for Electric Car Deliveries',
    description:
      'In Q3 2024, Tesla delivered a record-breaking 500,000 vehicles, showing strong demand for its electric cars worldwide.',
  },
  {
    title: 'Amazon Expands Drone Delivery Service',
    description:
      'Amazon is rolling out its drone delivery service to more cities, aiming to make same-day delivery the norm.',
  },
  {
    title: 'Google Unveils Quantum Computing Breakthrough',
    description:
      'Google’s Quantum AI lab has reached a milestone in quantum computing, potentially revolutionizing data processing.',
  },
  {
    title: 'Microsoft Invests Heavily in AI and Cloud Services',
    description:
      'Microsoft’s new strategy revolves around AI, with investments focused on integrating AI into Azure cloud services.',
  },
  {
    title: 'Samsung’s New Foldable Phones Hit the Market',
    description:
      'Samsung continues to lead the foldable phone market with its latest Galaxy Fold series, offering enhanced durability and display.',
  },
  {
    title: 'NVIDIA’s New GPUs Set Record for AI Performance',
    description:
      'NVIDIA unveiled its latest GPUs that promise massive performance gains for AI tasks, accelerating machine learning workloads.',
  },
  {
    title: 'Meta Focuses on Virtual Reality with New Headset',
    description:
      'Meta announced its new VR headset designed to bring the metaverse closer to mainstream adoption.',
  },
  {
    title: 'Spotify Introduces Lossless Audio for Premium Users',
    description:
      'Spotify has started rolling out lossless audio streaming for its premium subscribers, delivering studio-quality sound.',
  },
  {
    title: 'Adobe Integrates Generative AI into Creative Cloud',
    description:
      'Adobe’s latest update brings generative AI tools to Photoshop, allowing users to create complex designs using simple text prompts.',
  },
  {
    title: 'Netflix Expands into Cloud Gaming',
    description:
      'Netflix is venturing into the gaming world with cloud-based services, offering high-quality games without the need for a console.',
  },
  {
    title: 'Intel Develops New AI-Powered Processors',
    description:
      'Intel has launched a new line of processors specifically designed for AI workloads, improving performance across various applications.',
  },
  {
    title: 'Uber Tests Autonomous Delivery Robots',
    description:
      'Uber is testing delivery robots for food orders, aiming to automate last-mile delivery and reduce operational costs.',
  },
  {
    title: 'PayPal Introduces Cryptocurrency Payments',
    description:
      'PayPal now allows users to pay with cryptocurrencies at millions of merchants, expanding its digital payment offerings.',
  },
  {
    title: 'TikTok Launches AI-Based Video Editing Tools',
    description:
      'TikTok’s new video editing tools, powered by AI, make it easier for creators to produce professional-quality content.',
  },
  {
    title: 'Salesforce Acquires AI Startup for Predictive Analytics',
    description:
      'Salesforce’s acquisition of an AI startup aims to enhance its predictive analytics capabilities for customer relationship management.',
  },
  {
    title: 'SpaceX Breaks Ground on Mars Mission Prototype',
    description:
      'SpaceX has successfully completed testing on its Mars mission prototype, moving one step closer to interplanetary travel.',
  },
  {
    title: 'LinkedIn Enhances Job Search with AI Matching',
    description:
      'LinkedIn now uses AI to improve job matches, helping users find more relevant job listings based on their skills and experience.',
  },
  {
    title: 'YouTube Introduces AI-Powered Recommendations',
    description:
      'YouTube’s latest AI-powered recommendation engine delivers more personalized video suggestions to users based on viewing habits.',
  },
  {
    title: 'IBM Develops New AI Algorithms for Healthcare',
    description:
      'IBM is making strides in healthcare with AI algorithms that help doctors diagnose diseases and predict patient outcomes more accurately.',
  },
];

export default function InsightsList() {
  const handleItemClick = () => {
    alert('Item clicked!');
  };

  // We calculate the height for 12 items
  const itemHeight = 8; // Assuming each item is 8rem high
  const maxItemsBeforeScroll = 12;
  const maxHeight = `${itemHeight * maxItemsBeforeScroll}rem`;

  return (
    <div
      className="overflow-y-auto border-l-2 border=[#9A9A9A] px-2"
      style={{
        maxHeight: maxHeight,
        overflowY: insightsData.length > maxItemsBeforeScroll ? 'auto' : 'hidden', // Enable scroll if more than 12 items
        scrollbarWidth: 'none',
      }}
    >
      {/* Render InsightsItems */}
      {insightsData.map((insight, index) => (
        <InsightsItems
          key={index}
          image="/insights.jpg"
          title={insight.title}
          description={insight.description}
          onClick={handleItemClick}
        />
      ))}
    </div>
  );
}
