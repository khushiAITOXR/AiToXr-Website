import React from 'react';
import Card from '../components /Card';

const WhoWeHelp: React.FC = () => {
  return (
    <section className="w-[100%] p-16 bg-white m-auto">
      <h2 className="text-center text-[#1E1E1E] font-bold text-5xl mb-12">
        Who Can We <span className="text-[#E45D25]">Help</span>
      </h2>

      <div className="w-[100%] flex flex-wrap justify-center gap-6 m-auto">
        <Card
          imageSrc="/rocket.png"
          label="STARTUPS"
          description="We provide agile and specialized IT talent, allowing startups to scale quickly and innovate without the overhead of full-time hires. Our customized solutions help you accelerate your growth with the right expertise."
          bgImage="/intel.jpg" // Background image when hovered
        />
        <Card
          imageSrc="/shop.png"
          label="SMALL BUSINESS"
          description="For small businesses looking to enhance their IT capabilities, we offer flexible manpower and tailored support to meet evolving needs. Our solutions drive efficiency, helping you compete effectively in the digital space."
          bgImage="/street.jpg"
        />
        <Card
          imageSrc="/building.png"
          label="LARGE BUSINESS"
          description="Large businesses can benefit from our strategic staffing and IT solutions, which are designed to manage complex, large-scale projects. We deliver long-term value and innovation to keep you ahead in today’s competitive landscape."
          bgImage="/street.jpg"
        />
      </div>
    </section>
  );
};

export default WhoWeHelp;
