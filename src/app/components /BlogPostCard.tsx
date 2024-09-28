import React from 'react';
import Image from 'next/image';
import Button from './Button'; // Assuming you have the Button component created already

type BlogPostCardProps = {
  bgImage: string;
  topic: string;
  type?: 'blog' | 'project';
  description?: string;
};

const BlogPostCard: React.FC<BlogPostCardProps> = ({ bgImage, topic, type = 'blog', description  }) => {
  return (
    <div
      className="relative rounded-xl overflow-hidden"
      style={{ width: '31%', height: '32.3125rem' }} // Fixed width and height
    >
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Blog Post Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-[0]"
        quality={100}
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-center p-4 pb-10">
      {type === 'blog' ? (
          <>
            {/* Blog Topic */}
            <h2 className="text-white text-center text-[28px] font-medium leading-[145%] mb-6">
              {topic}
            </h2>
            {/* Read More Button */}
            <Button
              label="Read Here"
              style={{ paddingLeft: '36px', paddingRight: '36px' }}
              onClick={() => alert('Read More clicked!')}
            />
          </>
        ) : (
          <>
            {/* Project Heading */}
            <h2 className="text-white text-center text-[1.875rem] font-bold leading-[145%] mb-4">
              {topic}
            </h2>
            {/* Project Description */}
            <p className="text-white text-center text-[1rem] font-normal leading-[167%] mb-6">
              {description}
            </p>
            {/* View Project Button */}
            <Button
              variant="default"
              label="View Project"
              style={{ paddingLeft: '36px', paddingRight: '36px' }}
              onClick={() => alert('View Project clicked!')}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPostCard;
