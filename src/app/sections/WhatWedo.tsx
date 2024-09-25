// import React, { useState } from 'react';
// import { FiChevronRight } from 'react-icons/fi'; // Icon for ">" arrow
// import Image from 'next/image';

// const serviceItems = [
//   { id: 1, name: 'Data Science' },
//   { id: 2, name: 'AI/ML Development' },
//   { id: 3, name: 'Web Development' },
//   { id: 4, name: 'APP Development' },
//   { id: 5, name: 'Digital Marketing' },
//   { id: 6, name: 'SAAS Product' },
//   { id: 7, name: 'Products' },
// ];

// const ServiceCard = () => {
//   const [selectedService, setSelectedService] = useState(serviceItems[0].id); // Default selection

//   const handleSelectService = (id: number) => {
//     setSelectedService(id);
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto py-16">
//       <h2 className="text-center text-[#1E1E1E] font-bold text-3xl mb-16">
//         What We <span className="text-[#E45D25]">Do?</span>
//       </h2>

//       {/* Main flex container for left list and right card */}
//       <div className="flex">
//         {/* Left - List of Services */}
//         <div className="w-1/3 bg-[#f5f5f5] rounded-l-lg p-4">
//           {serviceItems.map((service) => (
//             <div
//               key={service.id}
//               className={`flex justify-between items-center px-4 py-3 mb-4 cursor-pointer border-b-[1px] border-black ${
//                 selectedService === service.id ? 'bg-[#E45D25] text-white' : 'bg-transparent text-black'
//               }`}
//               onClick={() => handleSelectService(service.id)}
//             >
//               <span className={`font-bold ${selectedService === service.id ? 'text-white' : 'text-black'}`}>
//                 {service.name}
//               </span>
//               <FiChevronRight size={20} className={selectedService === service.id ? 'text-white' : 'text-black'} />
//             </div>
//           ))}
//         </div>

//         {/* Right - Service Card Details */}
//         <div className="w-2/3 bg-white rounded-r-lg p-8 shadow-lg bg-gradient-to-r from-orange-500 to-orange-400">
//           {/* Header - Technology We Use */}
//           <h3 className="text-center text-white font-bold text-xl mb-6">TECHNOLOGY WE USE</h3>

//           {/* Tech Icons */}
//           <div className="flex justify-center gap-4 mb-6">
//             <Image src="/python.svg" alt="Python" width={50} height={50} />
//             <Image src="/java.svg" alt="Java" width={50} height={50} />
//             <Image src="/cpp.svg" alt="C++" width={50} height={50} />
//             <Image src="/julia.svg" alt="Julia" width={50} height={50} />
//             <Image src="/r.svg" alt="R Language" width={50} height={50} />
//           </div>

//           {/* Card Content */}
//           <div className="text-white text-justify font-normal text-base leading-relaxed">
//             <p>
//               Welcome to AiToXr’s AI-ML Development Services! In today’s rapidly evolving technological landscape, artificial intelligence (AI) and machine learning (ML) are at the forefront of innovation. 
//               At AiToXr, we leverage the power of AI and ML to create intelligent solutions that drive business growth, optimize processes, and enhance user experiences. In today’s data-driven landscape, AI and ML enable precise insights and predictive capabilities.
//             </p>
//             <br />
//             <p>
//               Our AI-ML solutions cater to diverse needs, from predictive analytics to NLP algorithms. Whether enhancing customer engagement or optimizing operations, AiToXr is your trusted partner in AI-ML development.
//             </p>
//           </div>

//           {/* Call to Action Button */}
//           <div className="mt-6 text-center">
//             <button className=" border-white border-2	text-[1.125rem] text-white font-bold py-3 px-6 rounded-[0.625rem]">
//               Click here to know more
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;


import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi'; // Icon for ">" arrow
import Image from 'next/image';

const serviceItems = [
  { id: 1, name: 'AI/ML & Data Science' },
  { id: 2, name: 'AR/VR Applications Development' },
  { id: 3, name: 'Mobile App Development' },
  { id: 4, name: 'Web Application Development' },
  { id: 5, name: 'Blockchain Application Development' },
  { id: 6, name: 'Digital Marketing Services' },
  { id: 7, name: 'E-Commerce Application Development' },
];

interface ServiceContent {
  title: string;
  description: string;
  technologies: string[];
}

