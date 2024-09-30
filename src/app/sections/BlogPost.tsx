// import React from 'react';
// import BlogPostCard from '../components /BlogPostCard';

// const BlogPost: React.FC = () => {
//   return (
//     <section className="w-full py-16 bg-[#F3F3F3] m-auto">
//       <div className="w-[82%] mx-auto">
//         {/* Section Title */}
//         <h2 className="text-center text-[#1E1E1E] font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-10 md:mb-12 lg:mb-16">
//           Insights
//         </h2>

//         {/* Blog Post Cards */}
//         <div className="mt-10 flex justify-center space-x-[2%] m-auto">
//           <BlogPostCard
//             bgImage="/nvidia.jpg" // Path to your background image
//             topic="Do you offer custom software development?"
//           />
//           <BlogPostCard
//             bgImage="/socialMedia.jpg" // Path to your background image
//             topic="How social media can improve your business?"
//           />
//           <BlogPostCard
//             bgImage="/intel.jpg" // Path to your background image
//             topic="How AI is transforming the tech industry?"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogPost;


import React, { useState, useEffect } from 'react';
import BlogPostCard from '../components /BlogPostCard';

const BlogPost: React.FC = () => {
  // State to track the current visible card
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      bgImage: '/nvidia.jpg',
      topic: 'Do you offer custom software development?',
    },
    {
      bgImage: '/socialMedia.jpg',
      topic: 'How social media can improve your business?',
    },
    {
      bgImage: '/intel.jpg',
      topic: 'How AI is transforming the tech industry?',
    },
  ];

  // Auto-slide logic
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(slideInterval); // Cleanup on component unmount
  }, [cards.length]);

  return (
    <section className="w-full py-16 bg-[#F3F3F3] m-auto">
      <div className="w-[82%] mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-[#1E1E1E] font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          Insights
        </h2>

        {/* Blog Post Cards - Show one card at a time */}
        <div className="flex justify-center">
          <div
            className="flex-shrink-0"
            key={currentIndex}
          >
            <BlogPostCard
              bgImage={cards[currentIndex].bgImage}
              topic={cards[currentIndex].topic}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
