import SectionHeader from '../SectionHeader';
import JourneyCard from './JourneyCard';
import { journey } from '../../data/homepage';
import './HomeJourney.css';

// Section 3 — Legal Learning Journey (4 audience cards).
export default function HomeJourney() {
  return (
    <section className="rrc-section" aria-labelledby="rrc-journey-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow={journey.eyebrow}
          title={journey.title}
          description="Identify your current stage and explore a focused pathway designed for your academic needs and goals."
        />
        <div className="rrc-grid-4 rrc-stagger">
          {journey.items.map((item) => (
            <JourneyCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
