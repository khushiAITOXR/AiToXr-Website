import React, { useState } from 'react';
import { FiChevronRight, FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Icons for arrow toggling
import Image from 'next/image';

const serviceItems = [
  { id: 1, name: 'Data Science' },
  { id: 2, name: 'AI/ML Development' },
  { id: 3, name: 'AR/VR Applications Development' },
  { id: 4, name: 'Mobile App Development' },
  { id: 5, name: 'Web Application Development' },
  { id: 6, name: 'Blockchain Application Development' },
  { id: 7, name: 'Digital Marketing Services' },
  { id: 8, name: 'E-Commerce Application Development' },
  { id: 9, name: 'Staff Augmentation at AItoXR' },
  { id: 10, name: 'Dedicated Teams at AItoXR' },
  { id: 11, name: 'Software Outsourcing at AItoXR' },
];

interface ServiceContent {
  title: string;
  description: string;
  technologies: string[];
}

const serviceContent: Record<number, ServiceContent> = {
  1: {
    title: 'Data Science ',
    description: `Artificial Intelligence (AI), Machine Learning (ML), and Data Science are transforming industries across the globe, and at  AItoXR we use them to transform raw data into actionable insights. Our AI & ML-powered solutions are designed to help businesses utilize data, gain actionable insights, and automate decision-making processes. With our expertise in predictive modeling, data mining, and machine learning algorithms, we develop progressive solutions that enhance operational efficiency, personalize customer experiences, and drive business innovation.
    At AItoXR, we ensure that your business stays ahead by using advanced data science techniques that enable smarter, data-driven decisions.
    `,
    technologies: ['/python.svg', '/r.svg', '/cpp.svg',  '/r.svg', '/cpp.svg'],
  },
  2: {
    title: 'AI/ML Development',
    description: `Augmented Reality (AR) and Virtual Reality (VR) are revolutionizing the way we interact with digital content. At AItoXR, we combine creativity with trending technology to deliver immersive AR and VR experiences that enhance engagement and open new business opportunities. From virtual training environments to interactive marketing campaigns, our AR and VR services transform the way businesses interact with their customers.
    With our AR/VR development services, businesses can create unforgettable experiences that captivate users and differentiate their brand in competitive markets.
    `,
    technologies: ['/python.svg', '/java.svg', '/julia.svg'],
  },
  3: {
    title: 'AR/VR Applications Development',
    description: `Mobile apps are at the core of today’s digital transformation. At AItoXR, we develop innovative mobile applications that are user-centric, scalable, and packed with powerful functionalities. Our mobile app development services cover everything from concept to deployment, ensuring that your app meets the highest standards of quality and performance. Whether it’s iOS or Android, AiToXr’s mobile app solutions are designed to enhance user experiences and drive business growth.
    Our expertise covers a broad spectrum of industries, ensuring your mobile app provides a seamless experience, fosters customer loyalty, and drives business growth.
    `,
    technologies: ['/python.svg', '/r.svg', '/cpp.svg',  '/r.svg', '/cpp.svg'],
  },
  4: {
    title: 'Mobile App Development',
    description: `At AItoXR, we design and develop web applications that are robust, secure, and scalable. Our web solutions are custom-built to fit your unique business needs, and the services include custom solutions, e-commerce platforms, and enterprise applications. Considering performance and user experience, we'll make sure that your web application operates with top-notch efficiency and delivers value to its users.
    Using the latest web development technologies, AItoXR creates web applications that are dynamic, responsive, and ready to grow with your business.
    `,
    technologies: ['/python.svg', '/r.svg', '/cpp.svg',  '/r.svg', '/cpp.svg'],
  },
  5: {
    title: 'Web Application Development',
    description: `Blockchain is reshaping industries by enhancing transparency, security, and efficiency in transactions. AItoXR provides blockchain development services to help businesses adopt this transformative technology. We ensure secure, scalable, and innovative blockchain implementations for creating decentralized applications (dApps), smart contracts, and blockchain-based supply chain solutions.
    With AItoXR, you can use blockchain to streamline processes, reduce costs, and improve trust in your operations.
    `,
    technologies: ['/python.svg', '/r.svg', '/cpp.svg',  '/r.svg', '/cpp.svg'],
  },
  6: {
    title: 'Blockchain Application Development',
    description: `AiToXr’s digital marketing services help businesses reach their target audience and achieve their marketing goals that help businesses boost their online presence, attract leads, and grow revenue. From SEO and social media marketing to content creation and paid advertising, our strategies are data-driven and customized to meet your business goals.
    Our services in digital marketing focus on creating personalized experiences for your audience, maximizing engagement, and delivering measurable results that drive business success.
    `,
    technologies: ['/python.svg', '/r.svg', '/cpp.svg',  '/r.svg', '/cpp.svg'],
  },
  7: {
    title: 'Digital Marketing Services',
    description: `AItoXR specializes in building e-commerce platforms that are robust and deliver seamless online shopping experiences. Our expertise in e-commerce ensures that your online business is equipped to succeed in a competitive market.
    With AItoXR's expertise, your e-commerce platform will be equipped to meet the demands of today’s digital consumers and scale effortlessly as your business grow.
    `,
    technologies: ['/python.svg', '/r.svg', '/cpp.svg',  '/r.svg', '/cpp.svg'],
  },
  8: {
    title: 'E-Commerce Application Development',
    description: `AItoXR specializes in building e-commerce platforms that are robust and deliver seamless online shopping experiences. Our expertise in e-commerce ensures that your online business is equipped to succeed in a competitive market.
    With AItoXR's expertise, your e-commerce platform will be equipped to meet the demands of today’s digital consumers and scale effortlessly as your business grow.
    `,
    technologies: ['/python.svg', '/r.svg', '/cpp.svg',  '/r.svg', '/cpp.svg'],
  },
  9: {
    title: 'Staff Augmentation at AItoXR',
    description: `AItoXR specializes in building e-commerce platforms that are robust and deliver seamless online shopping experiences. Our expertise in e-commerce ensures that your online business is equipped to succeed in a competitive market.
    With AItoXR's expertise, your e-commerce platform will be equipped to meet the demands of today’s digital consumers and scale effortlessly as your business grow.
    `,
    technologies: ['/python.svg', '/r.svg', '/cpp.svg',  '/r.svg', '/cpp.svg'],
  },
  10: {
    title: 'Dedicated Teams at AItoXR',
    description: `AItoXR specializes in building e-commerce platforms that are robust and deliver seamless online shopping experiences. Our expertise in e-commerce ensures that your online business is equipped to succeed in a competitive market.
    With AItoXR's expertise, your e-commerce platform will be equipped to meet the demands of today’s digital consumers and scale effortlessly as your business grow.
    `,
    technologies: ['/python.svg', '/r.svg', '/cpp.svg',  '/r.svg', '/cpp.svg'],
  },
  11: {
    title: 'Software Outsourcing at AItoXR',
    description: `AItoXR specializes in building e-commerce platforms that are robust and deliver seamless online shopping experiences. Our expertise in e-commerce ensures that your online business is equipped to succeed in a competitive market.
    With AItoXR's expertise, your e-commerce platform will be equipped to meet the demands of today’s digital consumers and scale effortlessly as your business grow.
    `,
    technologies: ['/python.svg', '/r.svg', '/cpp.svg',  '/r.svg', '/cpp.svg'],
  },
};

const openRoute = (id: number) => {
  const route = 
    id === 1 ? '/data-science' :
    id === 2 ? '/ai-ml' :
    id === 3 ? '/ai-vr' :
    id === 4 ? '/app-development' :
    id === 5 ? '/web-development' :
    id === 6 ? '/blockchain-development' :
    id === 7 ? '/digital-marketing' :
    id === 8 ? '/ecommerce-development' :
    id === 9 ? '/staff-augmentation' :
    id === 10 ? '/dedicated-teams' :
    id === 11 ? '/software-outsourcing' :
    '/coming-soon';
  window.open(route, '_blank');
};

const ServiceCard = () => {
  // Default to the first service for larger screens
  const [selectedService, setSelectedService] = useState<number | null>(serviceItems[0].id);

  const handleSelectService = (id: number) => {
    setSelectedService(selectedService === id ? null : id); // Toggle the selected service
  };

  return (
    <div className="w-[86%] py-8 sm:py-10 md:py-12 lg:py-16 bg-white m-auto">
      <h2 className="text-center text-[#1E1E1E] font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        What We <span className="text-[#E45D25]">Do?</span>
      </h2>

      {/* Layout for screens smaller than 1024px */}
      <div className="lg:hidden">
        {serviceItems.map((service, index) => (
          <div key={service.id} className="">
            {/* Service List Item */}
            <div
              className={`flex justify-between items-center px-4 py-3 cursor-pointer text-lg ${
                selectedService === service.id
                  ? 'bg-gradient-to-r from-gr-start to-gr-end text-white'
                  : 'bg-gray-100'
              } ${
                index === 0 ? 'rounded-t-lg' : '' // Add top rounded corners to the first item
              } ${
                index === serviceItems.length - 1 && selectedService !== service.id ? 'rounded-b-lg' : '' // Add bottom rounded corners to the last item
              }`}
              onClick={() => handleSelectService(service.id)}
            >
              <span className="font-bold">{service.name}</span>
              {selectedService === service.id ? (
                <FiChevronUp size={24} className="text-white"/>
              ) : (
                <FiChevronDown size={24} className="text-black"/>
              )}
            </div>

            {/* Expandable Content for the selected service */}
            {selectedService === service.id && (
              <div className="p-4 bg-gradient-to-r from-gr-start to-gr-end text-white rounded-b-lg">
                <div className="flex justify-center flex-wrap gap-4 mb-4">
                  {serviceContent[service.id].technologies.map((tech, index) => (
                    <Image key={index} src={tech} alt={`Tech ${index}`} width={50} height={50} />
                  ))}
                </div>
                <p className="text-sm sm:text-base">{serviceContent[service.id].description}</p>
                <div className='flex justify-center'>
                <button className=" bg-white text-[1rem] text-[#E45D25] py-2 px-6 rounded-lg mt-3"
                 onClick={() => openRoute(service.id)}
                >
                  Click here to know more
                </button>
                </div>
              </div>
            )}
            
          </div>
        ))}
      </div>

      {/* Original layout for larger screens (unchanged) */}
      <div className="hidden lg:flex justify-center">
        {/* Left - List of Services */}
        <div className=" bg-[#f5f5f5] rounded-l-lg w-[45%] pr-0 overflow-y-auto overflow-x-hidden"
          style={{ position: 'relative', left: '32px', zIndex: '0', borderRadius: '1.25rem 0rem 0rem 1.25rem', width: "50%", maxHeight: '500px' }}
        >
          {serviceItems.map((service) => (
            <div
              key={service.id}
              className={` w-[102%] flex justify-between items-center pl-8 pr-12 py-[1.5rem] cursor-pointer text-[1.5rem] ${selectedService === service.id ? 'bg-gr-start text-white' : 'bg-transparent text-black border-black'}`}
              onClick={() => handleSelectService(service.id)}
              style={{
                borderRadius: selectedService === service.id ? '1.25rem 0rem 0rem 1.25rem' : '0',
              }}
            >
              <span className={`font-bold ${selectedService === service.id ? 'text-white' : 'text-black'}`}>
                {service.name}
              </span>
              <FiChevronRight size={20} className={selectedService === service.id ? 'text-white' : 'text-black'} />
            </div>
          ))}
        </div>

        {/* Right - Service Card Details */}
        <div className="w-[45%] bg-white rounded-r-lg p-8 shadow-lg bg-gradient-to-r from-gr-start to-gr-end z-40"
          style={{ borderRadius: '1.25rem 2.5rem 2.5rem 1.25rem' }}
        >
          {selectedService !== null && (
            <>
              <h3 className="text-center text-white font-bold text-xl mb-6">
                {serviceContent[selectedService].title}
              </h3>

              {/* Tech Icons */}
              <div className="flex justify-center flex-wrap gap-4 mb-6">
                {serviceContent[selectedService].technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center"
                    style={{
                      width: '16%', // Default width for smaller screens
                      maxWidth: '80px', // Max width to prevent the icons from being too large
                    }}
                  >
                    <Image
                      src={tech}
                      alt={`Tech ${index}`}
                      width={80}
                      height={80}
                      className="w-full h-auto"
                      style={{
                        maxWidth: '100%',
                        maxHeight: 'auto',
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Card Content */}
              <div className="text-white text-justify font-normal text-base leading-relaxed">
                <p>{serviceContent[selectedService].description}</p>
              </div>

              {/* Call to Action Button */}
              <div className="mt-6 text-center">
                <button className="border-white border-2 text-[1.125rem] text-white font-bold py-3 px-6 rounded-[0.625rem]"
                onClick={() => openRoute(selectedService)}
                >
                  Click here to know more
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
