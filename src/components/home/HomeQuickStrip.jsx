import ProgramCard from '../ProgramCard';
import { quickPrograms } from '../../data/programs';
import './HomeQuickStrip.css';

// Section 2 — overlapping white strip with 4 quick programme links.
export default function HomeQuickStrip() {
  return (
    <section className="rrc-quick" aria-label="Quick programmes">
      <div className="rrc-container">
        <div className="rrc-quick__panel">
          {quickPrograms.map((item) => (
            <ProgramCard key={item.id} item={item} layout="strip" />
          ))}
        </div>
      </div>
    </section>
  );
}
