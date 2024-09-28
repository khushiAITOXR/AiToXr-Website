import { forwardRef } from 'react';
import AnimatedImageGrid from './AnimatedImageGrid';

const ExpertWork = forwardRef<HTMLElement>((_, ref) => {
  const column1 = ["/logos/excel.png", "/logos/wave-movers.png", "/logos/techbiz.png"];
  const column2 = ["/logos/first-cry.png", "/logos/iit.png", "/logos/macro-world.png"];
  const column3 = ["/logos/ai-invento.png", "/logos/gateway.png", "/logos/excel.png"];
  const column4 = ["/logos/techbiz.png", "/logos/first-cry.png", "/logos/wave-movers.png"];
  const column5 = ["/logos/excel.png", "/logos/wave-movers.png", "/logos/techbiz.png"];

  const title = 'Our experts worked in';
  const highlightedTitlePart = 'worked in';
  const description =
    'Our staff augmentation experts work across a diverse range of industries and technologies, integrating seamlessly into your existing teams to deliver specialized solutions.';

  return (
    <section ref={ref} className='py-16 w-full'>
      {/* Title */}
      <h2 className="text-center text-5xl font-bold leading-[145%] mb-8">
        {title.split(highlightedTitlePart)[0]}
        <span className="text-[#E45D25]">{highlightedTitlePart}</span>
      </h2>

      {/* Description */}
      <p className="text-center text-[1.125rem] font-normal leading-[167%] mx-auto w-[82%] mb-12">
        {description}
      </p>
      <AnimatedImageGrid
        column1={column1}
        column2={column2}
        column3={column3}
        column4={column4}
        column5={column5}
      />
    </section>
  );
});

ExpertWork.displayName = 'ExpertWork';

export default ExpertWork;