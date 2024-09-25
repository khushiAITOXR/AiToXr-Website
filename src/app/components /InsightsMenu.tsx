'use client';

import React, { useState } from 'react';

interface InsightsMenuProps {
  items: { id: number; title: string }[]; // List of menu items with id and title
  defaultSelectedId?: number; // Default selected item id
  onClick?: (id: number) => void; // Click handler for menu item
}

const InsightsMenu: React.FC<InsightsMenuProps> = ({
  items,
  defaultSelectedId = 1, // Default selected item to the first one
  onClick,
}) => {
  const [selectedId, setSelectedId] = useState(defaultSelectedId);

  const handleClick = (id: number) => {
    setSelectedId(id); // Update selected ID
    if (onClick) onClick(id); // Call onClick prop if provided
  };

  return (
    <div className="w-[22rem] bg-transparent">
      <ul className="flex flex-col gap-0">
        {items.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer px-5 py-4 border-b-2 border-gray-300 ${
              selectedId === item.id
                ? 'bg-[#F3F3F3] text-[#1E1E1E] font-medium border-none'
                : 'bg-transparent text-[#9A9A9A]'
            } font-normal text-[18px] leading-[14px]`}
            style={{ fontWeight: 400 }}
            onClick={() => handleClick(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InsightsMenu;
