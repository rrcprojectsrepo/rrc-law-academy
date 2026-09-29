import SectionHeader from '../SectionHeader';
import FeatureCard from '../FeatureCard';
import { whyRRC } from '../../data/homepage';
import './HomeWhyRRC.css';

// Section 8 — Why RRC Law Academy (dark navy + gold accents + highlight card).
export default function HomeWhyRRC() {
  return (
    <section className="rrc-section rrc-section--navy rrc-why" aria-labelledby="rrc-why-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow={whyRRC.eyebrow}
          title={whyRRC.title}
          description={whyRRC.text}
        />
        <div className="rrc-grid-3 rrc-stagger">
          {whyRRC.items.map((item) => (
            <FeatureCard
              key={item.id}
              number={item.number}
              icon={item.icon}
              title={item.title}
              description={item.text}
              tone="navy"
            />
          ))}
        </div>
        {whyRRC.highlight ? (
          <div className="rrc-why__highlight">
            <FeatureCard
              number={whyRRC.highlight.number}
              icon={whyRRC.highlight.icon}
              title={whyRRC.highlight.title}
              description={whyRRC.highlight.text}
              tone="highlight"
              cta={whyRRC.highlight.cta}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
