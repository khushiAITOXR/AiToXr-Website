import React from 'react';
import Grid from '../components /Grid';

const WeUse: React.FC = () => {
  const items = [
    {
      src: '/tech-logos/Python_icon.png',
      alt: 'python',
      label: 'Python',
    },
    {
      src: '/tech-logos/Java_icon.png',
      alt: 'java',
      label: 'Java',
    },
    {
      src: '/tech-logos/C++.png',
      alt: 'cpp',
      label: 'C++',
    },
    {
      src: '/tech-logos/Java_icon.png',
      alt: 'julia',
      label: 'Julia',
    },
    {
      src: '/photoshop.png',
      alt: 'Photoshop',
      label: 'Photoshop',
    },
    {
      src: '/tech-logos/R_icon.png',
      alt: 'R Programming',
      label: 'R Programming',
    },
    {
      src: '/tech-logos/Tensorflow_icon.png',
      alt: 'TensorFlow',
      label: 'TensorFlow',
    },
    {
      src: '/tech-logos/Unity_icon.png',
      alt: 'Unity ',
      label: 'Unity ',
    },
    {
      src: '/tech-logos/UnrealEngine_icon.png',
      alt: 'Unreal Engine',
      label: 'Unreal Engine',
    },
    {
      src: '/tech-logos/Flutter_icon.png',
      alt: 'Flutter',
      label: 'Flutter',
    },
    {
      src: '/tech-logos/React_icon.png',
      alt: 'React Native',
      label: 'React Native',
    },
    {
      src: '/tech-logos/Java_icon.png',
      alt: 'Next.js',
      label: 'Next.js',
    },
    {
      src: '/tech-logos/VueIcon.png',
      alt: 'Vue.js',
      label: 'Vue.js',
    },
    {
      src: '/tech-logos/node.png',
      alt: 'Node.js',
      label: 'Node.js',
    },
    {
      src: '/tech-logos/Java_icon.png',
      alt: 'Django',
      label: 'Django',
    },
    {
      src: '/tech-logos/Java_icon.png',
      alt: 'Flask',
      label: 'Flask',
    },
    {
      src: '/tech-logos/Java_icon.png',
      alt: 'GraphQL',
      label: 'GraphQL',
    },
    {
      src: '/tech-logos/Java_icon.png',
      alt: 'Kubernetes',
      label: 'Kubernetes',
    },
    {
      src: '/tech-logos/Java_icon.png',
      alt: 'Docker',
      label: 'Docker',
    },
    {
      src: '/tech-logos/Figma_icon.png',
      alt: 'Figma',
      label: 'Figma',
    },
    {
      src: '/tech-logos/Java_icon.png',
      alt: 'AWS',
      label: 'AWS',
    },
    {
      src: '/tech-logos/Java_icon.png',
      alt: 'Google Cloud',
      label: 'Google Cloud',
    },
    {
      src: '/tech-logos/Tableu.png',
      alt: 'Tableu',
      label: 'Tableu',
    },
    {
      src: '/tech-logos/OpenCV.png',
      alt: 'OpenCV',
      label: 'OpenCV',
    },
  ];

  return (
    <section className="p-8 py-16 bg-[rgba(243,243,243,1)]">
      {/* Section Title */}
      <h2 className="text-center text-[#1E1E1E] font-bold text-3xl mb-16">
        Technology We <span className="text-[#E45D25]">Use</span>
      </h2>

      {/* Grid Section */}
      <div className="mx-auto w-[80%]">
        <Grid rows={3} columns={8} items={items} />
      </div>
    </section>
  );
};

export default WeUse;
