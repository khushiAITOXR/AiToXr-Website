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
    <section className="w-full py-20 bg-white" style={customStyles}>
      <div className="max-w-7xl w-full px-6 mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-[#1E1E1E] font-bold text-5xl mb-10">
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
