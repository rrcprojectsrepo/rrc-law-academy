import SectionHeader from '../SectionHeader';
import FeatureCard from '../FeatureCard';
import { skills } from '../../data/homepage';
import './HomeSkills.css';

// Section 7 — Practical Legal Skills (6 skill areas).
export default function HomeSkills() {
  return (
    <section className="rrc-section" aria-labelledby="rrc-skills-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow={skills.eyebrow}
          title={skills.title}
          description={skills.text}
        />
        <div className="rrc-grid-3 rrc-stagger rrc-skills-grid">
          {skills.items.map((item) => (
            <article key={item.id} className="rrc-skill-card">
              <div className="rrc-skill-card__media">
                <img src={item.image} alt={item.alt} />
              </div>
              <div className="rrc-skill-card__body">
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.text}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