// Content for each service
const serviceContent: Record<number, ServiceContent> = {
  1: {
    title: 'AI/ML & Data Science ',
    description: `Artificial Intelligence (AI), Machine Learning (ML), and Data Science are transforming industries across the globe, and at  AItoXR we use them to transform raw data into actionable insights. Our AI & ML-powered solutions are designed to help businesses utilize data, gain actionable insights, and automate decision-making processes. With our expertise in predictive modeling, data mining, and machine learning algorithms, we develop progressive solutions that enhance operational efficiency, personalize customer experiences, and drive business innovation.
    At AItoXR, we ensure that your business stays ahead by using advanced data science techniques that enable smarter, data-driven decisions.
    `,
    technologies: ['/python.svg', '/r.svg', '/cpp.svg',  '/r.svg', '/cpp.svg'],
  },
  2: {
    title: 'AR/VR Applications Development ',
    description: `Augmented Reality (AR) and Virtual Reality (VR) are revolutionizing the way we interact with digital content. At AItoXR, we combine creativity with trending technology to deliver immersive AR and VR experiences that enhance engagement and open new business opportunities. From virtual training environments to interactive marketing campaigns, our AR and VR services transform the way businesses interact with their customers.
    With our AR/VR development services, businesses can create unforgettable experiences that captivate users and differentiate their brand in competitive markets.
    `,
    technologies: ['/python.svg', '/java.svg', '/julia.svg'],
  },
  3: {
    title: 'Mobile App Development',
    description: `Mobile apps are at the core of today’s digital transformation. At AItoXR, we develop innovative mobile applications that are user-centric, scalable, and packed with powerful functionalities. Our mobile app development services cover everything from concept to deployment, ensuring that your app meets the highest standards of quality and performance. Whether it’s iOS or Android, AiToXr’s mobile app solutions are designed to enhance user experiences and drive business growth.
    Our expertise covers a broad spectrum of industries, ensuring your mobile app provides a seamless experience, fosters customer loyalty, and drives business growth.
    `,
    technologies: ['/python.svg', '/r.svg', '/cpp.svg',  '/r.svg', '/cpp.svg'],
  },
  4: {
    title: 'Web Application Development ',
    description: `At AItoXR, we design and develop web applications that are robust, secure, and scalable. Our web solutions are custom-built to fit your unique business needs, and the services include custom solutions, e-commerce platforms, and enterprise applications. Considering performance and user experience, we'll make sure that your web application operates with top-notch efficiency and delivers value to its users.
    Using the latest web development technologies, AItoXR creates web applications that are dynamic, responsive, and ready to grow with your business.
    `,
    technologies: ['/python.svg', '/r.svg', '/cpp.svg',  '/r.svg', '/cpp.svg'],
  },
  5: {
    title: 'Blockchain based Application Development',
    description: `Blockchain is reshaping industries by enhancing transparency, security, and efficiency in transactions. AItoXR provides blockchain development services to help businesses adopt this transformative technology. We ensure secure, scalable, and innovative blockchain implementations for creating decentralized applications (dApps), smart contracts, and blockchain-based supply chain solutions.
    With AItoXR, you can use blockchain to streamline processes, reduce costs, and improve trust in your operations.
    `,
    technologies: ['/python.svg', '/r.svg', '/cpp.svg',  '/r.svg', '/cpp.svg'],
  },
  6: {
    title: 'Digital Marketing Services',
    description: `AiToXr’s digital marketing services help businesses reach their target audience and achieve their marketing goals that help businesses boost their online presence, attract leads, and grow revenue. From SEO and social media marketing to content creation and paid advertising, our strategies are data-driven and customized to meet your business goals.
    Our services in digital marketing focus on creating personalized experiences for your audience, maximizing engagement, and delivering measurable results that drive business success.
    `,
    technologies: ['/python.svg', '/r.svg', '/cpp.svg',  '/r.svg', '/cpp.svg'],
  },
  7: {
    title: 'E-Commerce Application Development',
    description: `AItoXR specializes in building e-commerce platforms that are robust and deliver seamless online shopping experiences. Our expertise in e-commerce ensures that your online business is equipped to succeed in a competitive market.
    With AItoXR's expertise, your e-commerce platform will be equipped to meet the demands of today’s digital consumers and scale effortlessly as your business grow.
    `,
    technologies: ['/python.svg', '/r.svg', '/cpp.svg',  '/r.svg', '/cpp.svg'],
  },
};

const ServiceCard = () => {
  const [selectedService, setSelectedService] = useState(serviceItems[0].id); // Default selection

  const handleSelectService = (id: number) => {
    setSelectedService(id);
  };

  const { title, description, technologies } = serviceContent[selectedService];
  // const firstWord = title.split(" ")[0];
  // const remainingTitle = title.split(" ").slice(1).join(" ");

  return (
    <div className="w-full max-w-7xl mx-auto py-16 bg-white">
      <h2 className="text-center text-[#1E1E1E] font-bold text-3xl mb-16">
        What We <span className="text-[#E45D25]">Do?</span>
      </h2>

      {/* Main flex container for left list and right card */}
      <div className="flex justify-center">
        {/* Left - List of Services */}
        <div className=" bg-[#f5f5f5] rounded-l-lg w-[45%]"
        style={{ position: 'relative', left: '15px', zIndex: '0', borderRadius:'1.25rem 0rem 0rem 1.25rem', width:"50%"}} 
        >
          {serviceItems.map((service) => (
            <div
              key={service.id}
              className={`flex justify-between items-center px-8 py-[1.5rem] cursor-pointer text-[1.5rem] ${
                selectedService === service.id ? 'bg-gr-start text-white' : 'bg-transparent text-black border-black'
              }`}
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
          {/* Header - Technology We Use */}
          <h3 className="text-center text-white font-bold text-xl mb-6">
            {title}</h3>

          {/* Tech Icons */}
          <div className="flex justify-center gap-4 mb-6">
            {technologies.map((tech, index) => (
              <Image key={index} src={tech} alt={`Tech ${index}`} width={80} height={80} />
            ))}
          </div>

          {/* Card Content */}
          <div className="text-white text-justify font-normal text-base leading-relaxed">
            <p>{description}</p>
          </div>

          {/* Call to Action Button */}
          <div className="mt-6 text-center">
            <button className="border-white border-2 text-[1.125rem] text-white font-bold py-3 px-6 rounded-[0.625rem]">
              Click here to know more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
