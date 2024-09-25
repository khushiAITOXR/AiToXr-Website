import React from 'react';
import BlogPostCard from '../components /BlogPostCard';

const BlogPost: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#F3F3F3]">
      <div className="max-w-7xl w-full px-6 mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-[#1E1E1E] font-bold text-3xl">
          Blog <span className="text-[#E45D25]">Post</span>
        </h2>

        {/* Blog Post Cards */}
        <div className="mt-10 p-8 flex justify-center space-x-6">
          <BlogPostCard
            bgImage="/nvidia.jpg" // Path to your background image
            topic="Do you offer custom software development?"
          />
          <BlogPostCard
            bgImage="/socialMedia.jpg" // Path to your background image
            topic="How social media can improve your business?"
          />
          <BlogPostCard
            bgImage="/intel.jpg" // Path to your background image
            topic="How AI is transforming the tech industry?"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
