// 'use client';

// import React, { useState } from 'react';
// import { FaCaretDown } from 'react-icons/fa'; // Chevron icon for dropdown

// type DropdownProps = {
//   items: string[];
//   onSelect: (item: string) => void; // Callback function when an item is selected
//   onOpenDropdown: () => void;
// };

// const Dropdown: React.FC<DropdownProps> = ({ items, onSelect, onOpenDropdown }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState<string | null>(null);

//   const handleSelect = (item: string) => {
//     setSelectedItem(item);
//     setIsOpen(false);
//     onSelect(item); // Callback to trigger actions based on selection
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//     onOpenDropdown(); // Close the banner when dropdown opens
//   };

//   return (
//     <div className="relative w-[75%] sm:w-[60%] mid:w-[40%] m-auto ">
//       {/* Select Input */}
//       <div
//         className="bg-transparent lg:bg-[#0000007D] border-2 border-[#E45D25] text-black lg:text-white py-2 px-4 rounded-[10px] flex items-center justify-between cursor-pointer"
//         onClick={toggleDropdown}
//       >
//         <span>{selectedItem || 'Select'}</span>
//         <FaCaretDown style={{color: '#E45D25', height:'24px'}} />
//       </div>

//       {/* Dropdown List */}
//       {isOpen && (
//         <div
//           className="absolute w-full lg:max-h-[280px]  xl:max-h-[220px] 2xl:max-h-[340px] bg:[#00000080] lg:bg-[#00000080] backdrop-blur-[20px] rounded-[10px] mt-2 overflow-y-auto"
//           style={{ padding: '10px', zIndex: 99999 }}
//         >
//           <ul className="space-y-1">
//             {items.map((item, index) => (
//               <li
//                 key={item}
//                 className={`text-white text-[18px]  2xl:text-[20px] font-[400] cursor-pointer lg:py-1 xl:py-2  px-2 ${
//                   index !== items.length - 1 ? 'border-b border-[#FFFFFFCC]' : ''
//                 }`}
//                 onClick={() => handleSelect(item)}
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>

//           {/* Custom Scrollbar */}
//           <style jsx>{`
//             ::-webkit-scrollbar {
//               width: 8px;
//               height:100px;
//             }
//             ::-webkit-scrollbar-thumb {
//               background: linear-gradient(180deg, #d9d9d9 0%, #737373 100%);
//               border-radius: 10px;
//               height:100px;
//             }
//             ::-webkit-scrollbar-track {
//               background: transparent;
//               height:100px;
//             }
//           `}</style>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;

'use client';

import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

type DropdownProps = {
  items: string[];
  onSelect: (item: string) => void; // Callback function when an item is selected
  onOpenDropdown: () => void;
};

const Dropdown: React.FC<DropdownProps> = ({ items, onSelect, onOpenDropdown }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
    onSelect(item); // Callback to trigger actions based on selection
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      onOpenDropdown(); // Close the banner when dropdown opens
    }
  };

  return (
    <div className="relative w-[75%] sm:w-[60%] mid:w-[40%] m-auto">
      {/* Select Input */}
      <div
        className="bg-transparent lg:bg-[#0000007D] border-2 border-[#E45D25] text-black lg:text-white py-2 px-4 rounded-[10px] flex items-center justify-between cursor-pointer"
        onClick={toggleDropdown}
      >
        <span>{selectedItem || 'Select'}</span>
        <FaCaretDown style={{ color: '#E45D25', height: '24px' }} />
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <div
          className=" z-[9999] absolute w-full lg:max-h-[280px] xl:max-h-[220px] 2xl:max-h-[340px] bg-[#00000080] backdrop-blur-[20px] rounded-[10px] mt-2 overflow-y-auto"
          style={{ padding: '10px' }}
        >
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li
                key={item}
                className={`text-white text-[18px] 2xl:text-[20px] font-[400] cursor-pointer lg:py-1 xl:py-2 px-2 ${
                  index !== items.length - 1 ? 'border-b border-[#FFFFFFCC]' : ''
                }`}
                onClick={() => handleSelect(item)}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Custom Scrollbar */}
          <style jsx>{`
            ::-webkit-scrollbar {
              width: 8px;
              height: 100px;
            }
            ::-webkit-scrollbar-thumb {
              background: linear-gradient(180deg, #d9d9d9 0%, #737373 100%);
              border-radius: 10px;
              height: 100px;
            }
            ::-webkit-scrollbar-track {
              background: transparent;
              height: 100px;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
