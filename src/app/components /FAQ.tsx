import React, { useEffect, useRef, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

type FAQProps = {
  question: React.ReactNode; // Accept ReactNode for the question
  answer: React.ReactNode;  // Accept ReactNode for the answer
  isOpen: boolean;          // Indicates whether the FAQ is open
  onToggle: () => void;     // Function to toggle the FAQ
};

const FAQ: React.FC<FAQProps> = ({ question, answer, isOpen, onToggle }) => {
  const answerRef = useRef<HTMLDivElement>(null); // Reference to the answer div for height calculation
  const [maxHeight, setMaxHeight] = useState<string>('0px'); // State to track the max-height

  // Update the max-height based on `isOpen` whenever it changes
  useEffect(() => {
    if (isOpen) {
      // Open: Calculate the scrollHeight dynamically
      setMaxHeight(`${answerRef.current?.scrollHeight}px`);
    } else {
      // Close: Set max-height to 0 for smooth collapse
      setMaxHeight('0px');
    }
  }, [isOpen]);

  return (
    <div
      className={`border-b-3 border-l-3 border-r-3 border-transparent border-b border-b-[#E45D25] rounded-[50px] p-6 my-4 shadow-[0px_1px_1px_rgb(228,93,37),0px_0px_0px_rgb(228,93,37),0px_0px_0px_rgb(228,93,37)]`}
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
        <div
          ref={answerRef} // Reference to the answer div for dynamic height
          style={{
            maxHeight: maxHeight, // Apply dynamic max-height
            overflow: 'hidden', // Hide overflow
            transition: 'max-height 0.3s ease-in-out', // Smooth transition for max-height
          }}
          className="mt-4 text-[#1E1E1E] text-base"
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQ;
