import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

type FAQProps = {
  question: React.ReactNode; // Accept ReactNode for the question
  answer: React.ReactNode;  // Accept ReactNode for the answer
  isOpen: boolean;          // Indicates whether the FAQ is open
  onToggle: () => void;     // Function to toggle the FAQ
};

const FAQ: React.FC<FAQProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <motion.div
      className={`border-b-3 border-l-3 border-r-3 border-transparent border-b border-b-[#E45D25] rounded-[50px] p-6 my-4 shadow-[0px_2px_1.5px_rgb(228,93,37),0px_0px_0px_rgb(228,93,37),0px_0px_0px_rgb(228,93,37)]`}
      layout   // This prop allows smooth height transition
    >
      {/* Question */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onToggle}
      >
        <h3 className="text-[#1E1E1E] font-medium text-lg">
          {question}
        </h3>
        {isOpen ? (
          <FiChevronUp className="text-[#E45D25] text-2xl" />
        ) : (
          <FiChevronDown className="text-[#E45D25] text-2xl" />
        )}
      </div>

      {/* Answer */}
      {isOpen && (
        <motion.div
          className="mt-4 text-[#1E1E1E] text-base"
          layout  // Smooth transition for height change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {answer}
        </motion.div>
      )}
    </motion.div>
  );
};

export default FAQ;
