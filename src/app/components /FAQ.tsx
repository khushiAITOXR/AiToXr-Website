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
    <div className="relative my-4" style={{ padding: '3px', borderRadius: '50px' }}>
      {/* Background gradient div */}
      <div
        className="absolute inset-0 rounded-[50px] z-0"
        style={{
          background: "linear-gradient(360deg, #E45D25 0%, rgba(245, 142, 30, 0) 74.03%)",
          borderRadius: "50px",
          // padding: "3px"
        }}
      ></div>

      {/* Main content div */}
      <div
        className="relative z-10 bg-white rounded-[47.5px] p-6"
        style={{
          boxSizing: "border-box",
        }}
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
        <div
          ref={answerRef} // Reference to the answer div for dynamic height
          style={{
            maxHeight: maxHeight, // Apply dynamic max-height
            overflow: 'hidden', // Hide overflow
            transition: 'max-height 0.3s ease-in-out', // Smooth transition for max-height
          }}
          className={`text-[#1E1E1E] text-base ${isOpen ? 'mt-6' : 'mt-0'}`}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
