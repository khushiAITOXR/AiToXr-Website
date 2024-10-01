import React, { useState } from 'react';
import FAQ from '../components /FAQ';

interface FaqItem {
  question: React.ReactNode; // Allow question to be a ReactNode to embed links or custom styles
  answer: React.ReactNode; // Same for answer
}

interface FaqSectionProps {
  faqItems: FaqItem[]; // FAQ items containing question and answer
  customStyles?: React.CSSProperties; // Allow custom styles to be passed
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqItems, customStyles }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };
  return (
    <section className="w-[100%] py-8 lg:py-16 bg-white m-auto" style={customStyles}>
      <div className="w-[82%] mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-[#1E1E1E] font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          Frequently Asked <span className="text-[#E45D25]">Questions</span>
        </h2>

        {/* Render each FAQ item dynamically */}
        {faqItems.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} isOpen={openIndex === index}
          onToggle={() => handleToggle(index)} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
