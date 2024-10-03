import React from 'react';
import Grid from '../components /Grid';

const WeUse: React.FC = () => {
  const items = [
    {
      src: '/tech-stack/python.svg',
      alt: 'python',
      label: 'Python',
    },
    {
      src: '/tech-stack/java.svg',
      alt: 'java',
      label: 'Java',
    },
    {
      src: '/tech-stack/c++.svg',
      alt: 'cpp',
      label: 'C++',
    },
    {
      src: '/tech-stack/julia.svg',
      alt: 'julia',
      label: 'Julia',
    },
    {
      src: '/tech-stack/ps.svg',
      alt: 'Photoshop',
      label: 'Photoshop',
    },
    {
      src: '/tech-stack/js.svg',
      alt: 'JavaScript',
      label: 'JavaScript',
    },
    {
      src: '/tech-stack/typescript.svg',
      alt: 'TypeScript',
      label: 'TypeScript',
    },
    {
      src: '/tech-stack/pytorch.svg',
      alt: 'PyTorch ',
      label: 'PyTorch ',
    },
    {
      src: '/tech-stack/unreal.svg',
      alt: 'Unreal Engine',
      label: 'Unreal Engine',
    },
    {
      src: '/tech-stack/flutter.svg',
      alt: 'Flutter',
      label: 'Flutter',
    },
    {
      src: '/tech-stack/react-2.svg',
      alt: 'React',
      label: 'React',
    },
    {
      src: 'tech-stack/nextjs2.svg',
      alt: 'Next.js',
      label: 'Next.js',
    },
    {
      src: 'tech-stack/vuejs.svg',
      alt: 'Vue.js',
      label: 'Vue.js',
    },
    {
      src: 'tech-stack/nodejs.svg',
      alt: 'Node.js',
      label: 'Node.js',
    },
    {
      src: 'tech-stack/django.svg',
      alt: 'Django',
      label: 'Django',
    },
    {
      src: '/tech-logos/Java_icon.png',
      alt: 'Flask',
      label: 'Flask',
    },
    {
      src: '/tech-stack/postgresql.svg',
      alt: 'PostreSQL',
      label: 'PostreSQL',
    },
    {
      src: '/tech-stack/kubernets.svg',
      alt: 'Kubernets',
      label: 'Kubernets',
    },
    {
      src: '/tech-stack/docker.svg',
      alt: 'Docker',
      label: 'Docker',
    },
    {
      src: 'tech-stack/figma.svg',
      alt: 'Figma',
      label: 'Figma',
    },
    {
      src: '/tech-stack/aws.svg',
      alt: 'AWS',
      label: 'AWS',
    },
    {
      src: '/tech-stack/gcloud.svg',
      alt: 'Google Cloud',
      label: 'Google Cloud',
    },
    {
      src: '/tech-stack/tb.svg',
      alt: 'Tableu',
      label: 'Tableu',
    },
    {
      src: '/tech-stack/opencv.svg',
      alt: 'OpenCV',
      label: 'OpenCV',
    },
  ];

  return (
    <section className="w-[100%] py-16 bg-[rgba(243,243,243,1)] m-auto">
      {/* Section Title */}
      <h2 className="text-center text-[#1E1E1E] font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        Technology We <span className="text-[#E45D25]">Use</span>
      </h2>

      {/* Grid Section */}
      <div className="mx-auto w-[82%]">
        <Grid items={items} />
      </div>
    </section>
  );
};

export default WeUse;
