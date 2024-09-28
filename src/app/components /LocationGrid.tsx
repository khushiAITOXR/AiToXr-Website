import React from 'react';
import Image from 'next/image';

const locations = [
  {
    src: '/india.svg', // Image path
    title: 'INDIA',
    address: '624 New Dahsmesh Nagar Tehsil Road, Zirakpur, SAS Nagar, Mohali, Punjab',
  },
  {
    src: '/us.svg', // Image path
    title: 'USA',
    address: '26 Matthews Gate, Mississauga ON L5B 3C4, USA',
  },
  {
    src: '/canada.svg', // Image path
    title: 'CANADA',
    address: '26 Matthews Gate, Mississauga ON L5B 3C4, Canada',
  },
];

const FooterLocations: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 text-white py-8 w-full">
      {/* First Row: INDIA HQ (Spanning across all columns in first row) */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 flex items-end">
        <Image src={locations[0].src} alt={locations[0].title} width={180} height={120} className="" />
        <div className='flex-col text-right'>
        <h3 className="text-[#E45D25] text-2xl font-bold mb-2">{locations[0].title}</h3>
        <p className="text-right text-[14px] font-normal ml-2">{locations[0].address}</p>
        </div>
      </div>

      {/* Second Row: USA and CANADA */}
      {locations.slice(1).map((location, index) => (
        <div key={index} className="flex flex-col items-center ml-[10%]">
          <Image src={location.src} alt={location.title} width={150} height={100} className="mb-4" />
          <h3 className="text-[#E45D25] text-2xl font-bold mb-2">{location.title}</h3>
          <p className="text-center text-[14px] font-normal">{location.address}</p>
        </div>
      ))}
    </div>
  );
};

export default FooterLocations;
