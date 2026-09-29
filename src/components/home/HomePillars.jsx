import SectionHeader from '../SectionHeader';
import FeatureCard from '../FeatureCard';
import { pillars } from '../../data/homepage';

// Section 5 — More Than Examination Preparation (4 numbered pillars).
export default function HomePillars() {
  return (
    <section className="rrc-section" aria-labelledby="rrc-pillars-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow={pillars.eyebrow}
          title={pillars.title}
          description={pillars.text}
        />
        <div className="rrc-grid-4 rrc-stagger">
          {pillars.items.map((item) => (
            <FeatureCard
              key={item.id}
              number={item.number}
              title={item.title}
              description={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
