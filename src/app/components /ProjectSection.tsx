'use client';

import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import BlogPostCard from './BlogPostCard';
import Image from 'next/image';

type ProjectSectionProps = {
  title: string;
  highlightedTitlePart: string;
  projects: {
    bgImage: string;
    topic: string;
    description?: string; // Optional description for project type
  }[];
};

const ProjectSection = forwardRef<HTMLElement, ProjectSectionProps>(
  ({ title, highlightedTitlePart, projects }, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3; // Number of cards visible at once

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

   // Memoized function to handle the next card movement
   const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  }, [projects.length]);

    // Auto-slide effect every 2 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, 2000); // 2 seconds interval

    return () => clearInterval(autoSlide); // Clear interval on component unmount
  }, [handleNext]); // `handleNext` is now a dependenc

  // Calculate the visible projects with looping effect
  const visibleProjects = [
    ...projects.slice(currentIndex, currentIndex + visibleCards),
    ...projects.slice(0, (currentIndex + visibleCards) % projects.length),
  ].slice(0, visibleCards); // Ensures we have only 'visibleCards' number of cards visible

  return (
    <section ref={ref} className="py-8 lg:py-16 w-full">
      {/* Title */}
      <h2 className="text-center font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        {title.split(highlightedTitlePart)[0]}
        <span className="text-[#E45D25]"> {highlightedTitlePart} </span>
        {title.split(highlightedTitlePart)[1]}
      </h2>

      {/* Buttons */}
      <div className="flex justify-end mb-8 w-[82%] mx-auto">
        <button onClick={handlePrev}>
          <Image src="/left.svg" alt="Previous" width={40} height={40} />
        </button>
        <button onClick={handleNext} className="ml-4">
          <Image src="/right.svg" alt="Next" width={40} height={40} />
        </button>
      </div>

      {/* Project Cards */}
      <div className="flex overflow-hidden gap-10 justify-center w-full">
        <div className="flex gap-10 items-center w-[82%]">
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
      </div>
    </section>
  );
});

ProjectSection.displayName = 'ProjectSection';

export default ProjectSection;
