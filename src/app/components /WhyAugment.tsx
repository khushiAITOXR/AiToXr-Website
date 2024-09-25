import React, { forwardRef } from 'react';
import Table from './Table';
import Image from 'next/image';

const WhyAugment = forwardRef<HTMLElement, object>((_, ref) => {
  const columns = [
    {
      header: '',
      data: [
        'Scale your lineup as needed',
        'Get our devs on your team(s)',
        'Get an entire team working with/for you',
        'Manage the team yourself',
        'Leave the project management to us',
      ],
    },
    {
      header: 'Staff Augmentation',
      data: [
        <Image key="tick1" src="/tick.svg" alt="Tick" width={24} height={24} />,
        <Image key="tick2" src="/tick.svg" alt="Tick" width={24} height={24} />,
        <Image key="tick3" src="/tick.svg" alt="Tick" width={24} height={24} />,
        <Image key="tick4" src="/tick.svg" alt="Tick" width={24} height={24} />,
        <Image key="tick5" src="/tick.svg" alt="Tick" width={24} height={24} />,
      ],
    },
    {
      header: 'Dedicated Software Development Team',
      data: [
        <Image key="line1" src="/line.svg" alt="Line" width={24} height={24} />,
        <Image key="line2" src="/line.svg" alt="Line" width={24} height={24} />,
        <Image key="line3" src="/line.svg" alt="Line" width={24} height={24} />,
        <Image key="line4" src="/line.svg" alt="Line" width={24} height={24} />,
        <Image key="line5" src="/line.svg" alt="Line" width={24} height={24} />,
      ],
    },
    {
      header: 'Software Development Outsourcing',
      data: [
        <Image key="outsource1" src="/line.svg" alt="Line" width={24} height={24} />,
        <Image key="outsource2" src="/line.svg" alt="Line" width={24} height={24} />,
        <Image key="outsource3" src="/line.svg" alt="Line" width={24} height={24} />,
        <Image key="outsource4" src="/line.svg" alt="Line" width={24} height={24} />,
        <Image key="outsource5" src="/line.svg" alt="Line" width={24} height={24} />,
      ],
    },
  ];

  const title = 'Why augment your tech team with us?';
  const highlightedTitlePart = 'with us?';
  const description =
    'Staff augmentation is the process of adding talent to your existing team through a third party. This could be anything from 10 engineers joining 10 different teams, to a single developer with niche expertise.';

  return (
    <section ref={ref} className="py-16 bg-[#F3F3F3]">
      {/* Title */}
      <h2 className="text-center text-3xl font-bold leading-[145%] mb-8">
        {title.split(highlightedTitlePart)[0]}
        <span className="text-[#E45D25]">{highlightedTitlePart}</span>
      </h2>

      {/* Description */}
      <p className="text-center text-[1.125rem] font-normal leading-[167%] mx-auto w-[70%] mb-12">
        {description}
      </p>

      {/* Table */}
      <Table columns={columns} />
    </section>
  );
});

WhyAugment.displayName = 'WhyAugment';

export default WhyAugment;
