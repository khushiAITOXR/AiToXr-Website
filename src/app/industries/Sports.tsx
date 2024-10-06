import Banner from '../products/Banner';
import Contact from '../sections/Contact';
import Provide from './Provide';
import Title from './Title';
import Why from './Why';

const whyChooseUsItems = [
  { imageSrc: '/active.svg', label: 'Unmatched AI Talent Pool' },
  { imageSrc: '/ai.png', label: 'Cutting-Edge In-House AI Lab' },
  { imageSrc: '/integration.svg', label: 'Sector-Specific AI Solutions' },
  { imageSrc: '/idea.svg', label: 'Rapid Prototyping Capabilities' },
  { imageSrc: '/ownership.svg', label: 'Full ownership & Support' },
];

const items = [
  {
    contentTitle: 'Utilization Revenue Management',
    description: 'Utilization review guides in growing the revenue and mitigating the leakages; thereby reducing the TAT of claim processing.',
  },
  {
    contentTitle: 'Utilization Revenue Management',
    description: 'Utilization review guides in growing the revenue and mitigating the leakages; thereby reducing the TAT of claim processing.',
  },
  {
    contentTitle: 'Utilization Revenue Management',
    description: 'Utilization review guides in growing the revenue and mitigating the leakages; thereby reducing the TAT of claim processing.',
  },
  {
    contentTitle: 'Utilization Revenue Management',
    description: 'Utilization review guides in growing the revenue and mitigating the leakages; thereby reducing the TAT of claim processing.',
  },
  {
    contentTitle: 'Utilization Revenue Management',
    description: 'Utilization review guides in growing the revenue and mitigating the leakages; thereby reducing the TAT of claim processing.',
  },
  {
    contentTitle: 'Utilization Revenue Management',
    description: 'Utilization review guides in growing the revenue and mitigating the leakages; thereby reducing the TAT of claim processing.',
  },
];

const Sports = () => {
  return (
    <section className="w-full">
      <Title
        imageSrc="/sports.jpg"
        imageAlt="Sports and Fitness"
        title="Sports and Fitness"
        description="Our healthcare solutions serve organizations worldwide, empowering them to become data-driven, streamline workflows, automate billing, maintain data hygiene, and create omnichannel platforms. We tackle the challenges of managing databases in a rapidly evolving market, with a focus on affordability and effectiveness."
      />

    <Why
        items={whyChooseUsItems}
      />
      <Provide
      title="What We Provide ?"
      highlight="Provide"
      items={items}
    />
    <Banner/>
    <Contact/>
    </section>
  );
};

export default Sports;
