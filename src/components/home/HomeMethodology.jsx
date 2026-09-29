import SectionHeader from '../SectionHeader';
import FeatureCard from '../FeatureCard';
import { methodology } from '../../data/homepage';
import './HomeMethodology.css';

// Section 6 — Learning Methodology (Understand → Practise → Test → Analyse → Improve).
export default function HomeMethodology() {
  return (
    <section className="rrc-section rrc-section--light" aria-labelledby="rrc-method-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow={methodology.eyebrow}
          title={methodology.title}
        />
        <ol className="rrc-method__list rrc-stagger">
          {methodology.items.map((item) => (
            <li key={item.id}>
              <FeatureCard
                number={item.step}
                icon={item.icon}
                title={item.title}
                description={item.text}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
